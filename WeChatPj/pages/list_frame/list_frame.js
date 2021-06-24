// pages/list_frame/list_frame.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title : "List Framework Test!",
    cnt : 2,
    array : ["red","green","yellow","blue","pink"],
    it : {
      name : "Huang Qiang",
      ages : 23,
      sex : "male",
      job : "IT"
    }
  },
 
 /**
  * 自定义函数
  */
  titletap : function (rec) {
    console.log("Title was touched!")
    console.log(rec.currentTarget.dataset.title)
    var name = rec.currentTarget.dataset.name
    var cnt = rec.currentTarget.dataset.cnt
    this.setData(
      {
        title: name,
        cnt:cnt
      }
    )
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync())
    wx.showLoading(
      {
        title : "页面加载中!",
        icon: "success"
      }
    )
    setTimeout(rec=> wx.hideLoading(),1500)
    setTimeout(rec => wx.showToast({ title: "页面加载成功!"}), 1500)
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