import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { closePopup } from "../Features/popupslice";
import { uploadImage } from "../Features/image";

const ImageUploadPopup = () => {
  const [preview, setPreview] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [selectedFolder, setSelectedFolder] = useState("");
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup.isOpen);
  const folders = useSelector((state) => state.folder.folders);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
      setUploadedFile(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleUpload = () => {
    if (uploadedFile) {
      const imagePayload = {
        id: Date.now(), // Generate a unique id
        url: URL.createObjectURL(uploadedFile), // Temporary URL for image preview
        metadata: {
          name: uploadedFile.name,
          size: uploadedFile.size,
          type: uploadedFile.type,
        },
      };

      dispatch(uploadImage(imagePayload)); // Dispatch the uploadImage action with the file's data
      alert(`Uploading ${uploadedFile.name}`);
      handleClose(); // Close the popup after upload
    }
  };

  // Function to close the popup
  const handleClose = () => {
    setPreview(null);
    setUploadedFile(null);
    dispatch(closePopup());
  };

  if (!isOpen) return null; // Hide popup if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &#x2715; {/* X symbol */}
        </button>
        {/* Dropzone Area */}
        <div
          {...getRootProps()}
          className={`w-full h-64 flex items-center justify-center rounded-lg border-2 ${
            isDragActive ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <p className="text-gray-500">
              Drag 'n' drop an image here, or click to select one
            </p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="folder-select" className="block mb-2 text-sm">
            Select Folder
          </label>
          <select
            id="folder-select"
            value={selectedFolder}
            onChange={(e) => setSelectedFolder(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">-- Select Folder --</option>
            {folders.map((folder) => (
              <option key={folder.id} value={folder.id}>
                {folder.name}
              </option>
            ))}
          </select>
        </div>
        {/* Upload Button */}
        {uploadedFile && (
          <div className="mt-4">
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Upload Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadPopup;
