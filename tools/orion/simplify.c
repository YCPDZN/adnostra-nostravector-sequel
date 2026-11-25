// Seam-aware quadric half-edge-collapse simplifier.
// in:  npos, nw, nt (int32 each); pos[npos*3] f64; wpos[nw] i32; tri[nt*3] i32 (wedge ids)
// out: nt' (int32); tri'[nt'*3] i32 (wedge ids)
// Vertices never move (half-edge collapse), so wedge attributes (uv, normal) stay valid.
// A collapse u->v is allowed only if every wedge of u maps to exactly one wedge of v through the
// triangles on edge uv (keeps UV seams intact), the link condition holds, and no triangle flips.
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

typedef struct { int *a; int n, cap; } Vec;
static void vpush(Vec *v, int x) { if (v->n == v->cap) { v->cap = v->cap ? v->cap * 2 : 8; v->a = realloc(v->a, v->cap * sizeof(int)); } v->a[v->n++] = x; }

static int npos, nw, nt;
static double *P, *Q;           // positions, quadrics (10 per pos)
static int *wpos, *T;           // wedge->pos, triangles (wedges)
static char *talive, *locked, *dead;
static int *ver;
static Vec *adj;                // pos -> triangles

typedef struct { double c; int u, v, vu, vv; } HE;
static HE *heap; static long hn, hcap;
static void hpush(HE e) { if (hn == hcap) { hcap = hcap ? hcap * 2 : 1 << 20; heap = realloc(heap, hcap * sizeof(HE)); } long i = hn++; while (i > 0) { long p = (i - 1) / 2; if (heap[p].c <= e.c) break; heap[i] = heap[p]; i = p; } heap[i] = e; }
static HE hpop(void) { HE r = heap[0], x = heap[--hn]; long i = 0; for (;;) { long l = 2 * i + 1, m = i; if (l >= hn) break; if (l + 1 < hn && heap[l + 1].c < heap[l].c) l++; if (heap[l].c >= x.c) break; heap[i] = heap[l]; i = l; (void)m; } heap[i] = x; return r; }

static inline int TP(int t, int k) { return wpos[T[t * 3 + k]]; }
static void qadd(double *q, double a, double b, double c, double d, double w) {
  q[0] += w*a*a; q[1] += w*a*b; q[2] += w*a*c; q[3] += w*a*d; q[4] += w*b*b; q[5] += w*b*c; q[6] += w*b*d; q[7] += w*c*c; q[8] += w*c*d; q[9] += w*d*d; }
static double qeval(const double *q, const double *p) {
  double x = p[0], y = p[1], z = p[2];
  return q[0]*x*x + 2*q[1]*x*y + 2*q[2]*x*z + 2*q[3]*x + q[4]*y*y + 2*q[5]*y*z + 2*q[6]*y + q[7]*z*z + 2*q[8]*z + q[9]; }
static void tnormal(const double *a, const double *b, const double *c, double *n) {
  double e1[3] = {b[0]-a[0], b[1]-a[1], b[2]-a[2]}, e2[3] = {c[0]-a[0], c[1]-a[1], c[2]-a[2]};
  n[0] = e1[1]*e2[2]-e1[2]*e2[1]; n[1] = e1[2]*e2[0]-e1[0]*e2[2]; n[2] = e1[0]*e2[1]-e1[1]*e2[0]; }

static void compact(int p) { Vec *v = &adj[p]; int k = 0; for (int i = 0; i < v->n; i++) if (talive[v->a[i]]) v->a[k++] = v->a[i]; v->n = k; }

