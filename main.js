function onReady(){
    console.log("I work!");
    setInterval(updateClock, 1000);

}
function updateClock(){
    var date = new Date();


    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());

    var clock = document.getElementById('clock');
    clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
}
function formatDigits(val) {
    if(val<10) {
        val = "0" + val;
    }
    return val;
}
window.onLoad = onReady();
