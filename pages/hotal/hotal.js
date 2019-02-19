// pages/hotal/hotal.js
const app=getApp();
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
  // 页数加载
    loadMore:function(){
    //加载下一页数据
    //1:获取二个数值 pno pageSize
    var pno = this.data.pageIndex;
    if(pno==0){
      //2.2:显示加载动画
      wx.showToast({
        title: '已经最后一页',
        icon:'none'
      });
      //2.3:卸载加载动画
      setTimeout(function () {
        wx.hideToast();
      }, 1500);
    }
    //var ps = this.data.pageSize;
    //2:发送ajax请求
    /*wx.request({
      url: 'http://127.0.0.1:3000/imglist',
      data: { pno: pno, pageSize: ps },
      success: (result) => {
        //console.log(result.data.data);
        //2.1:保存返回数据 拼接
        var rows = this.data.list.concat(
          result.data.data
        );
        this.setData({
          list: rows,
          pageIndex: pno
        });
        //2.2:显示加载动画
        wx.showLoading({
          title: '正在努力加载数据....',
        });
        //2.3:卸载加载动画
        setTimeout(function () {
          wx.hideLoading();
        }, 1500);
        //3:在shoplist.wxml 显示列表数据
      }
    })*/
  },
  hothandle1:function(e){
    var i=e.target.dataset.idx;
    this.setData({
      activeidx:i
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
    city:"",
    list:[
      {id:1,title:"全部"},
      {id:2,title:"热门民宿"},
      {id:3,title:"热门酒店"}
    ],
    activeidx:0,
    hotallist:[],
    hothouse:[],
    hothotal:[],
    pageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var city= app.globalData.city;
    this.setData({
      city: city
    }),
    wx.request({
      //url: "http://192.168.31.11:3030/imglist",
      url: "http://127.0.0.1:3030/imglist",
      success: (res) => {
        this.setData({
          hotallist: res.data.hotallist,
          hothouse: res.data.hotallist.slice(0,2),
          hothotal:res.data.hotallist.slice(2)
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
    this.loadMore();
    //console.log(23)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})