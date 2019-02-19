// pages/wxdels/wxdels.js

Page({
  checkForm:function(event){
    var uname=event.detail.value.uname;
    var uphone=event.detail.value.uphone;
    console.log(uname);
    var reg1 =/^([\u4e00-\u9fa5]{2,4})$/;
    var reg2 =/^1[34578]\d{9}$/;
    if(!reg1.test(uname)||!reg2.test(uphone)||!uname||!uphone){
      wx.showToast({
        title: '名字或手机号码格式有误',
        icon: "none"
      })
    }else{
      wx.showToast({
        title: '提交成功，等待审核',
        icon:"none"
      })
    }
  },
  checkForm2:function(){
    wx.showToast({
      title: '提交成功',
    })
  },
  handle1:function(e){
    var i=e.target.dataset.idx;
    var title=e.target.dataset.title;
    //console.log(e);
    /*if (i == 1) {
      var that=this;
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          var speed = res.speed;
          var accuracy = res.accuracy;
          that.setData({
            latitude: latitude,
            longitude: longitude,
            speed: speed,
            accuracy: accuracy
          });
        }
      })
      
    };*/
    this.setData({
      activeIndex:i,
    });
    

    wx.setNavigationBarTitle({
      title: title,
    })
    wx.showLoading({
      title: '请求中',
    });
    setTimeout(function () {
      wx.hideLoading()
    }, 500);
    
  },
  /**
   * 页面的初始数据
   */
  data: {
    delslist:[],
    navitem:[
      {id:1,title:"关于乌镇"},
      {id:1,title:"地理位置"},
      {id:1,title:"加入我们"},
      {id:4,title:"建议反馈"},
    ],
    scrollImg:[],
    activeIndex:0,
    /*longitude:0,
    latitude:0,
    speed: 0,
    accuracy:0*/
    markers: [{
      id: 0,
      latitude: 30.64,
      longitude: 120.54
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.aidx==2){
      this.setData({
        activeIndex: options.aidx,
      })
    }
    wx.request({
      //url:"http://192.168.31.11:3030/delslist",
      url:"http://127.0.0.1:3030/delslist",
      success:(res)=>{
        this.setData({
          delslist: res.data.delslist,
          scrollImg: res.data.scrollImg
        })
      }
    });
   

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