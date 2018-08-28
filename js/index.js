var vm = new Vue({
    el: "#dynamicText",
    data: {
        list: [],
        text: ['歌曲好听吗？嘻嘻😁'
        ]
    },
    methods: {
        show: function () {
            let i = 0;
            let j = selectFrom(0, this.text.length - 1);
            let timer = setInterval(function () {
                let text1 = vm.text[j].split("");
                if (text1.length === 0) {
                    clearInterval(timer);
                } else {
                    vm.list.push(text1[i++]);
                    if (i == text1.length) {
                        clearInterval(timer);
                    }
                }
            }, 500)

        }
    },
    mounted: function () {
        //this.show();
    }
})
/*
sidebar toggel部分
*/
let navMenu = $('#nav_icon')[0];
let container = $('#container')[0];
let header = $('#nav_header')[0];
let sidebar = $('#sidebar')[0];
let sidebarMenu = $('.sidebar_menu')[0];
sidebarMenu.style.height = getStyle(container, 'height');
EventUtil.addHandlder(navMenu, 'click', function () {
    if (container.offsetLeft == 0) {
        let timer = setInterval(function () {
            container.style.left = container.offsetLeft - 10 + "px";
            header.style.left = header.offsetLeft - 10 + "px";
            sidebar.style.right = parseInt(sidebar.style.right) + 10 + "px";
            if (container.offsetLeft == -150) {
                clearInterval(timer);
            }
        }, 10)
    } else {
        let timer = setInterval(function () {
            container.style.left = (container.offsetLeft + 10) + "px";
            header.style.left = (header.offsetLeft + 10) + "px";
            sidebar.style.right = parseInt(sidebar.style.right) - 10 + "px";
            if (container.offsetLeft == 0) {
                clearInterval(timer);
            }
        }, 10)
    }
})

function sideBarResize() {
    if (container.offsetWidth >= 943) {
        header.style.left = 0;
        container.style.left = 0;
        sidebar.style.right = "-150" + "px";
    }
}
window.onresize = function () {
    sideBarResize();
}
/*
audio部分
*/
let myVideo = $("#myVideo")[0];
let app = $(".index_content img")[0];
let playBtn = $("#audio-playbtn")[0]
// let start = $("#start")[0];
//myVideo.play();

// let promise = new Promise(function (resolve, reject) {
//     EventUtil.addHandlder(playBtn,'click', function (e) {
//         if (myVideo.paused) {
//             myVideo.play();
//         } else {
//             myVideo.pause();
//         }
//         // console.log(e.clientY);
//         // console.log(e.pageY);
//         // console.log(e);
//         setTimeout(function () {
//             resolve();
//         }, 5000)