// wedge map for collapse u->v; returns 1 if valid
static int mapw[64], mapto[64], nm;
static int valid(int u, int v) {
  if (locked[u] || dead[u] || dead[v] || u == v) return 0;
  compact(u); compact(v);
  nm = 0; int nedge = 0;
  int opp[8], nopp = 0;
  for (int i = 0; i < adj[u].n; i++) {
    int t = adj[u].a[i], ku = -1, kv = -1;
    for (int k = 0; k < 3; k++) { int p = TP(t, k); if (p == u) ku = k; else if (p == v) kv = k; }
    if (kv < 0) continue;
    nedge++;
    int wu = T[t*3+ku], wv = T[t*3+kv], j;
    for (j = 0; j < nm; j++) if (mapw[j] == wu) break;
    if (j < nm) { if (mapto[j] != wv) return 0; }
    else { if (nm == 64) return 0; mapw[nm] = wu; mapto[nm] = wv; nm++; }
    if (nopp < 8) opp[nopp++] = TP(t, 3 - ku - kv);
  }
  if (nedge != 2) return 0;   // manifold interior edge only
  // every wedge of u must be mapped
  for (int i = 0; i < adj[u].n; i++) { int t = adj[u].a[i]; for (int k = 0; k < 3; k++) if (TP(t, k) == u) { int wu = T[t*3+k], j; for (j = 0; j < nm; j++) if (mapw[j] == wu) break; if (j == nm) return 0; } }
  // link condition: common neighbours of u and v are exactly the two opposite vertices
  static int *mark = NULL; static int stamp = 0; if (!mark) mark = calloc(npos, sizeof(int));
  stamp++;
  for (int i = 0; i < adj[v].n; i++) { int t = adj[v].a[i]; for (int k = 0; k < 3; k++) mark[TP(t, k)] = stamp; }
  int common = 0;
  static int *seen = NULL; static int st2 = 0; if (!seen) seen = calloc(npos, sizeof(int));
  st2++;
  for (int i = 0; i < adj[u].n; i++) { int t = adj[u].a[i]; for (int k = 0; k < 3; k++) { int p = TP(t, k); if (p == u || p == v) continue; if (mark[p] == stamp && seen[p] != st2) { seen[p] = st2; common++; if (!(p == opp[0] || p == opp[1])) return 0; } } }
  if (common != 2) return 0;
  // flip / degeneracy check on triangles that survive
  for (int i = 0; i < adj[u].n; i++) {
    int t = adj[u].a[i], has_v = 0; const double *c[3], *cn[3];
    for (int k = 0; k < 3; k++) { int p = TP(t, k); if (p == v) has_v = 1; c[k] = P + 3*p; cn[k] = (p == u) ? P + 3*v : c[k]; }
    if (has_v) continue;
    double n0[3], n1[3]; tnormal(c[0], c[1], c[2], n0); tnormal(cn[0], cn[1], cn[2], n1);
    double l0 = sqrt(n0[0]*n0[0]+n0[1]*n0[1]+n0[2]*n0[2]), l1 = sqrt(n1[0]*n1[0]+n1[1]*n1[1]+n1[2]*n1[2]);
    if (l1 < 1e-14) return 0;
    if (l0 > 1e-14 && (n0[0]*n1[0]+n0[1]*n1[1]+n0[2]*n1[2]) / (l0*l1) < 0.3) return 0;
    // reject slivers: min angle via aspect (area / longest edge^2)
    double e = 0; for (int a = 0; a < 3; a++) { int b = (a+1)%3; double dx = cn[a][0]-cn[b][0], dy = cn[a][1]-cn[b][1], dz = cn[a][2]-cn[b][2]; double L = dx*dx+dy*dy+dz*dz; if (L > e) e = L; }
    if (0.5 * l1 / e < 0.02) return 0;
  }
  return 1;
}
static double cost(int u, int v) { double q[10]; for (int i = 0; i < 10; i++) q[i] = Q[10*u+i] + Q[10*v+i]; double c = qeval(q, P + 3*v); return c < 0 ? 0 : c; }
static void push_edges(int p) {
  compact(p);
  for (int i = 0; i < adj[p].n; i++) { int t = adj[p].a[i]; for (int k = 0; k < 3; k++) { int x = TP(t, k); if (x == p) continue;
    if (!locked[p]) hpush((HE){cost(p, x), p, x, ver[p], ver[x]});
    if (!locked[x]) hpush((HE){cost(x, p), x, p, ver[x], ver[p]}); } }
}

