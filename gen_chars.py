#!/usr/bin/env python3
"""生成字体子集字符列表，扫描 .md/.vue/.ts/.css/.html 所有文件"""
import os, re

doc_root = '/root/docs'
all_chars = set()

for root, dirs, files in os.walk(doc_root):
    dirs[:] = [d for d in dirs if d not in ('dist', 'cache', 'node_modules', '.git', 'repos')]
    for f in files:
        if f.endswith(('.md', '.vue', '.ts', '.css', '.html')):
            fp = os.path.join(root, f)
            try:
                with open(fp, encoding='utf-8') as fh:
                    text = fh.read()
            except:
                continue
            for ch in text:
                cp = ord(ch)
                if (cp <= 0xFF or
                    0x2000 <= cp <= 0x206F or
                    0x3000 <= cp <= 0x303F or
                    0xFF00 <= cp <= 0xFFEF or
                    0x4E00 <= cp <= 0x9FFF):
                    all_chars.add(ch)

chars_str = ''.join(sorted(all_chars, key=lambda c: ord(c)))
with open('/tmp/chars.txt', 'w') as fh:
    fh.write(chars_str)
print(f'chars.txt: {len(chars_str)} chars (CJK: {len([c for c in all_chars if "\\u4e00" <= c <= "\\u9fff"])})')
