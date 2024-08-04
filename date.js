function renderTime(){
    var t=new Date();
    var d= t.setDate(t.getDate()-1+1)&&(t.getDate()-1);
    var m = t.setMonth(t.getMonth()-8+1)&&t.getMonth();
    var yy = t.getFullYear()-2021;
    var myClock = document.getElementById('clockDisplay');
    myClock.textContent = yy + "year " + m + "month " + d + "day";
    setTimeout('renderTime()', 1000); 
}
renderTime();