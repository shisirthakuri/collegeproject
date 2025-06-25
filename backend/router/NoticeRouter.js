const express = require('express')
const {NoticeBannerUpload, NoticeAllUpload, NoticeBannerFetch, DeleteNoticeBannerFetch, getNoticeAll}= require('../controller/NoticeControlller')
const verifyToken = require('../middleware/AuthVerify')
const { pdfs } = require('../middleware/upload')
const NoticeRouter = express.Router()

NoticeRouter.post('/uploadBanner',verifyToken,NoticeBannerUpload)
NoticeRouter.get('/fetchBanner',NoticeBannerFetch)
NoticeRouter.get('/getAllNotice',getNoticeAll)
NoticeRouter.post('/deleteBanner',verifyToken,DeleteNoticeBannerFetch)
NoticeRouter.post('/uploadAll',verifyToken,pdfs.single('pdf'),NoticeAllUpload)
module.exports = NoticeRouter