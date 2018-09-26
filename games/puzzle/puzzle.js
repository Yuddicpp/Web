var time = document.getElementsByClassName("time")[0];
var button = document.getElementsByClassName("button")[0];
var game = document.getElementsByClassName("game")[0];
var Step_count = document.getElementsByClassName("Step_count")[0];
var a = 1,
  b = 2,
  timer;
var row = 2,
  col = 2;
var conunt = 0,
  sum = 0;
document.onkeydown = function() {
  alert("请点击开始，才能开始游戏");
};
button.onclick = function() {
  if (b % 2 == 0) {
    timer = setInterval(function() {
      time.innerHTML = a;
      a += 1;
    }, 1000);
    button.innerHTML = "暂停";
    b += 1;
    document.onkeydown = function(e) {
      var keyNum = e.keyCode;
      switch (keyNum) {
        case 38:
          move("up");
          check();
          break;
        case 40:
          move("down");
          check();
          break;
        case 37:
          move("left");
          check();
          break;
        case 39:
          move("right");
          check();
          break;
        default:
          break;
      }
    };
  } else {
    document.onkeydown = function() {
      alert("请点击继续");
    };
    window.clearInterval(timer);
    button.innerHTML = "继续";
    b += 1;
  }
};
var all = new Array(3);
var order = Reverse_order();
for (var i = 0; i < row + 1; i++) {
  all[i] = new Array(3);
  for (var j = 0; j < col + 1; j++) {
    if (i == 2 && j == 2) {
      all[2][2] = "";
    } else {
      var temp = document.createElement("div");
      temp.className = String.fromCharCode(97 + i + j);
      temp.classList.add("p");
      temp.innerHTML = order[i * 3 + j];
      temp.style.left = j * 97 + "px";
      temp.style.top = i * 97 + "px";
      all[i][j] = temp;
      game.appendChild(temp);
    }
  }
}

function move(direction) {
  switch (direction) {
    case "down":
      if (row == 0) {
        break;
      } else {
        all[row - 1][col].style.top =
          parseInt(all[row - 1][col].style.top) + 97 + "px";
        all[row][col] = all[row - 1][col];
        row = row - 1;
        all[row][col] = "";
        break;
      }
    case "up":
      if (row == 2) {
        break;
      } else {
        all[row + 1][col].style.top =
          parseInt(all[row + 1][col].style.top) - 97 + "px";
        all[row][col] = all[row + 1][col];
        row = row + 1;
        all[row][col] = "";
        break;
      }
    case "left":
      if (col == 2) {
        break;
      } else {
        all[row][col + 1].style.left =
          parseInt(all[row][col + 1].style.left) - 97 + "px";
        all[row][col] = all[row][col + 1];
        col = col + 1;
        all[row][col] = "";
        break;
      }
    case "right":
      if (col == 0) {
        break;
      } else {
        all[row][col - 1].style.left =
          parseInt(all[row][col - 1].style.left) + 97 + "px";
        all[row][col] = all[row][col - 1];
        col = col - 1;
        all[row][col] = "";
        break;
      }
  }
  conunt++;
  Step_count.innerHTML = "步数：" + conunt;
}

function check() {
  var sum = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (i != 2 && j != 2) {
        if (parseInt(all[i][j].innerHTML) == i * 3 + j + 1) {
          sum++;
        }
      }
    }
  }
  if (sum == 8) {
    document.onkeydown = "";
    alert("成功还原");
    window.clearInterval(timer);
    button.innerHTML = "结束";
  }
}

function upset() {
  var number = Array(8);
  for (var k = 0; k < 8; k++) {
    number[k] = k + 1;
  }
  function randomsort(a, b) {
    return Math.random() > 0.5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
  }
  number.sort(randomsort);
  return number;
}

function Reverse_order() {
  var a;
  do {
    sum = 0;
    a = upset();
    for (var i = 0; i < a.length - 1; i++) {
      for (var j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
          sum++;
        }
      }
    }
  } while (sum % 2 != 0);
  return a;
}
