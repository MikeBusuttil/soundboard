import os

fx_foler = os.path.dirname(os.path.abspath(__file__)) + "/../src/fx"

index_js = ["module.exports = {"]

def prop(file):
    return file[:-4].replace("'", '')

def file_name(file):
    return file.replace("'", "\\'")

for file in os.listdir(fx_foler):
    if file.endswith(".mp3") or file.endswith(".ogg"):
        index_js.append(f"  '{prop(file)}': require('./{file_name(file)}'),")

index_js.append("}\n")

with open(fx_foler + "/index.js", "w") as f:
    f.write("\n".join(index_js))
