// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance:"3.50",
    freeEndDate:"2017/06/08",
    amountList:[
      100,50,20,10
    ],
    curSelected:'0',
  },
  selectAmount: function (e) {
    var dataId = e.target.dataset.id;
    console.log(dataId)
    this.setData({
      curSelected: dataId
    })
  },
  toPay: function () {
    console.log("充值")
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log("调起支付成功")
      },
      'fail': function (res) {
        console.log("调起支付失败")
      }
    })
  },
  toMyLab:function(){
    wx.navigateTo({
      url: '/pages/myLab/myLab'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
})