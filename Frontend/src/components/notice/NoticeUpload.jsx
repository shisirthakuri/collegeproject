import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadpdf } from '../../store/Notice/uploadAllNotice/NoticeAllUploadThunk';


const NoticeUpload = () => {
  const uploadMessage = useSelector((state) => state.pdfuploads.message);
  const uploadError = useSelector((state) => state.pdfuploads.error);
  const status = useSelector((state) => state.pdfuploads.status);

  const uploadRef = useRef(null);
  const [pdf, setPdf] = useState(null);
  const [topic, setTopic] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'succeeded') {
      setPdf(null);
      setTopic('');
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
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdf(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleFileSelect = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!pdf) {
      alert("Please select a PDF file.");
      return;
    }

    dispatch(uploadpdf({ pdf, topic }));
  };

  return (
    <div className="min-h-screen flex  px-4 py-8 bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full h-[50%] max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Upload PDF Notice</h2>

        <form onSubmit={handleUpload} className="flex flex-col space-y-4">
          {/* Topic Input */}
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Write notice topic"
            className="p-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Hidden File Input */}
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            ref={uploadRef}
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleFileSelect}
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition"
            >
              Choose PDF
            </button>

            <button
              type="submit"
              disabled={status === 'pending'}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400 transition disabled:opacity-50"
            >
              {status === 'pending' ? 'Uploading...' : 'Upload'}
            </button>
          </div>

          {/* Selected PDF File Name */}
          {pdf && (
            <p className="text-sm text-gray-600 italic">
              Selected file: {pdf.name}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NoticeUpload;
