// pages/ensure/ensure.js
const app=getApp();
Page({
  //选择日期
  changebg:function(e){
    //console.log(e.target)
    this.setData({
      changeidx:e.target.dataset.changeidx
    })

  },
  //选择天数
  bindPickerChange(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    var value=parseInt(e.detail.value);
    this.setData({
      index: value,
      sum:(value+1)*this.data.serprice
    })
  },
  chooseDate:function(){
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //年  
    // var Y = date.getFullYear();
    // Y=parseInt(Y);
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    M= parseInt(M);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    D= parseInt(D);
    //console.log("当前时间：" + Y + M + D)
    var arr=[];
    for(var i=0;i<7;i++){
      var d=D+i;
      arr[i]=M+'月'+d+'日';
    }
    this.setData({
      arr:arr
    })
  },
  //提交信息
  subchoose:function(e){
    this.setData({
      subnum:1
    })
  },
  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
    })
  },
  confirmM: function (event) {
    var uname=this.data.name;
    var uphone=this.data.phoneNum;
    //console.log(uname,this.data.phoneNum)
    var reg1 = /^([\u4e00-\u9fa5]{2,4})$/;
    var reg2 = /^1[34578]\d{9}$/;
    if (!reg1.test(uname) || !reg2.test(uphone) || !uname || !uphone) {
      wx.showToast({
        title: '名字或手机号码格式有误',
        icon: "none"
      })
    } else {
      wx.showToast({
        title: '提交成功',
        icon: "none"
      });
      this.setData({
        hiddenmodalput: true,
      })
      setTimeout(function(){
        wx.hideToast();
        
        wx.navigateTo({
          url: '/pages/order/order',
        })
      },600);
      app.globalData.userpid = this.data.subpid;
      app.globalData.usersum=this.data.sum;
      app.globalData.userindex=this.data.index+1;
      app.globalData.userdate=this.data.arr[this.data.index];
    } 
  },

  iName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  iPhoneNum: function (e) {

    this.setData({
      phoneNum: e.detail.value
    })
    //console.log(this.data.phoneNum);
  },

  /**
   * 页面的初始数据
   */
  data: {
    array:[1,2,3],
    serprice:0,
    index:0,
    sum:0,
    arr:[],
    changeidx:0,
    hiddenmodalput: false,
    name: "",
    phoneNum:"",
    subnum:0,
    subpid:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var subprice=options.subprice;
    var subpid=options.pid;
    subprice=parseInt(subprice);
    subpid=parseInt(subpid);
    this.setData({
      serprice:subprice,
      sum:subprice,
      subpid:subpid
    }),
    this.chooseDate();
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