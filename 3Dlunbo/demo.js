
var solid = document.getElementsByClassName('solid')[0];
var oUl = document.getElementsByClassName('oUl')[0];
var css = document.getElementsByTagName('style')[0];
var btn = document.querySelectorAll('ol li');
var n = 0,timer = 0;

creatDom();
function creatDom() {
    var len = 100, uHtml = '',pHtml='',tHTML = '';
    var allwidth = parseInt(window.getComputedStyle(solid,null).width);
    var width = allwidth / len;
    for (var i = 0; i < len; i++) {
        uHtml += '<li><div></div><div></div><div></div><div></div></li >';
        pHtml+= '.solid ul li:nth-child(' + (i + 1) + ') div{background-position-x: ' + (-i * width) + 'px;}';
        tHTML += '.solid ul li:nth-child(' + (i + 1) + '){transition: 0.8s ' + (0.3 * i / len) + 's}';
    }
    css.innerHTML += pHtml + tHTML + '.solid ul li, .solid ul li div{width:' + width + 'px;height:100%}';
    oUl.innerHTML = uHtml;
    bindEvent();
    play();
  }

function bindEvent() {
    for (var i = 0;i < 4 ;i++){
        btn[i].index = i;
        btn[i].onclick = function () {
            n = this.index;
            for( var i = 0;i < 4;i++){
                btn[i].className = '';
            }
            this.className = 'on';
            css.innerHTML += '.solid ul li{transform: rotateX(' + n*90+'deg);}';
          }
    }
  }
function play() {
    clearInterval(timer);
    timer = setInterval(function () {
        n++;
        n %= 4;
        for (var i = 0; i < 4; i++) {
            btn[i].className = '';
        }
        this.className = 'on';
        css.innerHTML += '.solid ul li{transform: rotateX(' + n * 90 + 'deg);}';
      },4000);
  }