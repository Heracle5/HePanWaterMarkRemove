//==UserScript==
// @name 河畔水印去除
// @namespace https://bbs.uestc.edu.cn/
// @version 0.1
// @description 去除河畔的ID水印
// @author HangjenChan
// @match https://bbs.uestc.edu.cn/*
// @match http://bbs-uestc-edu-cn-s.vpn.uestc.edu.cn:8118/*
// @grant none
//==/UserScript==
var title = document.title;
if (title.indexOf('清水河畔') != -1){
    var object2 = document.getElementById('1.23452384164.123412415');
    if (object2 != null){
        object2.parentNode.removeChild(object2);
    }
}