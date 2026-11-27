# Nico Brown pipeline

Same steps as `tools/orion/` (use its `simplify.c` and `load.py`), with Nico's own rig script. Run from this folder.

1. Weld the raw GLB's positions and simplify: `python3 ../dragons/weld.py nico_brown_raw.glb in.bin ../orion`, then
   `./simplify in.bin out.bin 110000` (4.8M → 110k triangles, about a minute).
2. `python3 ../dragons/write_dragon.py nico_brown_raw.glb out.bin nico NICO_GLB_B64 .` writes the static `nico.glb`
   (rename it `nico_static.glb`) and `lo.npz`.
3. `python3 rig_nico.py lodin`, then `./simplify lodin.bin lod.bin 2600` for the distant copy (it stops at about 5.7k).
4. `python3 rig_nico.py` rigs her with the Ascendant skeleton and writes `nico_rigged.glb` + `nico.js`
   (copy to `assets/nico.glb` and `assets/nico.js`).

Her joints are measured for this model (standing, arms hanging at her sides, facing +Z, 1 unit tall; she stands 1.70 m).
Three things are particular to her:
- **Hair.** Her long hair (down her back and over her shoulders) is kept on the head, neck and chest, never the arms.
- **Arms by colour.** Her hands hang against her trouser pockets and the export fused them, so arm vertices are picked by
  colour (bare skin, against the dark trousers) rather than by distance alone.
- **Fused contacts.** The few triangles that bridge a hand to her hips or one boot to the other are cut, or they would
  stretch into strands when she walks. In the rest pose the parts touch, so no gap shows.