//     })
// })
// promise.then(function () {
//     vm.show();
// })
EventUtil.addHandlder(playBtn,'click', function (e) {
        if (myVideo.paused) {
            myVideo.play();
        } else {
            myVideo.pause();
        }
}
getPlayTime(){
     return myVideo.currentTime;
}
if(getPlayTime()>=30){
    vm.show();
}

/*
弹球部分
*/
let ballBox = $("#ball_box")[0];
let startBallBtn = $("#startBallBtn")[0];
let exitBallBtn = $("#exitBallBtn")[0];
let indexImg = $(".index_content img")[0];
let dynamicText = $("#dynamicText")[0];
let runtimes = 0; //保存点击发射小球的次数
let ballsDiv = []; //保存所有小球
/*clear ball*/
function clearBall() {
    let balls = ballBox.childNodes;
    if (balls.length >= 1) {
        for (let i = 0, len = balls.length; i < len; i++) {
            ballBox.removeChild(ballBox.lastChild);
        }
    }
}

/*创建块板*/
function createBlock(score) {
    let color = ['purple', 'red', 'yellow', 'blue', 'pink', 'green'];
    //let xPosition = selectFrom(1, parseInt(ballBox.clientWidth));
    let colorValue = color[selectFrom(0, 5)];
    let div = document.createElement("div");
    div.style.height = 40 + "px";
    div.style.width = 100 + "px";
    div.style.position = "absolute";
    div.style.bottom = 0;
    div.style.left = parseInt(ballBox.clientWidth / 2) - 50 + "px";
    div.style.background = colorValue;
    div.style.borderRadius = 5 + "px";
    div.style.color = "#fff";
    div.style.textAlign = "center";
    div.style.lineHeight = "40px";
    div.innerHTML = score;
    ballBox.appendChild(div);

}
/*创建小球*/
function createBall(num) {
    clearBall();
    let color = ['purple', 'red', 'yellow', 'blue', 'pink', 'green'];
    for (let i = 0; i < num; i++) {
        //let xPosition = selectFrom(1, parseInt(ballBox.clientWidth));
        let colorValue = color[selectFrom(0, 5)];
        let div = document.createElement("div");
        div.style.height = 30 + "px";
        div.style.width = 30 + "px";
        div.style.position = "absolute";
        div.style.top = 0;
        div.style.left = parseInt(ballBox.clientWidth / 2) - 15 + "px";
        div.style.background = colorValue;
        div.style.borderRadius = 50 + "%";
        div.style.color = "#fff";
        div.style.textAlign = "center";
        div.style.lineHeight = "30px";
        div.innerHTML = "Yao";
        ballsDiv.push(div);
        ballBox.appendChild(div);
    }
}
/*小球运动函数*/
function doMove(ball, speedX, speedY) {
    var timer1 = setInterval(function () {
        // ball.style.left = parseInt(ball.style.left) + getXDel(parseInt(ballBox.clientWidth / 2), 0, site, speed) + "px";
        /*保证小球在x方向运动不出边界*/
        // let ballLeft = parseInt(ball.style.left);
        // let ballTop = parseInt(ball.style.top);
        // let ballBoxClientWidth = parseInt(ballBox.clientWidth);
        // let ballBoxComputedHeight = parseInt(getStyle(ballBox, 'height'));
        if (parseInt(ball.style.left) + speedX <= parseInt(ballBox.clientWidth) - 30 && parseInt(ball.style.left) + speedX >= 0) {
            ball.style.left = parseInt(ball.style.left) + speedX + "px";
        } else if (parseInt(ball.style.left) + speedX > parseInt(ballBox.clientWidth) - 30) {
            ball.style.left = parseInt(ballBox.clientWidth) - 30 + "px";
        } else if (parseInt(ball.style.left) + speedX <= 0) {
            ball.style.left = 0 + "px";
        }
        /*y保证小球在y方向运动不出边界*/
        if (parseInt(ball.style.top) + speedY <= parseInt(getStyle(ballBox, 'height')) - 30 && parseInt(ball.style.top) + speedY >= 0) {
            ball.style.top = parseInt(ball.style.top) + speedY + "px";
        } else if (parseInt(ball.style.top) + speedY >= parseInt(getStyle(ballBox, 'height')) - 30) {
            ball.style.top = parseInt(getStyle(ballBox, 'height')) - 30 + "px";
        } else if (parseInt(ball.style.top) + speedY < 0) {
            ball.style.top = 0 + "px";
        }
        /*判断碰到周围取反speed反弹*/
        if (parseInt(ball.style.left) <= 0 || parseInt(ball.style.left) >= (parseInt(ballBox.clientWidth) - 30)) {
            speedX = -speedX;
        }
        if (parseInt(ball.style.top) <= 0 || parseInt(ball.style.top) >= parseInt(getStyle(ballBox, 'height')) - 30) {
            speedY = -speedY;
        }
    }, 30)
}
/*选择小球间隔发射*/
function selectBall(ball, speedX, speedY) {
    let i = 0;
    let timer = setInterval(function () {
        doMove(ball[i], speedX, speedY)
        i++;
        if (i == ball.length) {
            clearInterval(timer)
        }
    }, 1000)

}

/*getStartGamebox*/
function getStartGameBox() {
    ballBox.style.position = "fixed";
    ballBox.style.height = "100%";
    ballBox.style.background = "black";
    ballBox.style.top = 0;
    ballBox.style.left = 0;
    ballBox.style.bottom = 0;
    ballBox.style.right = 0;
    ballBox.style.zIndex = 5;
    dynamicText.style.display = "none";
    indexImg.style.display = "none";
    startBallBtn.style.display = "none";
}
/*launch ball*/
// function launchBall(speedY, event) {
//     let targetPos = EventUtil.getMouseClientPos(event);
//     let ytimes = (targetPos.y - 30) / speedY; //y轴到达点击点的增加的次数
//     let speedX = (targetPos.x - (ballBox.clientWidth / 2) - 15) / ytimes; //x轴每次增加的量
//     if (runtimes == 0) {
//         runtimes++;
//         selectBall(ballsDiv, speedX, speedY);
//     }
// }
function launchBall(speedX, speedY) {
    // let targetPos = EventUtil.getMouseClientPos(event);
    // let ytimes = (targetPos.y - 30) / speedY; //y轴到达点击点的增加的次数
    // let speedX = (targetPos.x - (ballBox.clientWidth / 2) - 15) / ytimes; //x轴每次增加的量
    if (runtimes == 0) {
        runtimes++;
        selectBall(ballsDiv, speedX, speedY);
    }
}
/*getExitGamebox*/
function getExitGameBox() {
    ballBox.style.position = "relative";
    dynamicText.style.display = "block"
    indexImg.style.display = "block"
    startBallBtn.style.display = "block";
}
/*exit ball game*/
function exitBall() {
    clearBall();
    getExitGameBox();
}

EventUtil.addHandlder(startBallBtn, 'click', function () {
    exitBallBtn.style.display = "block";
    getStartGameBox();
    createBall(50);
    createBlock('学前端吧');
})
EventUtil.addHandlder(ballBox, 'click', function (event) {
    // launchBall(100, event);
    // selectBall(ballsDiv,10,10);
    launchBall(100, 100);
})
EventUtil.addHandlder(exitBallBtn, 'click', function () {
    exitBallBtn.style.display = "none";
    exitBall();
    runtimes = 0;
})







// window.onload = function () {
//     var box = document.getElementById("pic-box");
//     var ul = box.getElementsByTagName("ul")[0];
//     var li = ul.getElementsByTagName("li");
//     var prev = document.getElementById("prev");
//     var next = document.getElementById("next");
//     var num = 0;
//     var timer = null;

//     var lastChild = ul.children[0].cloneNode(true); //为了实现无缝，将第一张图片复制放到最后面
//     ul.appendChild(lastChild);
//     ul.style.width = li[0].offsetWidth * li.length + 'px';

//     function autoPlay() {
//         timer = setInterval(function () {
//             num++;
//             move();
//         }, 3000)
//     }
//     autoPlay();

//     function move() { //当图片到最后一张的时候，将ul的left值设置为0重新开始
//         if (num == li.length) {
//             ul.style.left = 0;
//             num = 1;
//         } else if (num == -1) {
//             ul.style.left = -(li.length - 1) * li[0].offsetWidth + 'px';
//             num = li.length - 2;
//         }
//         doMove(ul, "left", -num * li[0].offsetWidth);
//     }

//     box.onmouseover = function () {
//         clearInterval(timer);
//     }
//     box.onmouseout = autoPlay;
//     prev.onclick = function () {
//         num--;
//         move();
//     }
//     next.onclick = function () {
//         num++;
//         move();
//     }
// }

// function doMove(obj, attr, target) { //运动函数
//     clearInterval(obj.timer);
//     obj.timer = setInterval(function () {
//         var speed = (target - parseInt(getStyle(obj, attr))) / 8; //设置速度,随着图片的滚动，速度越来越小
//         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//         if (parseInt(getStyle(obj, attr)) == target) {
//             clearInterval(obj.timer);
//         } else {
//             obj.style[attr] = parseInt(getStyle(obj, attr)) + speed + 'px';
//         }
//     }, 30);
// }


function Yao(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    for (let i = 0; i < keys.length; i++)
        Object.defineProperty(obj, keys[i], {
            get: function () {
                return obj[keys[i]]
            },
            set: function (newVal) {
                obj[keys[i]] = newVal;
            }
        })
    this.data = obj;
}
