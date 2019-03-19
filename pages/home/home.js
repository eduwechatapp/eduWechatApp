// pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */


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
    this.onLoad()
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
    this.onLoad()
    wx.stopPullDownRefresh();
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
  // 点击跳转搜索页

  toEnglish:function(){
    wx.navigateTo({
      url: '../english/english',
    })
  },
  tochinese: function () {
    wx.navigateTo({
      url: '../chinese/chinese',
    })
  },
  tomath: function () {
    wx.navigateTo({
      url: '../math/math',
    })
  },
  togeography: function () {
    wx.navigateTo({
      url: '../geography/geography',
    })
  },
  tophysics: function () {
    wx.navigateTo({
      url: '../physics/physics',
    })
  },
  totime: function () {
    wx.navigateTo({
      url: '../time/time',
    })
  },
  tozhengzhi: function () {
    wx.navigateTo({
      url: '../zhengzhi/zhengzhi',
    })
  },
  tochemistry: function () {
    wx.navigateTo({
      url: '../chemistry/chemistry',
    })
  },
  tobiology: function () {
    wx.navigateTo({
      url: '../biology/biology',
    })
  }
  
})