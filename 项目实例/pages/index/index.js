Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 自定义函数
   */
  home: function (params) {
    wx.switchTab({
      url: '/pages/index/index',
      success(rec){
        console.log("跳转成功!")
      }
    })
  },

  // 联系客服，客服消息
  info: function (params) {
    console.log("服务信息!")
  },
  // 分支跳转动作
  learn: function (params) {
    console.log("跳转到学习分支!")
  },
  test: function (params) {
    console.log("跳转到测试分支!")
  },
  competi: function (params) {
    console.log("跳转到竞赛分支!")
  },
  work: function (params) {
    console.log("跳转到作业分支!")
  },
  society: function (params) {
    console.log("跳转到社区分支!")
  },
  more_history: function (params) {
    console.log("跳转到关于红色历史的页面!")
  },
  hst1: function name(params) {
    console.log("历史记忆--1!")
  },
  hst2: function name(params) {
    console.log("历史记忆--2!")
  },
  hst3: function name(params) {
    console.log("历史记忆--3!")
  },
  hst4: function name(params) {
    console.log("历史记忆--4!")
  },
  hst5: function name(params) {
    console.log("历史记忆--5!")
  },
  hst6: function name(params) {
    console.log("历史记忆--6!")
  },
  the_future: function name(params) {
    console.log("跳转到关于展望未来的页面!")
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
    
  }
})