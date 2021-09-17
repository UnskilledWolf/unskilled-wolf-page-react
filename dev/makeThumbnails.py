#!/bin/python
import os
import sys
from PIL import Image

size = (512*2, 512*2)


def main():
    inFolder = sys.argv[1]
    outFolder = sys.argv[2]

    # Make sure that both folders exist
    if os.path.isdir(inFolder) and os.path.isdir(outFolder):
        files = os.listdir(inFolder)

        for file in files:
            inFile = os.path.join(inFolder, file)
            outFile = os.path.join(outFolder, file)
            outFile = os.path.splitext(outFile)[0] + ".jpg"
            if inFile != outFile and not os.path.isfile(outFile):
                print("Creating thumbnail for " + inFile)
                try:
                    im = Image.open(inFile)
                    im = im.convert('RGB')
                    im.thumbnail(size, Image.ANTIALIAS)
                    im.save(outFile, "JPEG")
                except IOError:
                    print("!\tCannot create thumbnail for " + inFile + "\t" + outFile)
    else:
        print("One or more folders do not exist")


if __name__ == "__main__":
    main()
