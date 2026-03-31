
import sys
content = open('js/pages/surah-detail.js', 'r', encoding='utf-8').read()

def count_quotes(q, name):
    count = content.count(q)
    print(f'Count of {name}: {count}')
    if count % 2 != 0:
        print(f'WARNING: Odd number of {name}')

count_quotes("'", "single quote")
count_quotes('"', "double quote")
count_quotes('`', "backtick")
