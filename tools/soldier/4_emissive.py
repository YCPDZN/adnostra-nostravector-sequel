# Mask of the armour's blue/cyan lights and visor: these glow in each Ascendant's energy colour.
import numpy as np
from PIL import Image
from scipy import ndimage
b = np.asarray(Image.open('bake_base.png')).astype(float) / 255
mx = b.max(2); mn = b.min(2); sat = (mx - mn) / np.maximum(mx, 1e-6); r, g, bb = b[..., 0], b[..., 1], b[..., 2]
cyan = (sat > 0.35) & (mx > 0.30) & (bb > r + 0.08) & (g > r)
m = ndimage.gaussian_filter(np.clip((mx - 0.25) / 0.5, 0, 1) * cyan, 0.7)
Image.fromarray((np.clip(m * 1.3, 0, 1) * 255).astype(np.uint8)).save('bake_emit.png')
