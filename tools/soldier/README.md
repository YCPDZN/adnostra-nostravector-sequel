# Ascendant soldier pipeline

Turns a raw, unrigged model export (here a 1.9M-triangle Tripo mesh) into the game-ready, rigged soldier in `assets/`.

```
pip install numpy scipy pillow xatlas
npm install meshoptimizer
python3 1_extract.py ad_nostra_soldier.glb   # welds positions, pulls out the textures
node 2_simplify.mjs                          # 16k-triangle body + 2.4k-triangle distance mesh
python3 3_bake.py                            # new UVs, bakes colour / normal / metal-roughness from the original
python3 4_emissive.py                        # glow mask for the energy colour
python3 5_rig.py                             # 19-bone skeleton, skin weights, writes soldier.glb + soldier.js
```

The skeleton's joint positions in `5_rig.py` are measured for this model (standing, arms down, facing +Z, about 1 unit tall). A different model needs those numbers re-measured.
