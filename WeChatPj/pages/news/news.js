// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemlist:[
      { title:"Content One" ,time: "2021-6-23", src: "/images/1.jpg"},
      { title: "Content Two", time: "2021-6-24", src: "/images/2.jpg"},
      { title: "Content Three", time: "2021-6-25", src: "/images/3.jpg"}
    ],
    reallist:[],
    page_set:1
  },
  /**
   *  自定义函数 
   */
  nextbtn : function (rec) {
    var last = this.data.page_set
    last = last + 1
    this.setData({ page_set:last })
    console.log(this.data.page_set)
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://edu.newsight.cn/wxList.php',
      data:{
        num :5,
        page:that.data.page_set
      },
      success(rec){
        console.log(rec.data)
        that.setData({reallist:rec.data})
      }
    })
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

  }
})