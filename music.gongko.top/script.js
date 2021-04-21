
function $(id){
            return document.getElementById(id);
        }
console.log('看到这里的应该是想拿代码去改一下的吧（毕竟写的不是很好），最近时间不多，想到什么就写了，所以写的有点乱，也没时间去优化一下。看不懂的朋友也不要怪我哈。');
// 开始选择菜单
var determine = 'la';
var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
//移动端开始页面的选项
if ( winHeight > winWidth ){
    $('startMenu').style.display = 'none';
    $('CPStartMenu').style.display = 'block';
    //教学的那个按键
    $('CPTeaching').onclick = function(){
        $('CPMusic').style.display = 'none';
        $('CPTeachingText').style.display = 'block';
        $('CPTeachingText').getElementsByClassName('return')[0].style.backgroundColor = null;
        $('CPTeaching').style.backgroundColor = 'rgb(39, 129, 123)';
        $('anonie').play();
    }

    let classReturn  = $('CPTeachingText').getElementsByClassName('return');
    classReturn[0].onclick = function(){
        classReturn[0].style.backgroundColor = '#00000022';
        $('CPTeaching').style.backgroundColor = '#39C5BB';
        $('CPTeachingText').style.display = 'none';
        $('CPMusic').style.display = 'block';
    }
    var getDetermineMusic = $('CPMusic').getElementsByClassName('SHBodyText');
    //手机选择音频反馈
    getDetermineMusic[1].onclick = function(){
        let i = 1;
        getDetermineMusic[i++].style.backgroundColor = '#00000022';
        getDetermineMusic[i++].style.backgroundColor = null;
        getDetermineMusic[i++].style.backgroundColor = null;
    }
    getDetermineMusic[2].onclick = function(){
        let i = 1;
        getDetermineMusic[i++].style.backgroundColor = null;
        getDetermineMusic[i++].style.backgroundColor = '#00000022';
        getDetermineMusic[i++].style.backgroundColor = null;
    }
    getDetermineMusic[3].onclick = function(){
        let i = 1;
        getDetermineMusic[i++].style.backgroundColor = null;
        getDetermineMusic[i++].style.backgroundColor = null;
        getDetermineMusic[i++].style.backgroundColor = '#00000022';
    }
    $('CPDetermine').onclick = function(determine){
        $('CPDetermine').style.backgroundColor = 'rgb(39, 129, 123)';
        if ( getDetermineMusic[1].style.backgroundColor ){
            window.determine = 'la';
        }else if (getDetermineMusic[2].style.backgroundColor ){
            window.determine = 'miao';
        }else if ( getDetermineMusic[3].style.backgroundColor ){
            window.determine = 'piano';
        }
            $('CPStartMenu').style.display = 'none';
            $('cellphone').style.display = 'block';
    }
}else{
    $('CPStartMenu').style.display = 'none';
    $('startMenu').style.display = 'block';
}
//pc端开始页面
var middleTop = winHeight / 2 - 132 + 'px';
var middleLeft = winWidth / 2 - 225 + 'px';
$('startMenu').style.top = middleTop;
$('startMenu').style.left = middleLeft;
$('startMenu').style.transform = 'rotate(360deg)';
$('LPiano').onclick = function(){
    if ( $('LPiano').style.backgroundColor ){
        $('LPiano').style.backgroundColor = null;
    }else{
        $('LPiano').style.backgroundColor = '#00000022';
    }
}
$('RLA').onclick = function(){
    if ( $('RLA').style.backgroundColor ){
        $('RLA').style.backgroundColor = null;
    }else{
        $('RLA').style.backgroundColor = '#00000022';
        $('RMIAO').style.backgroundColor = null;
        $('RPiano').style.backgroundColor = null;
    }
}
$('RMIAO').onclick = function(){
    if ( $('RMIAO').style.backgroundColor ){
        $('RMIAO').style.backgroundColor = null;
    }else{
        $('RLA').style.backgroundColor = null;
        $('RPiano').style.backgroundColor = null;
        $('RMIAO').style.backgroundColor = '#00000022';
    }
}
$('RPiano').onclick = function(){
    if ( $('RPiano').style.backgroundColor ){
        $('RPiano').style.backgroundColor = null;
    }else{
        $('RLA').style.backgroundColor = null;
        $('RMIAO').style.backgroundColor = null;
        $('RPiano').style.backgroundColor = '#00000022';
    }
}
$('determine').onclick = function(determine){
    $('startMenu').style.width = '0px';
    $('startMenu').style.height = '0px';
    $('startMenu').style.top = '0px';
    $('startMenu').style.left = '0px';
    $('determine').style.backgroundColor = 'rgb(39, 129, 123)';
    if ( $('RLA').style.backgroundColor ){
        window.determine = 'la';
    }else if ( $('RMIAO').style.backgroundColor ){
        window.determine = 'miao';
    }else if ( $('RPiano').style.backgroundColor ){
        window.determine = 'piano';
    }
    var timer = setInterval(function(){
        $('startMenu').style.display = 'none';
        $('cellphone').style.display = 'block';
        clearInterval(timer);
    }, 800);
}
    //选择教学功能
