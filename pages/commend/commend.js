// pages/commend/commend.js
Page({
  // 酒店跳转
  hothandle: function (e) {
    var hotalidx2 = e.currentTarget.dataset.hotalidx2;
    //console.log(hotalidx2);
    wx.showLoading({
      title: '请求中',
    });
    setTimeout(function () {
      wx.hideLoading();
      wx.navigateTo({
        url: '/pages/product/product?hotalidx2=' + hotalidx2,
      })
    }, 500)
  },
  /**
   * 页面的初始数据
   */
  data: {
    hotallist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    wx.setNavigationBarTitle({
      title: options.hotalname,
    })
    let hotalidx=options.hotalidx1;
    if (hotalidx==0 || hotalidx==2){
      wx.request({
        url: 'http://127.0.0.1:3030/imglist',
        success: (res) => {
          //console.log(res.data.hotallist[hotalidx])
          this.setData({
            hotallist: res.data.hotallist.slice(0, 2)
          })
        }
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1:3030/imglist',
        success: (res) => {
          //console.log(res.data.hotallist[hotalidx])
          this.setData({
            hotallist: res.data.hotallist.slice(2)
          })
        }
      })
    }

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