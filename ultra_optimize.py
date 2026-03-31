
from PIL import Image
import os

def optimize(path, size, quality=85):
    if os.path.exists(path):
        img = Image.open(path)
        img.thumbnail(size)
        # Convert to P mode (indexed) for smaller size if it's an icon
        if path.endswith('.png'):
            img = img.convert('P', palette=Image.ADAPTIVE)
        img.save(path, optimize=True)
        print(f'Optimized {path}: {os.path.getsize(path)} bytes')

optimize('assets/icon.png', (128, 128))
optimize('assets/splash.png', (512, 512))
optimize('resources/icon.png', (128, 128))
optimize('resources/splash.png', (512, 512))
optimize('assets/img/logo.png', (256, 256))
