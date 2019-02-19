// pages/product/product.js
Page({
  //预约
  subhandle:function(e){
    var subprice=e.target.dataset.price;
    var pid=e.target.dataset.pid;
    wx.navigateTo({
      url: '/pages/ensure/ensure?subprice='+subprice+"&pid="+pid,
    })
  },
  //分享功能
  onShareAppMessage: function (res) {
    let gbid = res.target.dataset.info.order_id;
    return {
      title: '分享',
      path: '/pages/product/product',
      imageUrl: 'http://127.0.0.1:3000/wuzhen/hotal/0'+(index+1)+".png",  
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function (res) {
        // 分享失败
      },
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    pname:"",
    price:"",
    count:0,
    assess:"",
    orderdate:0,
    ordertime:0,
    del: "",
    child:[],
    pid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var pidx=options.hotalidx2;
    wx.request({
      url:'http://127.0.0.1:3030/product',
      success:(res)=>{
        //console.log(res.data)
        this.setData({
          pname:res.data[pidx].name,
          price: res.data[pidx].price,
          count: res.data[pidx].count,
          assess: res.data[pidx].assess,
          orderdate: res.data[pidx].orderdate,
          ordertime: res.data[pidx].ordertime,
          del: res.data[pidx].del,
          child: res.data[pidx].child,
          pid:res.data[pidx].id
        })
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