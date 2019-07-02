function Banner() {
  //获取元素
  this.images = document.querySelector(".clearfix")
  // this.left = document.getElementById("left");
  // this.right = document.getElementById("right");
  this.img = document.querySelectorAll(".images li")
  this.index = 0;
  this.images.style.width = this.img.length * this.img[0].offsetWidth + "px";

  this.addEvent();

}
//添加事件
Banner.prototype.addEvent = function () {
  var that = this;
  left.onclick = function () {
     that.Index("l");
  }
  right.onclick = function () {
     that.Index("r");
  }
}

//获取索引
Banner.prototype.Index = function (index) {
  if(index == "r"){
     if (this.index == this.img.length - 1) {
        this.images.style.left = 0;
        this.index = 1
     } else {
        this.index++
     }
     }else{
        if (this.index == 0) {
           this.images.style.left = -(this.img.length-1) * this.img[0].offsetWidth + "px" ;
           this.index = this.img.length - 2
        } else {
           this.index--
        }
  }
  
  this.display();
}
//根据索引显示图片
Banner.prototype.display = function () {
  move(this.images, { left: -this.index * this.img[0].offsetWidth })
}

new Banner();