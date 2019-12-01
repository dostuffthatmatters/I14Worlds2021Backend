from google.cloud import storage

"""
Uploads a file (blob) to the bucket.
Source: https://cloud.google.com/storage/docs/uploading-objects
"""
def upload_blob(bucket_name, source_file_name, destination_blob_name):
    # Instantiates a client
    storage_client = storage.Client()

    # Determines the bucket and the specific blob
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    # Uploads the file to the blob
    blob.upload_from_filename(source_file_name)
    print(f"File {source_file_name} uploaded to {destination_blob_name}.")


"""
Deletes a blob from the bucket.
Source: https://cloud.google.com/storage/docs/deleting-objects
"""
def delete_blob(bucket_name, blob_name):
    # Instantiates a client
    storage_client = storage.Client()

    # Determines the bucket and the specific blob
    bucket = storage_client.get_bucket(bucket_name)
    blob = bucket.blob(blob_name)

    # Removes the blob from the bucket
    blob.delete()
    print('Blob {} deleted.'.format(blob_name))
