// pages/order/order.js
const app=getApp();
Page({
  cancel:function(e){
    var canidx=e.target.dataset.cancelidx;
    canidx=parseInt(canidx);
    this.data.list.splice(canidx,1)
    console.log(canidx);
    app.globalData.userpid=0;
    wx.showToast({
      title: '取消成功',
    })
    var that=this;
    //console.log(arrlist)
    this.setData({
      list:this.data.list
    })
    setTimeout(function(){
      wx.hideToast();
    /*wx.navigateTo({
        url: '/pages/order/order',
      })*/
    },500)
    
  },
  comfirm:function(){
    wx.showLoading({
      title: '请求中',
    })
    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title: '系统繁忙，稍后再试',
        icon: "none"
      })
    }, 1000)
    
  },
  hothandle1: function (e) {
    var i = e.target.dataset.idx;
    this.setData({
      activeidx: i
    });
    wx.showLoading({
      title: '请求中',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 500);
    //console.log(this.data.hothouse)
  },
  /**
   * 页面的初始数据
   */
  data: {
    orderlist:["全部","待付款","待发货","待收货","待评价"],
    activeidx: 0,
    /*pname: "",
    price: "",
    del:"",
    child: "",*/
    sum:0,
    userdate:"",
    userindex:"",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '请求中',
    })
    setTimeout(function(){
      wx.hideLoading()
    },500)
   //console.log(app.globalData.userpid);
    var pidx = app.globalData.userpid;
    var sum = app.globalData.usersum;
    var userdate =app.globalData.userdate;
    var userindex=app.globalData.userindex;
    this.setData({
      sum:sum,
      userdate:userdate,
      userindex:userindex
    })
    pidx=parseInt(pidx)-1;
    if(pidx>=0){
      //console.log(pidx)
      wx.request({
        url: 'http://127.0.0.1:3030/product',
        success: (res) => {
          //console.log(res.data[pidx]);
          app.globalData.userarr=app.globalData.userarr.concat(res.data[pidx]);
          //console.log(app.globalData.userarr)
          this.setData({
            /*pname: res.data[pidx].name,
            price: res.data[pidx].price,
            del: res.data[pidx].del,
            child: res.data[pidx].child[0],*/
            list: app.globalData.userarr
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