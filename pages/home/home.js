// pages/home/home.js
const app = getApp();
var amap = require('../../utils/amap-wx.js');
const mapkey = '8b6ea7941bc0d70e82dae2ff5bdfb51f';
Page({
  //导航栏跳转
  navhandle: function(e){
   var hotalname = e.target.dataset.hname;
    //console.log(e.target.dataset.hname);
    wx.navigateTo({
      url: '/pages/commend/commend?hotalname='+hotalname,
    })
  },
  //定位
  getLocation:function (callback) {
    //var that=this;
    var Amap = new amap.AMapWX({ key: mapkey }); // 获取用户地理信息 
    Amap.getRegeo({
      success:(res)=>{
        //console.log(res);
        if (callback) { callback(res) }
        var localnum=0;
        if(localnum==0){
          this.setData({
            name:res[0].name
          })
          //console.log(res[0])
          app.globalData.city=res[0].regeocodeData.addressComponent.city;
          //console.log(app.globalData.city)
        }
      },
      fail(err) {
        showToast(err.errMsg, 'none')
        if (err.errMsg == 'getLocation:fail auth deny') {
          showToast('拒绝授权将无法定位', 'none');
        }
        //console.log(err)
      }
    })
  },
  locationMap:function(){
    /*wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success:(res)=> {
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })*/
    wx.chooseLocation({
      success:(res)=>{ 
        this.setData({
          localnum:1,
          name:res.name
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    sliderlist:[],
    navlist:[],
    hotallist:[],
    localnum:0,
    name:'广州市'
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      //url:"http://192.168.31.11:3030/imglist",
      url:"http://127.0.0.1:3030/imglist",
      success:(res)=>{
        this.setData({
          sliderlist:res.data.sliderlist,
          navlist:res.data.navlist,
          hotallist:res.data.hotallist
        }) 
      }
    }) ,
    this.getLocation();
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