$('teaching').onclick = function(){
    $('teaching').style.backgroundColor = 'rgb(39, 129, 123)';
    $('encourage').style.backgroundColor = null;
    $('anonie').play();
    $('teachingText').style.display = 'block';
    $('teachingHead').style.display = 'block';
    $('encourageTest').style.display = 'none';
    $('encourageHead').style.display = 'none';
    $('SMHead').style.display = 'none';
    $('SHBodyL').style.display = 'none';
    $('SHBodyR').style.display = 'none';
    $('onijjia').play();
}
document.getElementsByClassName('return')[0].onclick = function (){
    $('teaching').style.backgroundColor = '#39C5BB';
    $('encourage').style.backgroundColor = '#39C5BB';
    $('encourage').style.backgroundColor = null;
    $('SMHead').style.display = 'block';
    $('SHBodyL').style.display = 'block';
    $('SHBodyR').style.display = 'block';
    $('teachingText').style.display = 'none';
    $('teachingHead').style.display = 'none';
    $('encourageTest').style.display = 'none';
    $('encourageHead').style.display = 'none';
}
document.getElementsByClassName('return')[1].onclick = function (){
    $('teaching').style.backgroundColor = '#39C5BB';
    $('encourage').style.backgroundColor = '#39C5BB';
    $('encourage').style.backgroundColor = null;
    $('SMHead').style.display = 'block';
    $('SHBodyL').style.display = 'block';
    $('SHBodyR').style.display = 'block';
    $('teachingText').style.display = 'none';
    $('teachingHead').style.display = 'none';
    $('encourageTest').style.display = 'none';
    $('encourageHead').style.display = 'none';
    $('huyuigaides').play();
}
$('encourage').onclick = function (){
    $('encourage').style.backgroundColor = 'rgb(39, 129, 123)';
    $('teaching').style.backgroundColor = '#39C5BB';
    $('encourageTest').style.display = 'block';
    $('encourageHead').style.display = 'block';
    $('SMHead').style.display = 'none';
    $('SHBodyL').style.display = 'none';
    $('SHBodyR').style.display = 'none';
    $('teachingText').style.display = 'none';
    $('teachingHead').style.display = 'none';
    $('onijia').play();
}


// 打击垫功能
var getClass = document.getElementsByClassName('CPLaunchPad');
var CPLaunchPadTop = 0;
var CPLaunchPadLeft = 0;
// 给点击div添加打击垫事件
if ( winHeight > winWidth){
    for ( let i = 0 ; i < getClass.length; ){
        getClass[i].style.top = `${CPLaunchPadTop}%`;
        getClass[i].style.left = `${CPLaunchPadLeft}%`;
        if ( ++i % 3 ){
            CPLaunchPadLeft += 33.3333;
        }else{
            CPLaunchPadTop += 16.6666;
            CPLaunchPadLeft = 0;
        }
    }
}else{
    for ( let i = 0 ; i < getClass.length; ){
        getClass[i].style.width = '16.6666%';
        getClass[i].style.height = '33.3333%';
        getClass[i].style.top = `${CPLaunchPadTop}%`;
        getClass[i].style.left = `${CPLaunchPadLeft}%`;
        if ( ++i % 6 ){
            CPLaunchPadLeft += 16.6666;
        }else{
            CPLaunchPadTop += 33.3333;
            CPLaunchPadLeft = 0;
        }
    }
}

