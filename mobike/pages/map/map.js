var controls ;
var position1 ,position2,position3,position4;
var W=0;var H=0;
Page({
  data: {
    windowWidth:0,
    windowHeight:0,
    scanResult:"",
   
    markers: [{
      iconPath: "../../images/curLoc.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls:controls,
  },
  onLoad(){
    var that =this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        W = res.windowWidth;
        H = res.windowHeight;
        // 根据屏幕宽高动态设置control 位置
        position1 = {
         left:W*.05,
         top:H-85,
         width:60,
         height:60
        }
        position2 = {
          left: W*.5-75,
          top: H-85,
          width: 150,
          height: 55
        }
        position3 = {
          left: W*.95-60,
          top: H-160,
          width: 60,
          height: 60
        }
        position4 = {
          left: W * .95 - 60,
          top: H-85,
          width: 60,
          height: 60
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

        ]
        that.setData({
            controls:controls
        });


      }
    })
    console.log(this.data.windowWidth + ":" + this.data.windowHeight)
  },
  
  getLoaction: function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(latitude+":"+longitude )
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
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
      this.getLoaction();
    }
    if(e.controlId==2){
     this.scanCode();
    }
  }
})