# Malia Mascar pipeline

Same steps as `tools/orion/` (use its `simplify.c` and `load.py`), with Malia's own scripts:

1. Weld the raw GLB's positions into `in.bin` and run `./simplify in.bin out.bin 110000` (4.9M → 110k triangles, about 90 s).
2. `python3 writeglb_malia.py` writes the static `malia_static.glb` with the original textures; save its mesh as `lo.npz`.
3. `python3 rig_malia.py lodin`, then `./simplify lodin.bin lod.bin 2600` for the distant copy.
4. `python3 rig_malia.py` rigs her with the Ascendant skeleton and writes `malia.glb` + `malia.js`
   (copy to `assets/malia_mascar.glb` and `assets/malia.js`).

Her joints are measured for this model: right arm hanging, left hand resting on her hip. In the game the
left-arm bones are held in that pose (`hold` in `makeSoldier`), so her hand stays on her hip while she walks.