int main(int argc, char **argv) {
  int target = atoi(argv[3]);
  FILE *f = fopen(argv[1], "rb");
  fread(&npos, 4, 1, f); fread(&nw, 4, 1, f); fread(&nt, 4, 1, f);
  P = malloc(sizeof(double) * 3 * npos); wpos = malloc(4 * nw); T = malloc(4 * 3 * (size_t)nt);
  fread(P, 8, 3 * npos, f); fread(wpos, 4, nw, f); fread(T, 4, 3 * (size_t)nt, f); fclose(f);
  Q = calloc(10 * (size_t)npos, sizeof(double)); talive = malloc(nt); memset(talive, 1, nt);
  locked = calloc(npos, 1); dead = calloc(npos, 1); ver = calloc(npos, sizeof(int)); adj = calloc(npos, sizeof(Vec));
  for (int t = 0; t < nt; t++) {
    int a = TP(t,0), b = TP(t,1), c = TP(t,2);
    if (a == b || b == c || a == c) { talive[t] = 0; continue; }
    for (int k = 0; k < 3; k++) vpush(&adj[TP(t, k)], t);
    double n[3]; tnormal(P+3*a, P+3*b, P+3*c, n); double l = sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]); if (l < 1e-20) continue;
    double A = n[0]/l, B = n[1]/l, C = n[2]/l, D = -(A*P[3*a]+B*P[3*a+1]+C*P[3*a+2]);
    for (int k = 0; k < 3; k++) qadd(Q + 10*TP(t, k), A, B, C, D, l * 0.5);
  }
  // lock border / non-manifold vertices: any position-edge not shared by exactly 2 triangles
  for (int p = 0; p < npos; p++) {
    Vec *v = &adj[p];
    for (int i = 0; i < v->n && !locked[p]; i++) { int t = v->a[i]; if (!talive[t]) continue; for (int k = 0; k < 3; k++) { int x = TP(t, k); if (x == p) continue;
      int cnt = 0; for (int j = 0; j < v->n; j++) { int s = v->a[j]; if (!talive[s]) continue; for (int m = 0; m < 3; m++) if (TP(s, m) == x) cnt++; }
      if (cnt != 2) { locked[p] = 1; break; } } }
  }
  int alive = 0; for (int t = 0; t < nt; t++) alive += talive[t];
  long nl = 0; for (int p = 0; p < npos; p++) nl += locked[p];
  fprintf(stderr, "tris %d, locked %ld\n", alive, nl);
  for (int pass = 0; pass < 6 && alive > target; pass++) {
    hn = 0;
    for (int p = 0; p < npos; p++) if (!dead[p] && adj[p].n) { compact(p); for (int i = 0; i < adj[p].n; i++) { int t = adj[p].a[i]; for (int k = 0; k < 3; k++) { int x = TP(t, k); if (x != p && !locked[p]) hpush((HE){cost(p, x), p, x, ver[p], ver[x]}); } } }
    long done = 0, lim = hn * 2 + (1L << 20);
    while (hn && alive > target) {
      if (hn > lim) {   // drop stale entries and re-heapify
        long k = 0; for (long i = 0; i < hn; i++) { HE x = heap[i]; if (!dead[x.u] && !dead[x.v] && ver[x.u] == x.vu && ver[x.v] == x.vv) heap[k++] = x; }
        HE *old = heap; long n = k; heap = NULL; hn = 0; hcap = 0; for (long i = 0; i < n; i++) hpush(old[i]); free(old);
        lim = hn * 2 + (1L << 20);
      }
      HE e = hpop();
      if (dead[e.u] || dead[e.v] || ver[e.u] != e.vu || ver[e.v] != e.vv) continue;
      if (!valid(e.u, e.v)) continue;
      int u = e.u, v = e.v;
      for (int i = 0; i < adj[u].n; i++) {
        int t = adj[u].a[i], hv = 0, ku = -1;
        for (int k = 0; k < 3; k++) { int p = TP(t, k); if (p == v) hv = 1; if (p == u) ku = k; }
        if (hv) { talive[t] = 0; alive--; continue; }
        int wu = T[t*3+ku]; for (int j = 0; j < nm; j++) if (mapw[j] == wu) { T[t*3+ku] = mapto[j]; break; }
        vpush(&adj[v], t);
      }
      adj[u].n = 0; dead[u] = 1;
      for (int i = 0; i < 10; i++) Q[10*v+i] += Q[10*u+i];
      // only v's quadric changed, so only edges touching v need new costs (both directions)
      ver[v]++;
      push_edges(v);
      done++;
    }
    fprintf(stderr, "pass %d: collapses %ld, tris %d\n", pass, done, alive);
  }
  f = fopen(argv[2], "wb"); fwrite(&alive, 4, 1, f);
  for (int t = 0; t < nt; t++) if (talive[t]) fwrite(T + 3*t, 4, 3, f);
  fclose(f);
  return 0;
}
