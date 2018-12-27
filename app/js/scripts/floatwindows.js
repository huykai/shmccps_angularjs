'use strict';

const ioServerPath = '/inspector/socket.io'

function miaovAddEvent(oEle, sEventName, fnHandler)
{
    if(oEle.attachEvent)
    {
        oEle.attachEvent('on'+sEventName, fnHandler);
    }
    else
    {
        oEle.addEventListener(sEventName, fnHandler, false);
    }
}

const showMessage = function(info){
    let newinfo = ''
    if(window.localStorage){
      let originfo = window.localStorage.getItem('newInfoFromShmcc')
      if(originfo){
        newinfo = originfo + '$:$' + info 
      } else {
        newinfo = info
      }
      console.log(`showMessage: ${newinfo}`)
      window.localStorage.setItem('newInfoFromShmcc', newinfo)
    }
}
window.onload = function()
{
    console.log(`window.onload`)
    var randomID = "front_" + Math.floor(Math.random() * 1000000) + ':' + new Date()
    var socketio = io(window.location.origin, {
            path: ioServerPath,
            forceNode: true
        })
    socketio['randomID'] = randomID
    window['socketio'] = socketio
    socketio.on('connect', () => {
        console.log(`window socketio on connect: ${window.location.origin} ${ioServerPath}`)
        socketio.emit('register', {
          id: randomID
        })
        socketio.on('disconnect', ()=>{
          console.log('window socketio on disconnect')
          //setTimeout(()=>{
          //  socketio.connect()
          //},10000)
        })
    }) 
    socketio.on('message_runJobFinished', info=>{
        console.log(`window socketio receive message: ${JSON.stringify(info)}`)
        showMessage(JSON.stringify(info['message']))
    })
    
    var oDiv=document.getElementById('miaov_float_layer');
    var oBtnMin=document.getElementById('btn_min');
    var oBtnClose=document.getElementById('btn_close');
    var oDivContent=oDiv.getElementsByTagName('div')[0];
    
    var iMaxHeight=0;
    
    var isIE6=window.navigator.userAgent.match(/MSIE 6/ig) && !window.navigator.userAgent.match(/MSIE 7|8/ig);
    
    oDiv.style.display='block';
    iMaxHeight=oDivContent.offsetHeight;
    console.log('iMaxHeight = ', iMaxHeight)
    if(isIE6)
    {
        oDiv.style.position='absolute';
        repositionAbsolute();
        miaovAddEvent(window, 'scroll', repositionAbsolute);
        miaovAddEvent(window, 'resize', repositionAbsolute);
    }
    else
    {
        oDiv.style.position='fixed';
        repositionFixed();
        miaovAddEvent(window, 'resize', repositionFixed);
    }
    
    oBtnMin.timer=null;
    oBtnMin.isMax=true;
    oBtnMin.onclick=function ()
    {
        startMove
        (
            oDivContent, (this.isMax=!this.isMax)?iMaxHeight:8,
            function ()
            {
                //console.log('iMaxHeight = ', this.offsetHeight)
                oBtnMin.className=oBtnMin.className=='min'?'max':'min';
            }
        );
    };
    
    oBtnClose.onclick=function ()
    {
        oDiv.style.display='none';
    };

    console.log('begin handle io-shmccps');
    if (window.io_shmccps) {
        console.log('io have registered in window');
        const socket = window.io_shmccps;
        socket.emit('register', 'huykai_win10');
        socket.on('message',function(msg){
            console.log('message: ', msg);
        }); 
    }
    
};
function startMove(obj, iTarget, fnCallBackEnd)
{
    if(obj.timer)
    {
        clearInterval(obj.timer);
    }
    obj.timer=setInterval
    (
        function ()
        {
            doMove(obj, iTarget, fnCallBackEnd);
        },30
    );
}
function doMove(obj, iTarget, fnCallBackEnd)
{
    var iSpeed=(iTarget-obj.offsetHeight)/7;
    //console.log(`doMove obj.style.height:${obj.style.height} iSpeed: ${iSpeed} offsetHeight: ${obj.offsetHeight}`)
    let fin = true
    fin = (obj.offsetHeight==iTarget)
    if(fin)
    {
        clearInterval(obj.timer);
        obj.timer=null;
        if(fnCallBackEnd)
        {
            fnCallBackEnd();
        }
    }
    else
    {
        iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        obj.style.height=obj.offsetHeight+iSpeed+'px';
        
        ((window.navigator.userAgent.match(/MSIE 6/ig) && window.navigator.userAgent.match(/MSIE 6/ig).length==2)?repositionAbsolute:repositionFixed)()
    }
}
function repositionAbsolute()
{
    var oDiv=document.getElementById('miaov_float_layer');
    var left=document.body.scrollLeft||document.documentElement.scrollLeft;
    var top=document.body.scrollTop||document.documentElement.scrollTop;
    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    
    oDiv.style.left=left+width-oDiv.offsetWidth+'px';
    oDiv.style.top=top+height-oDiv.offsetHeight+'px';
}
function repositionFixed()
{
    var oDiv=document.getElementById('miaov_float_layer');
    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    
    oDiv.style.left=width-oDiv.offsetWidth+'px';
    oDiv.style.top=height-oDiv.offsetHeight+'px';
}