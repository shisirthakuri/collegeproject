import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./auth/loginslice";
import { uploader } from "./upload/uploadSlice";
import { NoticeBannerReducer } from "./Notice/uploadBannerNotice/NoticeBannerSlice";
import {fetchImagesReducer} from "./fetchimage/ImageFetchslice";
import { fetchNoticeBannerReducer } from "./Notice/FetchNoticeBanner/FetchNoticeBannerSlice";
import { deleteNoticeBannerReducer } from "./Notice/deleteBanner/DeleteBannerSlice";
import { pdfuploaders } from "./Notice/uploadAllNotice/NoticeAllUploadSlice";
import { getphotoAndQuoteReducer } from "./photoquote/PhotoQuoteGetSlice";
import { contactReducer } from "./contact/ContactSlice";
  // correct naming

const store = configureStore({
  reducer: {
    login: loginReducer,
    upload: uploader,
     noticeBanner: NoticeBannerReducer,
    imagefetch: fetchImagesReducer,
    noticebannerfetch:fetchNoticeBannerReducer,
    noticebannerdelete:deleteNoticeBannerReducer,
    pdfuploads:pdfuploaders,
    photoquote:getphotoAndQuoteReducer,
    contact:contactReducer
  },
});

export default store;
