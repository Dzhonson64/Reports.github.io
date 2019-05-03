var month = "Июнь", years = "2010";
var result = 0;
var summ = 0;
function increase(elem){
    console.log(elem);
    var input = elem.parentElement.previousElementSibling;
    var resultElem = elem.parentElement.parentElement.nextElementSibling.children[0];
    var inc = elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0];
    
    summ += Math.abs(input.value);
    resultElem.innerText = summ;
    var newItem = document.createElement("p");
    newItem.innerText = Math.abs(input.value);
    inc.appendChild(newItem);
}

function reduction(elem) {
    var input = elem.parentElement.previousElementSibling;
    var resultElem = elem.parentElement.parentElement.nextElementSibling.firstElementChild;
    var red = elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1];
    
    summ -= Math.abs(input.value);
    resultElem.innerHTML = summ; 
    var newItem = document.createElement("p");
    newItem.innerText = Math.abs(input.value);
    red.appendChild(newItem);
}
$("#btn-month").click(function () {
    $("#month").slideToggle();
});
$("#btn-years").click(function () {
    $("#years").slideToggle();
});
function selectMonth(elem){
    var titleMonth = elem.parentElement.previousElementSibling;
    month = elem.innerText;
    $(elem).click(function () {
        $("#month").slideUp();
        titleMonth.innerHTML =  elem.innerHTML;
    });
}
function selectYears(elem){
    var titleYear = elem.parentElement.previousElementSibling;
    years = elem.innerText;
    $(elem).click(function () {
        $("#years").slideUp();
        titleYear.innerHTML =  elem.innerHTML;
    });
}

function create(){
    var parent = document.getElementById('report');
    var divBlockList = document.createElement('div');
    divBlockList.className = "block-list";
    parent.insertBefore(divBlockList, document.getElementById("add"));
    
    var divData = document.createElement('div');
    divData.className = "data";
    divBlockList.appendChild(divData);

    var h3Month = document.createElement('h3');
    h3Month.className = "month";
    h3Month.innerHTML = month;
    divData.appendChild(h3Month);

    var h3Year = document.createElement('h3');
    h3Year.className = "years";
    h3Year.innerHTML = years;
    divData.appendChild(h3Year);

    var divInputted = document.createElement('div');
    divInputted.className = "inputted";
    divBlockList.appendChild(divInputted);

    var input = document.createElement('input');
    input.setAttribute("type", "number");
    divInputted.appendChild(input);

    var divControls = document.createElement('div');
    divControls.className = "controls";
    divInputted.appendChild(divControls);

    var divPlus = document.createElement('div');
    divPlus.className = "plus";
    divPlus.setAttribute("onclick", "increase(this)");
    divPlus.innerHTML = "+";
    divControls.appendChild(divPlus);

    var divMinus = document.createElement('div');
    divMinus.className = "minus";
    divMinus.setAttribute("onclick", "reduction(this)");
    divMinus.innerHTML = "-";
    divControls.appendChild(divMinus);
   

    var divTypeArea = document.createElement('div');
    divTypeArea.className = "type-area";
    divBlockList.appendChild(divTypeArea);

    var pNum = document.createElement('p');
    pNum.className = "num";
    divTypeArea.appendChild(pNum);

    var divMoney = document.createElement('div');
    divMoney.className = "money";
    divBlockList.appendChild(divMoney);

    var divIncrease = document.createElement('div');
    divIncrease.className = "increase";
    divMoney.appendChild(divIncrease);

    var h3Title_inc = document.createElement('h3');
    h3Title_inc.className = "title";
    h3Title_inc.innerHTML = "Доходы";
    divIncrease.appendChild(h3Title_inc);

    var divReduction = document.createElement('div');
    divReduction.className = "reduction";
    divMoney.appendChild(divReduction);

    var h3Title_red = document.createElement('h3');
    h3Title_red.className = "title";
    h3Title_red.innerHTML = "Расходы";
    divReduction.appendChild(h3Title_red);

    var crossBlockList = document.createElement('div');
    crossBlockList.className = "cross";
    crossBlockList.setAttribute("onclick", "remove(this)");
    divBlockList.appendChild(crossBlockList);

    var iconCross = document.createElement('i');
    iconCross.className = "far fa-times-circle";
    crossBlockList.appendChild(iconCross);


}

function remove(elem){
    var storage = elem.parentElement.parentElement;
    var perant = elem.parentElement;
    console.log(storage);
    console.log(perant);
    storage.removeChild(perant);
}