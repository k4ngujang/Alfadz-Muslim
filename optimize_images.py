
from PIL import Image
import os

files = [
    'assets/img/logo.png',
    'resources/icon.png',
    'resources/splash.png',
    'www/assets/img/logo.png',
    'assets/icon.png',
    'assets/splash.png'
]

for f in files:
    if os.path.exists(f):
        img = Image.open(f)
        # Resize if too large for an icon/logo
        if img.width > 512:
            img.thumbnail((512, 512))
        
        # Save as optimized PNG
        img.save(f, optimize=True)
        print(f'Optimized {f}: {os.path.getsize(f)} bytes')
    else:
        print(f'File not found: {f}')
