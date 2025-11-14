from PIL import Image
import os
chars = "@%#*+=-:. "

def ascii_art(path, size=(80,40)):
    img = Image.open(path)
    img = img.convert('L').resize(size)
    rows=[]
    pixels = list(img.getdata())
    for y in range(size[1]):
        row = ''.join(chars[pixels[y*size[0]+x]*len(chars)//256] for x in range(size[0]))
        rows.append(row)
    return '\n'.join(rows)

for name in sorted(os.listdir('images')):
    if not name.lower().endswith(('.png','.jpg','.jpeg')):
        continue
    path = os.path.join('images', name)
    print(name)
    try:
        print(ascii_art(path))
    except Exception as exc:
        print('Error:', exc)
    print('-'*60)
