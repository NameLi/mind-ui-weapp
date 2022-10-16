import { Version, UpdateDate, AppName, DocSite, Logo } from "../../config.js"

Page({
  data: {
    Version,
    UpdateDate,
    AppName,
    DocSite,
    Logo,
  },

  copyText(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success(res) {

      }
    })
  },
})