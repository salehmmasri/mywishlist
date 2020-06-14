'use-strict'
var x = 0;
var getFormInfo = document.getElementById("forms");

getFormInfo.addEventListener("submit", event => {
    event.preventDefault();
    // console.log(event);
    var yourWish = event.target.enterwish.value;
    var yorData = event.target.wishDate.value;
    new Wishes(yourWish, yorData);
    if (x > 0) {
        // var clearR=document.getElementById("table");
        // document.getElementById(clearR).remove();
        document.getElementById("myTable").remove();
    }
   
    x++;
    render()

});
var tt=document.getElementById("fortable");
tt.addEventListener("click",event=>{
    var del=event.target.textContent
    if(del=="X")
    
    console.log(event);
    var removetr =event.path[1].id;
    document.getElementById(removetr).remove();


})


var arrWishes = [];
function Wishes(wish, wishDate) {
    this.wish = wish;
    this.wishDate = wishDate;
    arrWishes.push(this);
    this.yearsAfter = getRandomInt(1, 99);
    console.log(arrWishes);

    // document.getElementById("table").remove();
}

function render() {
    var tablecont = document.getElementById("fortable");
    var table = document.createElement("table");
    table.id = "myTable";
    for (let i = 0; i < arrWishes.length; i++) {
        var tr = document.createElement("tr");
        tr.id = i;
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td.textContent = arrWishes[i].wish;
        td2.textContent = arrWishes[i].wishDate;
        td3.textContent = arrWishes[i].yearsAfter;
        td4.textContent = "X";

        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        
        if (i == 0) {
            var th1 = document.createElement("th");
            th1.textContent = "Wish title"
            var th2 = document.createElement("th");
            th2.textContent = "expacted date";
            var th3 = document.createElement("th");
            th3.textContent = "your wish will come true after";
            var th4 = document.createElement("th");
            th4.textContent = "Remove";
            var tr2 = document.createElement("tr");

            tr2.appendChild(th1);
            tr2.appendChild(th2);
            tr2.appendChild(th3);
            tr2.appendChild(th4);
            // tr.appendChild();


        }
        table.appendChild(tr2);
        table.appendChild(tr);

    }


    tablecont.appendChild(table);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function set() {
    var addlocal = JSON.stringify(arrWishes);
    localStorage.setItem("mykey", addlocal);


}
set();
var locarr = [];
function get() {
    var getlocal = localStorage.getItem("mykey");
    if (getlocal) {
        var vars = JSON.parse(getlocal);
        locarr = vars
    }
}
get()