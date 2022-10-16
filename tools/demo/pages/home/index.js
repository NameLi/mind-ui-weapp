import { Version, UpdateDate, AppName, DocSite, Logo } from "../../config.js"

Page({
  data: {
    Version,
    UpdateDate,
    AppName,
    DocSite,
    Logo,
    scrollTop: 0
  },

  copyText(e) {
    const text = e.currentTarget.dataset.text
    wx.setClipboardData({
      data: text,
      success(res) {

      }
    })
  },

  onPageScroll({ scrollTop }) {
    this.setData({
      scrollTop
    })
  },
})