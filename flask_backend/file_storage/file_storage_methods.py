from PIL import Image as PIL_Image
from resizeimage import resizeimage

from flask_backend.file_storage import raw_gcloud_methods

STORAGE_API_ENDPOINT = "https://storage.googleapis.com/"
BUCKET_NAME = "i14-worlds-2021-gallery"
BLOB_PATH = "images/"


def create_cropped_versions(relative_path, filename):
    relative_filepath = relative_path + filename
    with PIL_Image.open(relative_filepath) as img:
        width, height = img.size

    small_extension = "-small"
    medium_extension = "-medium"
    large_extension = "-large"

    small_size = [450, 300]
    medium_size = [900, 600]
    large_size = [1500, 1000]

    if width >= small_size[0] and small_size[1] >= 300:

        name = filename.split(".")[0]
        extension = filename.split(".")[-1]

        with open(relative_filepath, "rb") as f:
            img = PIL_Image.open(f)

            if width >= large_size[0] and height >= large_size[1]:
                small_img = resizeimage.resize_cover(img, small_size)
                medium_img = resizeimage.resize_cover(img, medium_size)
                large_img = resizeimage.resize_cover(img, large_size)
            elif width >= medium_size[0] and height >= medium_size[1]:
                small_img = resizeimage.resize_cover(img, small_size)
                medium_img = resizeimage.resize_cover(img, medium_size)
                large_img = resizeimage.resize_cover(img, medium_size)
            else:
                small_img = resizeimage.resize_cover(img, small_size)
                medium_img = resizeimage.resize_cover(img, small_size)
                large_img = resizeimage.resize_cover(img, small_size)

            small_filename = name + small_extension + "." + extension
            small_img.save(relative_path + small_filename)

            medium_filename = name + medium_extension + "." + extension
            medium_img.save(relative_path + medium_filename)

            large_filename = name + large_extension + "." + extension
            large_img.save(relative_path + large_filename)

            files_dict = {
                "small": small_filename,
                "medium": medium_filename,
                "large": large_filename,
                "full": filename
            }

            return {"Status": "Ok",
                    "files": files_dict}

    return {"Status": "Failed"}


def upload_files(relative_path, files):

    absolute_gcloud_paths = {}

    for key in files:
        source_file_name = relative_path + files[key]
        destination_blob_name = BLOB_PATH + files[key]
        raw_gcloud_methods.upload_blob(BUCKET_NAME, source_file_name, destination_blob_name)
        absolute_gcloud_paths[key] = STORAGE_API_ENDPOINT + BUCKET_NAME + "/" + BLOB_PATH + files[key]

    return {"Status": "Ok",
            "absolute_gcloud_paths": absolute_gcloud_paths}
