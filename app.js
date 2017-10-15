/* Blocks */
var blockOne   = document.getElementById("blockOne");
var blockTwo   = document.getElementById("blockTwo");
var blockThree = document.getElementById("blockThree");
var blockFour  = document.getElementById("blockFour");
var blockFive  = document.getElementById("blockFive");
var result     = document.getElementById("result");

/* Blocks display: none */
blockTwo.style.display   = "none";
blockThree.style.display = "none";
blockFour.style.display  = "none";
blockFive.style.display  = "none";
result.style.display     = "none";

/* Buttons */
var btnOne      = document.getElementById("btnOne");
var btnTwo      = document.getElementById("btnTwo");
var btnThree    = document.getElementById("btnThree");
var btnFour     = document.getElementById("btnFour");
var btnFive     = document.getElementById("btnFive");
var otherDream  = document.getElementById("otherDream");

/* Buttons disabled */
btnTwo.disabled = true;
btnThree.disabled = true;
btnFour.disabled = true;
btnFive.disabled = true;

/* Inputs */
var theDream      = document.getElementById("inputTwo");
var dreamCost     = document.getElementById("inputThree");
var moneyYouHave  = document.getElementById("inputFour");
var moneyPerMonth = document.getElementById("inputFive");

/* Dreams List Table */
var dreamOne = document.getElementsByClassName("dreamsList")[0];

//////////////////
/**** Events ****/
//////////////////

btnOne.addEventListener("click", function () {
    blockTwo.style.display = "block";
    btnOne.disabled = true;
});

theDream.addEventListener("keyup", function () {
    var theDreamValue = theDream.value;
    var regex = /^[0-9]+$/;
    if(theDreamValue.match(regex)) {
        alert("Ну что это за мечта такая!? Напишите что-то вразумительное, пожалуйста.");
        theDream.value= "";
    } else if (theDreamValue === "") {
        btnTwo.disabled = true;
    } else {
        btnTwo.disabled = false;
    }
})

btnTwo.addEventListener("click", function () {
    blockThree.style.display = "block";
    document.getElementById("blockThreeDream").innerHTML = theDream.value;
    blockThreeDream.style.color = "red";
    theDream.disabled = true;
    btnTwo.disabled = true;
});

dreamCost.addEventListener("keyup", function () { 
    if(dreamCost.value > 0) {
        btnThree.disabled = false;
    } else if (dreamCost.value = "") {
        btnThree.disabled = true;
    } else {
        btnThree.disabled = true;
    }
})

btnThree.addEventListener("click", function () {
    blockFour.style.display = "block";
    dreamCost.disabled = true;
    btnThree.disabled = true;
});

moneyYouHave.addEventListener("keyup", function () {
    if(moneyYouHave.value > 0) {
        btnFour.disabled = false;
    } else if (moneyYouHave.value = "") {
        btnFour.disabled = true;
    } else {
        btnFour.disabled = true;
    }
});

btnFour.addEventListener("click", function () {
    blockFive.style.display = "block";
    moneyYouHave.disabled = true;
    btnFour.disabled = true;
});

moneyPerMonth.addEventListener("keyup", function () {
    if(moneyPerMonth.value > 0) {
        btnFive.disabled = false;
    } else if (moneyPerMonth.value = "") {
        btnFive.disabled = true;
    } else {
        btnFive.disabled = true;
    }
});

btnFive.addEventListener("click", function () {
    result.style.display = "block";
    moneyPerMonth.disabled = true;
    
    var out = (dreamCost.value - moneyYouHave.value) / moneyPerMonth.value;
    
    document.getElementById("dream").innerHTML = (theDream.value);
    document.getElementById("monthMount").innerHTML = out;
});

otherDream.addEventListener("click", function () {
    blockTwo.style.display   = "none";
    blockThree.style.display = "none";
    blockFour.style.display  = "none";
    blockFive.style.display  = "none";
    result.style.display     = "none";
    
    theDream.disabled = false;     
    dreamCost.disabled = false;    
    moneyYouHave.disabled = false; 
    moneyPerMonth.disabled = false;
    
    theDream.value = "";
    dreamCost.value = "";
    moneyYouHave.value = "";
    moneyPerMonth.value = "";
    
    btnOne.disabled = false;
})




