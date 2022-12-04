const app = getApp()

Component({

  options: {
    multipleSlots: true
  },

  properties: {
    placeholder: {
      type: String,
      value: "",
    },
    poster: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ""
    },
    subtitle: {
      type: String,
      value: ""
    },
    scrollTop: {
      type: Number,
      value: 0,
      observer: function (nVal, oVal) {
        if (nVal > app.globalData.headerBarH + 60) {
          this.setData({
            isTop: false
          })
        } else {
          this.setData({
            isTop: true
          })
        }
      }
    }
  },

  data: {
    isTop: true,
    isReady: false,
    headerBarH: app.globalData.headerBarH,
    statusBarH: app.globalData.statusBarH,
    titleBarH: app.globalData.titleBarH,
  },

  ready() {
    this.setData({
      isReady: true
    })
  },
})
