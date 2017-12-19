//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    heart_img:"../../img/heart.png",
    beat_num_img:"../../img/dao.png",
    money_img:"../../img/money.png",
    lv1_img: "../../img/lv1.png",
    lv2_img: "../../img/lv2.png",
    lv4_img: "../../img/lv4.png",
    lv5_img: "../../img/lv5.png",

    lv2_img: "../../img/lv2.png",
    lv4_img: "../../img/lv4.png",
    lv5_img: "../../img/lv5.png",
    lv_text: "码神",
    heart_num:"3",
    knife_num:"33333331",
    money_num:"30k",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
