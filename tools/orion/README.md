# Orion Mascar pipeline

Turns the raw Tripo export of Orion (2M triangles, unrigged) into the game-ready, rigged model in `assets/`.
No Python mesh libraries are needed; the simplifier is a small C program.

```
pip install numpy scipy pillow matplotlib
gcc -O2 -o simplify simplify.c -lm
```

1. **Weld positions** of the raw GLB (`load.py` reads it) and write `in.bin`: `npos, nwedge, ntri` (int32),
   unique positions (float64), wedge→position map (int32), triangles as wedge ids (int32).
2. **`./simplify in.bin out.bin 110000`**: a quadric half-edge-collapse simplifier. Vertices never move, and a
   collapse is only allowed when every UV-seam copy of the vertex maps onto the same seam, so the original
   textures stay valid with no re-baking. 2M → 110k triangles takes about five minutes.
3. **`writeglb.py`** writes the simplified, static `orion_mascar.glb` with the original three textures;
   save its mesh as `lo.npz` (P, N, UV, F) for the next step.
4. **`python3 rig_orion.py lodin`**, then **`./simplify lodin.bin lod.bin 2600`**: the distant copy
   (positions only, colours sampled from the texture).
5. **`python3 rig_orion.py`**: the Ascendant soldier's 19-bone skeleton with joints measured for Orion, skin
   weights (arms found by surface distance, the cape weighted to the torso with its hem following the legs),
   and writes `orion.glb` + `orion.js`. Copy them to `assets/orion_mascar.glb` and `assets/orion.js`.

The joint positions in `rig_orion.py` are measured for this model (standing, arms down, facing +Z, about 1 unit tall).
A different model needs them re-measured.
