// pages/special/special.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this,
      subject = options.subject

    console.log(options)

    that.getMenuList(subject)

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
  // 获取目录
  getMenuList(subject) {
    var that = this,
      menuList = []

    switch (subject) {
      case 'chinese':
        menuList = [
          {
            title: '高频成语',
            path: '../chinese_menu/chinese_zhuanti/idiom/idiom'
          },
          {
            title: '易错词汇拼音',
            path: ''
          },
          {
            title: '文言文通假字、一词多义、古今异义',
            path: ''
          }
        ]
        break;
      case 'math':
        menuList = [
          {
            title: '理科',
            childMenuList: [
              {
                title: '全部章节',
                path: ''
              },
              {
                title: '集合与简易逻辑',
                path: ''
              }, {
                title: '不等式的解法',
                path: ''
              }
            ]
          },
          {
            title: '文科',
            childMenuList: [
              {
                title: '全部章节',
                path: ''
              },
              {
                title: '概率与统计',
                path: ''
              }
            ]
          }
        ]
        break;
      case 'physics':
        menuList = [
          {
            title: '必修、选修知识点',
            childMenuList: [
              {
                title: '必修一',
                path: '../chinese_menu/chinese_zhuanti/idiom/idiom'
              },
              {
                title: '必修二',
                path: ''
              },
              {
                title: '必修三',
                path: ''
              },
              {
                title: '必修四',
                path: ''
              }
            ]
          },
          {
            title: '实验知识点',
            childMenuList: [
              {
                title: '长度的测量',
                path: '../chinese_menu/chinese_zhuanti/idiom/idiom'
              },
              {
                title: '互成角度的两个力的合成',
                path: ''
              },
              {
                title: '练习使用打点计时器',
                path: ''
              }
            ]
          },

        ]
      default:
        break;
    }

    that.setData({
      menuList
    })
  },

  toPage(e) {
    var that = this,
      id = e.currentTarget.id,
      menuList = that.data.menuList

    if (menuList[id].childMenuList) {
      return;
    }

    wx.navigateTo({ url: menuList[id].path });
  }

})