import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadimage } from '../../store/upload/uploadThunk';

const UploadImage = () => {
  const uploadMessage = useSelector((state) => state.upload.message);
  const uploadError = useSelector((state) => state.upload.error);
  const status = useSelector((state) => state.upload.status);

  const uploadRef = useRef(null);
  const [images, setImages] = useState([]);
  const [ImageCategory, setImageCategory] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'succeeded') {
      setImages([]);
    }
  }, [status]);

  useEffect(() => {
    if (uploadMessage) {
      alert(uploadMessage);
    } else if (uploadError) {
      alert(uploadError);
    }
  }, [uploadMessage, uploadError]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleFileSelect = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Please select images first.");
      return;
    }

    try {
      dispatch(uploadimage({ images, ImageCategory }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" flex   px-2 py-8 bg-gray-50">
      <div className="bg-white p-6 rounded-2xl h-60 shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Upload Images</h2>
        <div className="flex flex-col space-y-4">
          {/* Category Selector */}
          <select
            className="p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setImageCategory(e.target.value)}
          >
            <option value="" hidden>
              Select Category
            </option>
            <option value="esports">Esports</option>
            <option value="programs">Programs</option>
            <option value="college">College</option>
          </select>

          {/* Hidden File Input */}
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            ref={uploadRef}
          />

          {/* File Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleFileSelect}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Choose Images
            </button>
            <button
              onClick={handleUpload}
              disabled={status === 'pending'}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition disabled:opacity-50"
            >
              {status === 'pending' ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {/* Image Preview */}
          {images.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  className="w-full h-24 object-cover rounded shadow-sm border"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
