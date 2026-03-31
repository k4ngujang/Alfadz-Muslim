
from PIL import Image
import os

def optimize_aggressive(path, size):
    if os.path.exists(path):
        img = Image.open(path)
        img.thumbnail(size)
        img = img.convert('P', palette=Image.ADAPTIVE, colors=64) # Even fewer colors
        img.save(path, optimize=True)
        print(f'Aggressive Optimized {path}: {os.path.getsize(path)} bytes')

optimize_aggressive('assets/splash.png', (256, 256))
optimize_aggressive('resources/splash.png', (256, 256))
optimize_aggressive('assets/icon.png', (64, 64))
optimize_aggressive('resources/icon.png', (64, 64))
