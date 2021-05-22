// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
      active:1,
    interval: 3000,
    duration: 500,
    swiperList:[
      {id:0,imgSrc:'../../images/index-swiper-1.JPG'},
      {id:1,imgSrc:'../../images/yimiao-index.JPG'}
    ],
  steps: [
      {text: '1', desc: '预约',},
      {text: '2', desc: '签到',},
      {text: '3', desc: '预检',},
      {text: '4', desc: '接种',},
      {text: '5', desc: '留观',}
  ],
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
    methods:{
        // stepClick(a,b){
        //     console.log(a,b);
        // },
    },
    // 步骤点击事件
    stepClick(ev){
      this.setData({
          active : ev.detail
      })
    },
  //  预约按钮点击事件
    gotoOrder(ev){
        wx.navigateTo({
            url: '../home/home'
        })
    },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        debugger
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
