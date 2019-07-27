// You js goes here
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    session = "PM"
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    setTimeout(showTime, 1000);
    
}
showTime();
// todo
var todos = document.querySelector(".addtodos");
var list = document.querySelector(".list");
//function to add todos
let empty = [];
function addtodos(e) {
    if (e.keyCode === 13) {
        empty.push(todos.value);
        todos.value = "";
    }
}
//function display
function display(empty,list) {
list.innerHTML = empty.map((val,index)  => {
    return `(
        <li>${val}</li>
    )`
})
}
//event listner
todos.addEventListener("keyup", addtodos);
