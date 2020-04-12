/**
 * 监听窗口改变事件动态调整rem
 */
function winSize(){
    var winWidth=document.body.clientWidth;
    // document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
    if(winWidth>1366){
        document.documentElement.style.fontSize =50+ 'px';
    }
}
//当前窗口调整时：
window.onresize = function(){
    console.log('正在改变窗口大小');
    winSize()
};
winSize();
