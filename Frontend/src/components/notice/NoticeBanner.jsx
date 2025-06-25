import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NoticeBannerThunk } from "../../store/Notice/uploadBannerNotice/NoticeBannerThunk";
import { resetMessage } from "../../store/Notice/uploadBannerNotice/NoticeBannerSlice";
import { FetchNoticeBannerThunk } from "../../store/Notice/FetchNoticeBanner/FetchBannerNoticeThunk";
import { deleteNoticeBannerThunk } from "../../store/Notice/deleteBanner/DeleteBannerThunk";
import { resetNotice } from "../../store/Notice/deleteBanner/DeleteBannerSlice";

const NoticeBanner = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const status = useSelector((state) => state.noticeBanner?.status);
  const message = useSelector((state) => state.noticeBanner?.message);
  const error = useSelector((state) => state.noticeBanner?.error);

  const statusdelete = useSelector((state) => state.noticebannerdelete?.status);
  const messagedelete = useSelector((state) => state.noticebannerdelete?.message);
  const errordelete = useSelector((state) => state.noticebannerdelete?.error);

  const notice = useSelector((state) => state.noticebannerfetch?.notice);

  // Upload handler
  const uploadNoticeBanner = () => {
    if (content.trim()) {
      dispatch(NoticeBannerThunk(content));
    } else {
      alert("Please enter banner content.");
    }
  };

  // Delete handler
  const deleteNoticeBanner = () => {
    dispatch(deleteNoticeBannerThunk());
  };

  // Initial fetch on mount
  useEffect(() => {
    dispatch(FetchNoticeBannerThunk());
  }, [dispatch]);

  // After banner upload
  useEffect(() => {
    if (message) {
      setContent("");
      dispatch(resetMessage());
      dispatch(FetchNoticeBannerThunk());
    } else if (error) {
      alert(error);
    }
  }, [message, error, dispatch]);

  // After banner delete
  useEffect(() => {
    if (messagedelete) {
      dispatch(resetNotice());
        dispatch(FetchNoticeBannerThunk());
    } else if (errordelete) {
      alert(errordelete);
    }
  }, [messagedelete, errordelete, dispatch]);

  return (
    <div className="max-w-xl mx-auto mt-6">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter banner text..."
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={uploadNoticeBanner}
        disabled={status === "pending"}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "pending" ? "Uploading..." : "Upload"}
      </button>

      {/* Banner Display */}
      {notice ? (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Currently Active Banner:</h2>
          <p className="text-gray-800">{notice}</p>
          <button
            onClick={deleteNoticeBanner}
            disabled={statusdelete === "pending"}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 disabled:opacity-50"
          >
            {statusdelete === "pending" ? "Deleting..." : "Delete"}
          </button>
        </div>
      ) : (
        <p className="mt-6 text-gray-500">No banner uploaded yet.</p>
      )}
    </div>
  );
};

export default NoticeBanner;
