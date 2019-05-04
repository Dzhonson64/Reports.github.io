var month = "", years = "";
var result = 0;
var summ = 0;
var index = 0;
function increase(elem){
    var blockList = elem.parentElement.parentElement.parentElement;
    var elements = document.getElementsByClassName("block-list");
    for (var i = 0; i < elements.length; i++){
        if (elements[i] == blockList){
            summ = Number(localStorage.getItem("summ" + i));
            var input = elem.parentElement.previousElementSibling;
            var resultElem = elem.parentElement.parentElement.nextElementSibling.children[1];
            var inc = elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0];

            summ += Math.abs(input.value);
            resultElem.innerText = summ;
            var newWrapper = document.createElement("div");
            newWrapper.className = "wrapper";
            var newItem = document.createElement("p");
            var newCross = document.createElement("i");
            newCross.className = "far fa-times-circle";
            newCross.setAttribute("onclick", "deleteReport(this)");
            newItem.innerText = Math.abs(input.value);
            inc.appendChild(newWrapper)
            newWrapper.appendChild(newItem);
            newWrapper.appendChild(newCross);
            localStorage["summ" + i] = summ;
        }
    }
}

function reduction(elem) {
    var blockList = elem.parentElement.parentElement.parentElement;
    var elements = document.getElementsByClassName("block-list");
    for (var i = 0; i < elements.length; i++){
        if (elements[i] == blockList){
            summ = Number(localStorage.getItem("summ" + i));
            var input = elem.parentElement.previousElementSibling;
            var resultElem = elem.parentElement.parentElement.nextElementSibling.children[1];
            var red = elem.parentElement.parentElement.nextElementSibling.nextElementSibling.children[1];
            
            summ -= Math.abs(input.value);
            resultElem.innerHTML = summ; 
            var newWrapper = document.createElement("div");
            newWrapper.className = "wrapper";
            var newCross = document.createElement("i");
            newCross.className = "far fa-times-circle";
            newCross.setAttribute("onclick", "deleteReport(this)");
            var newItem = document.createElement("p");
            newItem.innerText = Math.abs(input.value);
            red.appendChild(newWrapper)
            newWrapper.appendChild(newItem);
            newWrapper.appendChild(newCross);
            localStorage["summ" + i] = summ;
        }
    }
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
    $(elem).click(function selectMonth() {
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
    var areaError = document.getElementById("error");
    if (month != "" && years != ""){
        var btnRemove = document.getElementById("remove");
        btnRemove.style.display = "flex";
        localStorage.setItem("summ" + index, 0);
        index++;
        areaError.style.display = "none";
        var parent = document.getElementById('report');
        var divBlockList = document.createElement('div');
        divBlockList.className = "block-list";
        parent.insertBefore(divBlockList, btnRemove);
        
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
        pNum.className = "balance";
        pNum.innerHTML = "Баланс: ";
        divTypeArea.appendChild(pNum);

        var pNum = document.createElement('p');
        pNum.className = "num";
        pNum.innerHTML = 0;
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
    }else {
        areaError.style.display = "block";
    }
    


}

function remove(elem){
    var storage = elem.parentElement;
    var parent = elem.previousElementSibling;
    console.log(storage);
    console.log(parent);
    storage.removeChild(parent);
}

function deleteReport(elem){
    var colReports = elem.parentElement.parentElement.parentElement;
    var reportParent = elem.parentElement.parentElement;
    var report = elem.parentElement;
    var numberReport = Number(elem.previousElementSibling.innerText);
    reportParent.removeChild(report);

    var blockList = colReports.parentElement;
    var elements = document.getElementsByClassName("block-list");
    for (var i = 0; i < elements.length; i++){
        if (elements[i] == blockList){
            summ = Number(localStorage.getItem("summ" + i));

            
            if (reportParent == colReports.children[0]){
                summ -= numberReport;
            }else if (reportParent == colReports.children[1]){
                summ += numberReport;
            }
            var resultElem = reportParent.parentElement.previousElementSibling.children[1];
            console.log(resultElem);
            resultElem.innerHTML = summ;
            localStorage["summ" + i] = summ;
        }
    }
    
}