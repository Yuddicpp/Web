var a = [" 张颖"," 周晨鸣"," 黄芷璇"," 杨甦舒"];
var b = [" 张世煜"];
var c = [" 李嘉宸"," 黄芷璇"];
var d = [" 谢东延"," 杨斌"," 李盈"];
var e = [" 李嘉宸"," 杨斌"];
var f = [" 于小雅"," 杨霄"];
var g = [" 王嘉雪"];
var h = [" 李睿琪"];

function demo(p,q) {
    if(p.length==0){
        return 0;
    }else{
        var m = p.length;
        var n = parseInt(Math.random()*m);
        q.innerHTML+=p[n];
        var z=[];
        for(var i =0;i<m;i++)
        {
            if(i!=n){
                z.push(p[i]);
            }
        }
        demo(z,q);
    }
  }

var A = document.getElementsByClassName("a")[0];
var B = document.getElementsByClassName("b")[0];
var C = document.getElementsByClassName('c')[0];
var D = document.getElementsByClassName("d")[0];
var E = document.getElementsByClassName("e")[0];
var F = document.getElementsByClassName("f")[0];
var G = document.getElementsByClassName('g')[0];
var H = document.getElementsByClassName("h")[0];

demo(a,A);
demo(b,B);
demo(c,C);
demo(d,D);
demo(e,E);
demo(f,F);
demo(g,G);
demo(h,H);
