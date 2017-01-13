function onReady(){
    console.log("I work!");
    var clock = createClock('clock');
    var clock2 = createClock('clock2');

}

function createClock(id){
    var c = new Object();
        c.updateClock = function(){
            var date = new Date();

            // console.log(date.getHours());
            // console.log(date.getMinutes());
            // console.log(date.getSeconds());

            var clock = document.getElementById(id);
            clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
        };
    setInterval(c.updateClock, 1000);
    c.updateClock();
    return c;
}

// function updateClock(){
//     var date = new Date();
//
//     // console.log(date.getHours());
//     // console.log(date.getMinutes());
//     // console.log(date.getSeconds());
//
//     var clock = document.getElementById('clock');
//     clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
// }

function formatDigits(val) {
    if(val<10) {
        val = "0" + val;
    }
    return val;
}

window.onLoad = onReady();
