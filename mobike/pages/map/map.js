var position1= {
  left: 19,
    top: 550,
      width: 60,
        height: 60
}
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
    controls: [
      {
        id: 1,
        iconPath: '../../images/icon_location.png',
        position: position1,
        clickable: true
      },
      {
        id: 2,
        iconPath: '../../images/scantoopen.png',
        position: {
          left: 150,
          top: 550,
          width: 150,
          height: 55
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: '../../images/icon_redpacket.png',
        position: {
          left: 330,
          top: 450,
          width: 60,
          height: 60
        },
        clickable: true
      },
      {
        id: 4,
        iconPath: '../../images/icon_wallet.png',
        position: {
          left:330,
          top: 550,
          width:60,
          height: 60
        },
        clickable: true
      },
     
    ]
  },
  onLoad(){
    var that =this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
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