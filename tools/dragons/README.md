# Dragon pipeline (Tuldran and Taiman)

Turns the raw Tripo exports of the dragons (about 4.8M triangles each, unrigged) into the game-ready, rigged models in `assets/`.
Uses the Orion pipeline's `simplify.c` and `load.py` (in `tools/orion/`). Run everything from this folder.

```
pip install numpy scipy pillow matplotlib
gcc -O2 -o simplify ../orion/simplify.c -lm
mkdir tuldran taiman
```

1. **Simplify** each dragon (4.8M -> 80k triangles, about a minute each). The simplifier never moves vertices and keeps
   UV seams, so the original textures stay valid:
   ```
   python3 weld.py tuldran_raw.glb tuldran/in.bin ../orion
   (cd tuldran && ../simplify in.bin out.bin 80000)
   python3 write_dragon.py tuldran_raw.glb tuldran/out.bin tuldran TULDRAN_GLB_B64 tuldran   # static tuldran.glb + lo.npz
   ```
   and the same for Taiman (`TAIMAN_GLB_B64`).
2. **Taiman's tail.** The export's tail stops in a short point, with the end of it floating loose behind him.
   `python3 taiman_tail.py` drops the loose piece and regrows a full tail from the stub: a tapering tube that curls round
   to his right and lies on the sand, with dorsal spines, textured with colour, roughness and a normal map baked off the
   stub's own scales (so it is its own small material). Writes `taiman/fixed.npz` and the tail textures.
3. **Rig.** `python3 rig.py tuldran` and `python3 rig.py taiman`. The skeletons are in `skel.py` (joints measured on the
   models; Tuldran 43 bones with a jaw, Taiman 32 with seven tail bones following the regrown tail). Weights come from
   the distance over the surface to each bone, so a wing never takes the body it rests against, smoothed and cut to four
   bones a vertex. Writes `<name>/<name>_rigged.glb` and `<name>_rigged.js`: copy them to `assets/<name>.glb` and
   `assets/<name>.js`.

Every bone rests unrotated, so in the game a bone's rotation x/y/z is pitch/turn/roll in the dragon's own frame
(+x its left, +y up, +z forward). Tuldran is turned at step 3 to face +z like Taiman.

Checking: `pose.py` poses a rig in numpy (as three.js skins it) and renders it with `raster.py`, a small software
rasteriser; `ortho.py` draws textured orthographic views with a grid (and a skeleton on top) for measuring joints;
`preview.py` renders the static model from four sides.
