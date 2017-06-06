// pages/myLab/myLab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    tabList:[
      '分类',
      '智能排序',
      '筛选'
    ],
    curTabIdx:0,
    tabsTitles:[
      '全部',
      '美食',
      '快餐',
      '小吃'
    ],
    curTabsTitIdx:0,
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
  selectTab:function(e){
    console.log(e)
    var curTabIdx = e.target.dataset.id;
    this.setData({
      curTabIdx: curTabIdx
    })
  },
  selectTabsTitle:function(e){
    var curTabIdx = e.target.dataset.id;
    this.setData({
      curTabsTitIdx: curTabIdx
    })
  }
})