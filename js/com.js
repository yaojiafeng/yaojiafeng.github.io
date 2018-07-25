function $(s) {
    return document.querySelectorAll(s);
}
var EventUtil = {
    addHandlder: function (ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, handler);
        } else {
            ele["on" + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (evnet) {
        return event.target || event.srcElement;
    },
    removeHandler: function (ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false)
        } else if (ele.detachEvent) {
            ele.detachEvent("on" + type, handler)
        } else {
            ele["on" + type] = null;
        }
    },
    getMouseClientPos: function (event) {
        let e = event || window.event;
        return {
            'x': e.clientX,
            'y': e.clientY
        }
    }
}

function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
            for (var i = 0; i < versions.length; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {

                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}
/*随机数*/
function selectFrom(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
//获取页面元素的样式 ie: currentStyle;ff chrome safari :getComputedStyle
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

