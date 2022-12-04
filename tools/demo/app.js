import getSystemInfo from "./components/utils/systemInfo";

App({
  globalData: {},
  onLaunch: function () {
    // 获取设备信息
    this.globalData = Object.assign(this.globalData, getSystemInfo())
  },
})