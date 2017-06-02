var markers,controls ;
var position1 ,position2,position3,position4,position5;
var W=0;var H=0;

// 位置信息
var latitude, longitude;
Page({
  data: {
    scanResult:"",
    longitude: 116.403963,
    latitude: 39.915119,
    // markers:markers,
    markers:[{
      // iconPath: "../../images/curLoc.png",
      id:0,
      longitude: 116.403963,
      latitude: 39.915119,
      width:50,
      height:50
    }],
    controls:controls,
  },
  onShareAppMessage: function () {
    return {
      title: '我的摩拜单车',
      path: '/pages/map/map',
      success: function (res) {
        console.log("转发成功")// 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onReady:function(e){
    var that =this;
    // 使用 wx.createMapContext 获取 map 上下文
    that.mapCtx = wx.createMapContext('myMap');
   
    // 获取屏幕宽高
    wx.getSystemInfo({
      success: function (res) {
        W = res.windowWidth;
        H = res.windowHeight;
        // 根据屏幕宽高动态设置control 位置
        // 定位当前位置
        position1 = {
         left:W*.05,
         top:H-85,
         width:60,
         height:60
        }
        // 扫码开锁
        position2 = {
          left: W*.5-75,
          top: H-85,
          width: 150,
          height: 55
        }
        // 我的红包
        position3 = {
          left: W*.95-60,
          top: H-160,
          width: 60,
          height: 60
        }
        // 我的钱包
        position4 = {
          left: W * .95 - 60,
          top: H-85,
          width: 60,
          height: 60
        }
        // 窗口中心
        position5 = {
          left: W * .5 - 25,
          top: H*.5 - 25,
          width: 50,
          height: 50
        }
        controls = [
            {
              id: 1,
              iconPath: '../../images/icon_location.png',
              position:position1,
              clickable: true
            },
            {
              id: 2,
              iconPath: '../../images/scantoopen.png',
              position: position2,
              clickable: true
            },
            {
              id: 3,
              iconPath: '../../images/icon_redpacket.png',
              position: position3,
              clickable: true
            },
            {
              id: 4,
              iconPath: '../../images/icon_wallet.png',
              position: position4,
              clickable: true
            },
            {
              id: 5,
              iconPath: '../../images/icon_center.png',
              position: position5,
              clickable: true
            }
        ]
        that.setData({
            controls:controls
        });
      }
    })
    // 获取用户当前位置信息
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        latitude = res.latitude;
        longitude = res.longitude;
        console.log("当前位置坐标："+latitude+"，"+longitude)
        that.setData({
          longitude:res.longitude,
          latitude:res.longitude
        })
      },
      fail:function(){
        console.log("获取位置失败")
      }
    })
  },
  // 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
  getCenterLocation: function () {
    var that = this;
    that.mapCtx.getCenterLocation({
      success: function (res) {
       //获取中心位置坐标后向后台请求改坐标100米内的单车坐标
      //  向controls数组push数据
      }
    })
  },
  // 将地图中心移动到当前定位点，需要配合map组件的show-location使用
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  getLocation:function(){
    wx.getLocation({
      type: 'gcj02',
      success: function (res) { 
        console.log(res.longitude)
        console.log(res.latitude)
      },
      fail: function (res) { 
        console.log("获取位置失败")
      },
      complete: function (res) { },
    })
  },
  scanCode: function(){
      var that = this;
      wx.scanCode({
        success: function(res){
          that.setData({
            scanResult:res.scanResult
          })
        },
        fail:function(res){

        }
      })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
    if(e.controlId==1){
      this.moveToLocation();
    }
    if(e.controlId==2){
     this.scanCode();
    }
  }
})