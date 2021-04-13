window.onload = pageLoad;

function pageLoad(){
    document.getElementById('start').onclick = startGame;
   //var start = document.getElementById('start');
   //start.onclick = startGame;
}

function startGame(){
    alert("Are you ready?");
    addBox();
    timeStart();
}

function timeStart(){
    var TIMER_TICK = 1000;
    var timer = null;
    var second = 30;
    var time = document.getElementById('clock');
    time.innerHTML = second;
    timer = setInterval(timeCount,TIMER_TICK);

    function timeCount(){
        var allbox = document.querySelectorAll("#game-layer div");
        second = second - 1;
        time.innerHTML = second;
        let a = 30 - second;

        if (allbox.length == 0 && second !=0)
        {
            //alert("You win!!!" + "Time : " + a + "sec.")
            alert("You win!!!")
            alert("Time : " + a + " sec.")
            clearInterval(timer);
            clearScreen();
        }

        else if (allbox.length != 0 && second == 0){
            alert("You Lost!!!")
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox(){
    var numbox = document.getElementById('numbox').value;
    var gameLayer = document.getElementById('game-layer');
    var colorDrop = document.getElementById('color').value;
    for (var i = 0; i<numbox;i++)
    {
        var tempbox = document.createElement('div');
        tempbox.className = 'square';
        tempbox.id = "box"+i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.backgroundColor = colorDrop;
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box)
    {
    var gameLayer = document.getElementById('game-layer'); 
    box.onclick = function()
    {
    gameLayer.removeChild(box);
    }
}

function clearScreen(){
    var allbox = document.querySelectorAll("#game-layer div");
    var gameLayer = document.getElementById('game-layer');
    
    for (var i=0;i<allbox.length;i++)
    {
        gameLayer.removeChild(allbox[i])
    }
}