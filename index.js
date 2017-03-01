var danMuArr = [];
var dantimer = null;
var viewBox = document.getElementById('viewBox');
var viewHeight = viewBox.offsetHeight;
var itemsHeight = 40;
var itemsSpace = 10;
var rows = Math.floor(viewHeight / (itemsHeight + itemsSpace) );
var index = 0;
function start () {
    for (var i = 0;i < 20;i++) {
       danMuArr.push('可爱+' + i);
    }
    clearInterval(dantimer);
    dantimer = setInterval(function () {
        playDanMu();
    }, 2000)
}
var arr = [];
function playDanMu () {
    for(var i = 0;i < danMuArr.length;i++) {
        var itemsDom = document.createElement('div');
        itemsDom.className = 'items';
        //每个弹幕都有一定的时间间隔
        itemsDom.style.animationDelay = Math.random() + "s";
        itemsDom.innerHTML = danMuArr[i];
        itemsDom.style.top = (itemsHeight + itemsSpace) * (i % rows) + 'px';
        viewBox.appendChild(itemsDom);
        danMuArr.splice(i, 1);//
        arr.push(itemsDom);
    }
}
function addText () {
    for (var i = 0;i < 10;i++) {
        var text = document.getElementById('inp').value;
        var oDom = document.createElement('div');
        oDom.className = 'items';
        oDom.style.animationDelay = Math.random() + "s";
        oDom.style.top =  (itemsHeight + itemsSpace) * (i % rows) + 'px';
        oDom.innerHTML = text;
        viewBox.appendChild(oDom);
        arr.push(oDom);
    }
}
