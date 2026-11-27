"""Dragon skeletons, measured on the models (model units; both dragons face +z, +x is the dragon's left).
Each joint: name -> (parent, head position). TIPS gives where a chain ends. A bone's segment runs from its head to
its single child's head (or its first child's, or its tip)."""
def mirror(J):
    out = {}
    for n, (p, pos) in J.items():
        out[n] = (p, pos)
        if n.endswith('L'): out[n[:-1] + 'R'] = (p[:-1] + 'R' if p and p.endswith('L') else p, (-pos[0], pos[1], pos[2]))
    return out
def mirror_tips(T):
    out = dict(T)
    for n, t in T.items():
        if n.endswith('L'): out[n[:-1] + 'R'] = (-t[0], t[1], t[2])
    return out

TULDRAN = mirror({
    'root': (None, (0, 0.0, -0.04)),
    'hips': ('root', (0, 0.20, -0.05)), 'spine': ('hips', (0, 0.22, 0.06)), 'chest': ('spine', (0, 0.24, 0.17)),
    'neck1': ('chest', (0, 0.28, 0.27)), 'neck2': ('neck1', (0, 0.305, 0.335)), 'head': ('neck2', (0, 0.31, 0.39)), 'jaw': ('head', (0, 0.285, 0.405)),
    'tail1': ('hips', (0, 0.18, -0.13)), 'tail2': ('tail1', (-0.02, 0.13, -0.22)), 'tail3': ('tail2', (-0.04, 0.075, -0.31)),
    'tail4': ('tail3', (-0.055, 0.04, -0.39)), 'tail5': ('tail4', (-0.06, 0.05, -0.45)),
    'uarmL': ('chest', (0.08, 0.21, 0.19)), 'farmL': ('uarmL', (0.10, 0.13, 0.20)), 'handL': ('farmL', (0.095, 0.05, 0.225)),
    'thighL': ('hips', (0.08, 0.19, -0.03)), 'shinL': ('thighL', (0.11, 0.12, 0.01)), 'ankleL': ('shinL', (0.11, 0.075, -0.09)),
    'wing1L': ('chest', (0.09, 0.32, 0.13)), 'wing2L': ('wing1L', (0.15, 0.36, -0.02)), 'wing3L': ('wing2L', (0.26, 0.46, 0.20)),
    'fingA1L': ('wing3L', (0.26, 0.46, 0.20)), 'fingA2L': ('fingA1L', (0.40, 0.28, 0.02)),
    'fingB1L': ('wing3L', (0.26, 0.46, 0.20)), 'fingB2L': ('fingB1L', (0.30, 0.26, -0.13)),
    'fingC1L': ('wing3L', (0.26, 0.46, 0.20)), 'fingC2L': ('fingC1L', (0.20, 0.30, -0.10)),
})
TULDRAN_TIPS = mirror_tips({'head': (0, 0.30, 0.50), 'jaw': (0, 0.255, 0.47), 'tail5': (-0.05, 0.13, -0.515), 'handL': (0.085, 0.01, 0.265), 'ankleL': (0.11, 0.02, -0.02),
                'wing3L': (0.28, 0.47, 0.23), 'fingA2L': (0.40, 0.04, -0.24), 'fingB2L': (0.27, 0.07, -0.36), 'fingC2L': (0.17, 0.20, -0.28)})
TULDRAN_MAIN = {'hips': 'spine', 'chest': 'neck1', 'wing3L': None, 'wing3R': None, 'head': None}
# the lower jaw: only these vertices may follow it (z beyond the hinge, below the line of the mouth)
TULDRAN_JAW = lambda P: (P[:, 2] > 0.405) & (P[:, 1] < 0.283 - (P[:, 2] - 0.405) * 0.05)

# Taiman lies flat and isn't symmetrical: his left wing (+x) is raised, his right lies on the sand.
TAIMAN = {
    'root': (None, (0, 0.0, -0.02)),
    'hips': ('root', (0, 0.07, -0.07)), 'spine': ('hips', (0, 0.075, 0.03)), 'chest': ('spine', (0, 0.08, 0.13)),
    'neck1': ('chest', (0, 0.078, 0.23)), 'neck2': ('neck1', (-0.005, 0.072, 0.31)), 'head': ('neck2', (-0.012, 0.066, 0.385)),
    'wing1L': ('chest', (0.06, 0.12, 0.15)), 'wing2L': ('wing1L', (0.19, 0.125, 0.14)), 'handL': ('wing2L', (0.23, 0.05, 0.24)),
    'fingAL': ('wing2L', (0.19, 0.125, 0.14)), 'fingBL': ('wing2L', (0.19, 0.125, 0.14)), 'fingCL': ('wing2L', (0.19, 0.125, 0.14)),
    'wing1R': ('chest', (-0.06, 0.11, 0.15)), 'wing2R': ('wing1R', (-0.18, 0.12, 0.15)), 'handR': ('wing2R', (-0.20, 0.05, 0.26)),
    'fingAR': ('wing2R', (-0.18, 0.12, 0.15)), 'fingBR': ('wing2R', (-0.18, 0.12, 0.15)), 'fingCR': ('wing2R', (-0.18, 0.12, 0.15)),
    'thighL': ('hips', (0.05, 0.06, -0.06)), 'shinL': ('thighL', (0.11, 0.04, 0.0)), 'footL': ('shinL', (0.12, 0.03, -0.06)),
    'thighR': ('hips', (-0.05, 0.06, -0.04)), 'shinR': ('thighR', (-0.08, 0.04, 0.02)), 'footR': ('shinR', (-0.10, 0.02, 0.05)),
}
TAIMAN_TIPS = {'head': (-0.02, 0.06, 0.50), 'handL': (0.25, 0.01, 0.335), 'handR': (-0.22, 0.02, 0.385),
               'fingAL': (0.37, 0.075, 0.0), 'fingBL': (0.316, 0.107, -0.163), 'fingCL': (0.241, 0.254, -0.10),
               'fingAR': (-0.37, 0.014, -0.017), 'fingBR': (-0.35, 0.042, -0.182), 'fingCR': (-0.29, 0.11, -0.12),
               'footL': (0.17, 0.01, -0.03), 'footR': (-0.12, 0.01, 0.08)}
TAIMAN_MAIN = {'hips': 'spine', 'chest': 'neck1', 'wing2L': 'handL', 'wing2R': 'handR'}
def taiman_with_tail(C, U):
    """the tail bones follow the regrown tail's centreline"""
    J = dict(TAIMAN); T = dict(TAIMAN_TIPS); prev = 'hips'
    import numpy as np
    for k, f in enumerate([0.0, 0.14, 0.28, 0.42, 0.56, 0.70, 0.84]):
        i = int(np.searchsorted(U, f)); n = f'tail{k + 1}'; J[n] = (prev, tuple(np.round(C[i], 4))); prev = n
    T[prev] = tuple(np.round(C[-1], 4))
    return J, T
