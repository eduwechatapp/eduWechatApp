Page({
  data:{
    menuList:[
      {
        name:'知识点',
        path:'../chinese_menu/chinese_knowledge/chinese_knowledge',
        icon:'../icon/knowledge.png'
      },
      {
        name:'视频',
        path:'../chinese_menu/chinese_video/chinese_video',
        icon:'../icon/video.png'
      },
      {
        name:'专题',
        path:'../special/special',
        icon:'../icon/zhuanti.png'
      },
      {
        name:'真题试卷',
        path:'../chinese_menu/chinese_exam/chinese_exam',
        icon:'../icon/exam.png'
      },
      {
        name:'上次记录',
        path:'../chinese_menu/chinese_lastnote/chinese_lastnote',
        icon:'../icon/lastnote.png'
      },
      {
        name:'需要留意',
        path:'../chinese_menu/chinese_attention/chinese_attention',
        icon:'../icon/attention.png'
      },
      {
        name:'收藏',
        path:'../chinese_menu/chinese_star/chinese_star',
        icon:'../icon/star.png'
      }
    ]
  },

  toPage(e){
    var that = this,
    id = e.currentTarget.id,
    menuList = that.data.menuList,
    subject = 'chinese'
    
    wx.navigateTo({ url: menuList[id].path+'?subject='+subject});
  }

})