for ( let j = 0; j < getClass.length; j++){
    getClass[j].onclick = function() {
        getClass[j].style.backgroundColor = '#FFFFFF33';
        var timer = setInterval(function(){
            getClass[j].style.backgroundColor = null;
            clearInterval(timer);
        }, 300);
    }
}
//点击右键的功能
document.oncontextmenu = function(){
    return false;
}
$('cellphone').onmousedown = function(ev){
    var e = ev || window.event;
    if ( e.button ){
        $('menu').style.display = 'block';
        $('menu').style.top = e.clientY + 'px';
        $('menu').style.left = e.clientX + 'px';
        $('xilanai').play();
    }else{
        $('menu').style.display = 'none';
    }
}
$('menu').onclick = function(){
    if ( winWidth > winHeight ){
        let middleTop = ( winHeight - 264 ) / 2 + 'px';
        let middleLeft =  ( winWidth - 450 ) / 2 + 'px';
        $('startMenu').style.display = 'block';
        $('determine').style.backgroundColor = '#39C5BB';
        $('startMenu').style.width = '450px';
        $('startMenu').style.height = '264px';
        $('startMenu').style.top = middleTop;
        $('startMenu').style.left = middleLeft;
    }else{
        $('CPStartMenu').style.display = 'block';
        $('CPDetermine').style.backgroundColor = '#39C5BB';
    }
    $('menu').style.display = 'none';
    $('cellphone').style.display = 'none';
}
window.onload = function(){
    //随机色
    var cartoonColor = [ "#39C5BB", "#00FFCC","#99FFFF", "#EE82EE", "#9999FF", "#FF3366", "#FFFF00", "#FF0000", "#EE0000", "#ffff00", "#006666", "#0080ff", "#EE82EE", "#FF4004", "#3399FF", "#FDD000", "#FF0108", "#FF6600"];
    var randomBodyColor = ["#FFB6C1", "#FFF0F5", "#B0C4DE", "#708090", "#66CCFF"];
    //背景累计点击次数的变量
    var ByColorI = 0; 
    // 背景过度
    function BodyColor( randomByColor ){
        var num = 0;
        var randomNum = parseInt( Math.random() * 6);
        if ( num++ == randomNum ){
            $('LTop').style.display = 'block';
            $('LTop').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('LTop').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('RTop').style.display = 'block';
            $('RTop').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('RTop').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('LBottom').style.display = 'block';
            $('LBottom').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('LBottom').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('RBottom').style.display = 'block';
            $('RBottom').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('RBottom').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('lengthenL-R').style.display = 'block';
            $('lengthenL-R').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('lengthenL-R').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('lengthenR-L').style.display = 'block';
            $('lengthenR-L').style.backgroundColor = randomByColor;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('lengthenR-L').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }
    }
    
    // 随机出现图形更换背景
    function bodyRandom (){
        var num = 0;
        var randomNum = parseInt( Math.random() * 2);
        var randomByColor = randomBodyColor[parseInt( Math.random() * randomBodyColor.length)];
        var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
        var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
        var randomX = parseInt( Math.random() * winWidth) + "px";
        var randomY = parseInt( Math.random() * winHeight) + "px";
        if ( num++ == randomNum ){
            $('bodyRandomRound').style.display = 'block';
            $('bodyRandomRound').style.backgroundColor = randomByColor;
            $('bodyRandomRound').style.top = randomY ;
            $('bodyRandomRound').style.left = randomX ;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('bodyRandomRound').style.display = 'none';
                clearInterval(timer);
            }, 300);
        }else if ( num++ == randomNum ){
            $('bodyRandomSquare').style.display = 'block';
            $('bodyRandomSquare').style.backgroundColor = randomByColor;
            $('bodyRandomSquare').style.top = randomY ;
            $('bodyRandomSquare').style.left = randomX ;
            var timer = setInterval(function(){
                document.body.style.backgroundColor = randomByColor;
                $('bodyRandomSquare').style.display = 'none';
                clearInterval(timer);
            }, 300);
        }
    }

    //中心放大动画
    function largen( randomByColor ){
        var num = 0;
        var randomNum = parseInt( Math.random() * 3);
        var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
        if ( num++ == randomNum){
            $('middleRound').style.border = `20px solid ${randomColor}`;
            $('middleRound').style.display = 'block';
            var timer = setInterval(function(){
                 $('middleRound').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('middleSquare').style.border = `20px solid ${randomColor}`;
            $('middleSquare').style.display = 'block';
            var timer = setInterval(function(){
                $('middleSquare').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }else if ( num++ == randomNum ){
            $('middleTriangle').style.borderColor = `transparent transparent ${randomColor} transparent`;
            $('middleTriangle').style.display = 'block';
            $('middleTriangle1').style.display = 'block';
            $('middleTriangle1').style.borderColor = `transparent transparent ${randomByColor} transparent`;
            var timer = setInterval(function(){
                $('middleTriangle').style.display = 'none';
                $('middleTriangle1').style.display = 'none';
                clearInterval(timer);
            }, 500);
        }

        //随机出现加旋转动画（填充）
        } 
        function randomAppear() {
            var num = 0;
            var randomNum = parseInt( Math.random() * 3);
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if ( num++ == randomNum ){
                var classRandomSquare = document.getElementsByClassName('randomSquare');
                for ( var i = 0 ; i < classRandomSquare.length; i++){
                    var randomX = parseInt( Math.random() * winWidth) + "px";
                    var randomY = parseInt( Math.random() * winHeight) + "px";
                    var randomNumDeg = parseInt( Math.random() * 360) + "deg";
                    classRandomSquare[i].style.transform = `rotate(${randomNumDeg})`;
                    classRandomSquare[i].style.display = 'block';
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classRandomSquare[i].style.backgroundColor = randomColor;
                    classRandomSquare[i].style.top = randomY ;
                    classRandomSquare[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classRandomSquare.length; j++){
                    classRandomSquare[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 700);
            }else if ( num++ == randomNum ){
                var classRandomRound = document.getElementsByClassName('randomRound');
                for ( var i = 0 ; i < classRandomRound.length; i++){
                    var randomX = parseInt( Math.random() * winWidth) + "px";
                    var randomY = parseInt( Math.random() * winHeight) + "px";
                    var randomNumDeg = parseInt( Math.random() * 360) + "deg";
                    classRandomRound[i].style.transform = `rotate(${randomNumDeg})`;
                    classRandomRound[i].style.display = 'block';
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classRandomRound[i].style.backgroundColor = randomColor;
                    classRandomRound[i].style.top = randomY ;
                    classRandomRound[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classRandomRound.length; j++){
                    classRandomRound[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 700);
            }else if ( num++ == randomNum ){
                var classRandomTriangle = document.getElementsByClassName('randomTriangle');
                for ( var i = 0 ; i < classRandomTriangle.length; i++ ){
                    var randomX = parseInt( Math.random() * winWidth) + "px";
                    var randomY = parseInt( Math.random() * winHeight) + "px";
                    classRandomTriangle[i].style.display = 'block';
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classRandomTriangle[i].style.borderColor = `transparent transparent ${randomColor} transparent`;
                    var randomNumDeg = parseInt( Math.random() * 360) + "deg";
                    classRandomTriangle[i].style.transform = `rotate(${randomNumDeg})`;
                    classRandomTriangle[i].style.top = randomY ;
                    classRandomTriangle[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classRandomTriangle.length; j++){
                    classRandomTriangle[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 700);
            }
        }
        //随机出现（空心）
        function randomHollow() {
            var num = 0;
            var randomNum = parseInt( Math.random() * 2);
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if ( num++ == randomNum ){
                var classHollowRound = document.getElementsByClassName('hollowRound');
                for ( var i = 0 ; i < classHollowRound.length; i++){
                    var randomX = parseInt( Math.random() * winWidth) + "px";
                    var randomY = parseInt( Math.random() * winHeight) + "px";
                    classHollowRound[i].style.display = 'block';
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classHollowRound[i].style.border = `6px solid ${randomColor}`;
                    classHollowRound[i].style.top = randomY ;
                    classHollowRound[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classHollowRound.length; j++){
                    classHollowRound[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 700);
            }else if ( num++ == randomNum ){
                var classHollowSquare = document.getElementsByClassName('hollowSquare');
                for ( var i = 0 ; i < classHollowSquare.length; i++){
                    var randomX = parseInt( Math.random() * winWidth) + "px";
                    var randomY = parseInt( Math.random() * winHeight) + "px";
                    classHollowSquare[i].style.display = 'block';
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classHollowSquare[i].style.border = `6px solid ${randomColor}`;
                    classHollowSquare[i].style.top = randomY ;
                    classHollowSquare[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classHollowSquare.length; j++){
                    classHollowSquare[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 700);
            }
        }
        //中间炸开
        function randomBlast(){
            var num = 0;
            var randomNum = parseInt( Math.random() * 2);
            if ( num++ == randomNum ){
                var classBlastSquare = document.getElementsByClassName('blastSquare');
                for ( var i = 0 ; i < classBlastSquare.length; i++){
                    classBlastSquare[i].style.top = '50%' ;
                    classBlastSquare[i].style.left = '50%' ;
                    classBlastSquare[i].style.display = 'block';
                }
                for ( var i = 0 ; i < classBlastSquare.length; i++){
                    var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
                    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    var randomX = parseInt( Math.random() * winWidth ) + "px";
                    var randomY = parseInt( Math.random() * winHeight ) + "px";
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classBlastSquare[i].style.border = `6px solid ${randomColor}`;
                    classBlastSquare[i].style.top = randomY ;
                    classBlastSquare[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classBlastSquare.length; j++){
                    classBlastSquare[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 600);
            }else if ( num++ == randomNum ){
                var classBlastRound = document.getElementsByClassName('blastRound');
                for ( var i = 0 ; i < classBlastRound.length; i++){
                    classBlastRound[i].style.top = '50%' ;
                    classBlastRound[i].style.left = '50%' ;
                    classBlastRound[i].style.display = 'block';
                }
                for ( var i = 0 ; i < classBlastRound.length; i++){
                    var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
                    var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    var randomX = parseInt( Math.random() * winWidth ) + "px";
                    var randomY = parseInt( Math.random() * winHeight ) + "px";
                    var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
                    classBlastRound[i].style.border = `6px solid ${randomColor}`;
                    classBlastRound[i].style.top = randomY ;
                    classBlastRound[i].style.left = randomX ;
                }
                var timer = setInterval(function(){
                    for ( var j = 0; j < classBlastRound.length; j++){
                    classBlastRound[j].style.display = 'none';
                }
                    clearInterval(timer);
                }, 600);
            }
        }

        // 重上往下出现，从左往右变长
            //正方形
        function lengthenSquare(){
            var num = 0;
            var randomNum = parseInt( Math.random() * 3);
            if ( num++ == randomNum ){
                var id = "middleSquareDisplay";
                var randomNumDeg = "0deg";
            }else if ( num++ == randomNum ){
                var id = "middleSquareDisplay1";
                var randomNumDeg = "90deg";
            }else if ( num++ == randomNum ){
                var id = "middleSquareDisplay2";
                var randomNumDeg = parseInt( Math.random() * 400) + "deg";   
            }
            var getClass = $(id).getElementsByClassName('middleSquareDisplay');
            var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var middleX = (winWidth / 2) - 300 + "px";
            var middleY = (winHeight / 2) - 300 + "px";
            $(id).style.transform = `rotate(${randomNumDeg})`;
            $(id).style.top = middleY;
            $(id).style.left = middleX;
            $(id).style.display = 'block';
            var getClassTop = 14;
            for ( var i = 0 ; i < getClass.length; i++){
                getClassTop += 14;
                getClass[i].style.backgroundColor = randomColor;
                getClass[i].style.top = `${getClassTop}%`;
            }
            getClass[0].style.display = 'block';
            var timer1 = setInterval(function(){
                getClass[0].style.display = 'none';
                clearInterval(timer1);
                $(id).style.display = 'none';
            }, 900);
            var timer2 = setInterval(function(){
                getClass[1].style.display = 'block';
                var timer2_1 = setInterval(function(){
                    getClass[1].style.display = 'none';
                    clearInterval(timer2_1);
                }, 800);
                clearInterval(timer2);
            }, 100);
            var timer3 = setInterval(function(){
                getClass[2].style.display = 'block';
                var timer3_1 = setInterval(function(){
                    getClass[2].style.display = 'none';
                    clearInterval(timer3_1);
                }, 800);
                clearInterval(timer3);
            }, 200);
        }

        function lengthenRound(){
            var num = 0;
            var randomNum = parseInt( Math.random() * 3);
            if ( num++ == randomNum ){
                var id = "middleRoundDisplay";
                var randomNumDeg = "0deg";
            }else if ( num++ == randomNum ){
                var id = "middleRoundDisplay1";
                var randomNumDeg = "90deg";
            }else if ( num++ == randomNum ){
                var id = "middleRoundDisplay2";
                var randomNumDeg = parseInt( Math.random() * 400) + "deg";   
            }
            var getClass = $(id).getElementsByClassName('middleRoundDisplay');
            var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var middleX = (winWidth / 2) - 300 + "px";
            var middleY = (winHeight / 2) - 300 + "px";
            $(id).style.transform = `rotate(${randomNumDeg})`;
            $(id).style.top = middleY;
            $(id).style.left = middleX;
            $(id).style.display = 'block';
            var getClassTop = 14;
            for ( var i = 0 ; i < getClass.length; i++){
                getClassTop += 14;
                getClass[i].style.backgroundColor = randomColor;
                getClass[i].style.top = `${getClassTop}%`;
            }
            getClass[0].style.display = 'block';
            var timer1 = setInterval(function(){
                getClass[0].style.display = 'none';
                clearInterval(timer1);
                $(id).style.display = 'none';
            }, 900);
            var timer2 = setInterval(function(){
                getClass[1].style.display = 'block';
                var timer2_1 = setInterval(function(){
                    getClass[1].style.display = 'none';
                    clearInterval(timer2_1);
                }, 800);
                clearInterval(timer2);
            }, 100);
            var timer3 = setInterval(function(){
                getClass[2].style.display = 'block';
                var timer3_1 = setInterval(function(){
                    getClass[2].style.display = 'none';
                    clearInterval(timer3_1);
                }, 800);
                clearInterval(timer3);
            }, 200);
        }

        // 旋转出现X
        function rotateX (){
            var num = 0;
            var randomNum = parseInt( Math.random() * 2);
            if ( num++ == randomNum ){
                var id = "displayXL";
            }else if ( num++ == randomNum ){
                var id = "displayXR";
            }
            var getClass = $(id).getElementsByClassName('displayX');
            var randomColor = cartoonColor[parseInt( Math.random() * cartoonColor.length)];
            var winWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = document.documentElement.clientHeight || document.body.clientHeight;
            var randomX = parseInt( Math.random() * winWidth ) + "px";
            var randomY = parseInt( Math.random() * winHeight ) + "px";
            $(id).style.top = randomY;
            $(id).style.left = randomX;
            $(id).style.display = 'block';
            var j = 0;
            while ( j < 2 )
            {
                getClass[j].style.backgroundColor = randomColor;
                if ( j == 0 ){
                    getClass[j].style.transform = 'rotate(45deg)';
                }else{
                    getClass[j].style.transform = 'rotate(-45deg)';
                }
                j++;
            }
            var timer = setInterval( function(){
                $(id).style.display = 'none';
                clearInterval(timer);
            }, 700);
        }
    window.onkeypress = function(ev){
        let e = ev || window.event;
        let which = e.charCode || e.which;
        ByColorI++;
        if ( ByColorI < 5){
            var randomByColor = "#66CCFF";
        }

        if ( 0 == ByColorI % 5 ){
            var randomByColor = randomBodyColor[parseInt( Math.random() * randomBodyColor.length)];
            BodyColor( randomByColor );
        } 
        if( 0 ){
// 左手
        }else if( "`".charCodeAt()== which ){
            $('c4').currentTime = 0;
            $('c4').play();
        }else if( "q".charCodeAt()== which ){
            $('d4').currentTime = 0;
            $('d4').play();
        }else if( "w".charCodeAt()== which ){
            $('e4').currentTime = 0;
            $('e4').play();
        }else if( "e".charCodeAt()== which ){
            $('f4').currentTime = 0;
            $('f4').play();
        }else if( "r".charCodeAt()== which ){
            $('g4').currentTime = 0;
            $('g4').play();
        }else if( "t".charCodeAt()== which ){
            $('a4').currentTime = 0;
            $('a4').play();
        }else if( "y".charCodeAt()== which ){
            $('b4').currentTime = 0;
            $('b4').play();
        }else if( "1".charCodeAt()== which ){
            $('c3').currentTime = 0;
            $('c3').play();
        }else if( "2".charCodeAt()== which ){
            $('d3').currentTime = 0;
            $('d3').play();
        }else if( "a".charCodeAt()== which ){
            $('e3').currentTime = 0;
            $('e3').play();
        }else if( "s".charCodeAt()== which ){
            $('f3').currentTime = 0;
            $('f3').play();
        }else if( "d".charCodeAt()== which ){
            $('g3').currentTime = 0;
            $('g3').play();
        }else if( "f".charCodeAt()== which ){
            $('a3').currentTime = 0;
            $('a3').play();
        }else if( "g".charCodeAt()== which ){
            $('b3').currentTime = 0;
            $('b3').play();
        }else if( "3".charCodeAt()== which ){
            $('c2').currentTime = 0;
            $('c2').play();
        }else if( "4".charCodeAt()== which ){
            $('d2').currentTime = 0;
            $('d2').play();
        }else if( "z".charCodeAt()== which ){
            $('e2').currentTime = 0;
            $('e2').play();
        }else if( "x".charCodeAt()== which ){
            $('f2').currentTime = 0;
            $('f2').play();
        }else if( "c".charCodeAt()== which ){
            $('g2').currentTime = 0;
            $('g2').play();
        }else if( "v".charCodeAt()== which ){
            $('a2').currentTime = 0;
            $('a2').play();
        }else if( "b".charCodeAt()== which ){
            $('b2').currentTime = 0;
            $('b2').play();
        }else if( "8".charCodeAt()== which ){ //右手
            $(`${determine}c2`).currentTime = 0;
            $(`${determine}c2`).play();
            bodyRandom();
        }else if( "9".charCodeAt()== which ){
            $(`${determine}d2`).currentTime = 0;
            $(`${determine}d2`).play();
            randomBlast();
        }else if( "n".charCodeAt()== which ){
            $(`${determine}e2`).currentTime = 0;
            $(`${determine}e2`).play();
            rotateX ();
        }else if( "m".charCodeAt()== which ){
            $(`${determine}f2`).currentTime = 0;
            $(`${determine}f2`).play();
            largen( randomByColor );
        }else if( ",".charCodeAt()== which ){
            $(`${determine}g2`).currentTime = 0;
            $(`${determine}g2`).play();
            rotateX ();
        }else if( ".".charCodeAt()== which ){
            $(`${determine}a2`).currentTime = 0;
            $(`${determine}a2`).play();
            randomAppear();
        }else if( "/".charCodeAt()== which || "0".charCodeAt()== which ){
            $(`${determine}b2`).currentTime = 0;
            $(`${determine}b2`).play();
            lengthenRound();
        }else if( "h".charCodeAt()== which || "1".charCodeAt()== which ){
            $(`${determine}c3`).currentTime = 0;
            $(`${determine}c3`).play();
            largen( randomByColor );
        }else if( "j".charCodeAt() == which || "2".charCodeAt()== which ){
            $(`${determine}d3`).currentTime = 0;
            $(`${determine}d3`).play();
            randomAppear();
        }else if( "k".charCodeAt() == which || "3".charCodeAt()== which ){
            $(`${determine}e3`).currentTime = 0;
            $(`${determine}e3`).play();
            randomHollow();
        }else if( "l".charCodeAt() == which || "4".charCodeAt()== which ){
            $(`${determine}f3`).currentTime = 0;
            $(`${determine}f3`).play();
            randomBlast();
        }else if( ";".charCodeAt() == which || "5".charCodeAt()== which ){
            $(`${determine}g3`).currentTime = 0;
            $(`${determine}g3`).play();
            lengthenSquare();
        }else if( "'".charCodeAt() == which || "6".charCodeAt()== which ){
            $(`${determine}a3`).currentTime = 0;
            $(`${determine}a3`).play();
            bodyRandom();
        }else if( "u".charCodeAt() == which || "7".charCodeAt()== which ){
            $(`${determine}c4`).currentTime = 0;
            $(`${determine}c4`).play();
            randomHollow();
        }else if( "i".charCodeAt() == which || "8".charCodeAt()== which ){
            $(`${determine}d4`).currentTime = 0;
            $(`${determine}d4`).play();
            lengthenSquare();
        }else if( "o".charCodeAt() == which ){
            $(`${determine}e4`).currentTime = 0;
            $(`${determine}e4`).play();
            randomBlast();
        }else if( "p".charCodeAt() == which ){
            $(`${determine}f4`).currentTime = 0;
            $(`${determine}f4`).play();
            randomBlast();
        }else if( "[".charCodeAt() == which){
            $(`${determine}g4`).currentTime = 0;
            $(`${determine}g4`).play();
            bodyRandom();
        }else if( "]".charCodeAt() == which){
            $(`${determine}a4`).currentTime = 0;
            $(`${determine}a4`).play();
            lengthenSquare();
        }else if( "\\".charCodeAt() == which){
            $(`${determine}b4`).currentTime = 0;
            $(`${determine}b4`).play();
            bodyRandom();
        }
    }
    window.onkeydown = function(ev){
        let e = ev || window.event;
        let which = e.charCode || e.which;
        if ( 13 == which){
            $(`${determine}b3`).currentTime = 0;
            $(`${determine}b3`).play();
        }
    }
    // 打击板功能
    $('cellphone').onclick = function(){
        ByColorI++;
        if ( ByColorI < 5){
            var randomByColor = "#66CCFF";
        }

        if ( 0 == ByColorI % 5 ){
            var randomByColor = randomBodyColor[parseInt( Math.random() * randomBodyColor.length)];
            BodyColor( randomByColor );
        }
        var getClass = document.getElementsByClassName('CPLaunchPad');
        var launchPadI = 0;
        var fun = [ 'rotateX ()', 'lengthenRound()', 'largen( randomByColor )', 'randomAppear()', 'randomHollow()', 'randomBlast()', 'lengthenSquare()', 'bodyRandom()'];
        var randomFun = parseInt( Math.random() * fun.length);
        eval(fun[randomFun]);
        if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}e2`).currentTime = 0;
            $(`${determine}e2`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}f2`).currentTime = 0;
            $(`${determine}f2`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}g2`).currentTime = 0;
            $(`${determine}g2`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}a2`).currentTime = 0;
            $(`${determine}a2`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}b2`).currentTime = 0;
            $(`${determine}b2`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}c3`).currentTime = 0;
            $(`${determine}c3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}d3`).currentTime = 0;
            $(`${determine}d3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}e3`).currentTime = 0;
            $(`${determine}e3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}f3`).currentTime = 0;
            $(`${determine}f3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}g3`).currentTime = 0;
            $(`${determine}g3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}a3`).currentTime = 0;
            $(`${determine}a3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}b3`).currentTime = 0;
            $(`${determine}b3`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}c4`).currentTime = 0;
            $(`${determine}c4`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}d4`).currentTime = 0;
            $(`${determine}d4`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}e4`).currentTime = 0;
            $(`${determine}e4`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}f4`).currentTime = 0;
            $(`${determine}f4`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}g4`).currentTime = 0;
            $(`${determine}g4`).play();
        }else if ( getClass[launchPadI++].style.backgroundColor ){
            $(`${determine}a4`).currentTime = 0;
            $(`${determine}a4`).play();
        }
    }
}