"""
The purpose of this script is to take all of the image titles in the images folder and make them lowercase so that it is easy to reference them in the code.

Will also convert all of the images to jpg images so that they are easier to work with.
"""

import os
from PIL import Image


def lowercase():
    # Get the directory for the images folder
    root_dir = "/".join((os.path.realpath(__file__).split("/")[:-1]))
    directory = os.path.join(root_dir, "../client/public/images")
    os.chdir(directory)

    # Use unix commands to change the format of the images
    os.system(r"mogrify -format jpg *.png")

    # # Loop over all the images in the folder to rename them
    for filename in os.listdir(directory):

        # Don't worry about svg files
        if r'.svg' in filename:
            continue

        # Get the lowercase version of the name
        lower_name = filename.lower().strip(" ")

        new_extension_name = lower_name.replace(r".png", r".jpg").replace(
            r".jpeg", r".jpg")

        # Get the new filename
        os.rename(filename, new_extension_name)


if __name__ == "__main__":
    lowercase()
