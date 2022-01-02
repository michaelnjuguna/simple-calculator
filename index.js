//getting the inner text of the input box
var content = document.querySelector(".content");
//clear content
function removeContent() {
    content.textContent = "";
}
//declaring first value
var firstValue = "";
//declaring sign since so that compute can access it
var sign = "";

//add content
//divide
function divide() {
    //saves the first value before clearing
    firstValue = content.textContent;
    //divide sign
    sign = "divide";
    //clearing the input
    content.textContent = "";
};
//addition
function addition() {
    //saves the first value before clearing
    firstValue = content.textContent;
    sign = "addition";
    content.textContent = "";
};
//multiplication
function multiply() {
    firstValue = content.textContent;
    sign = "multiply";
    content.textContent = "";
};
//add minus
function minus() {
    //saves the first value before clearing
    firstValue = content.textContent;
    sign = "minus";
    content.textContent = "";
};
//add seven
function addSeven() {
    content.textContent = content.textContent + "7";

};
//add eight
function addEight() {
    content.textContent = content.textContent + "8";
};
//add nine
function addNine() {
    content.textContent = content.textContent + "9";
};

//add Four
function addFour() {
    content.textContent = content.textContent + "4";
};
//add five
function addFive() {
    content.textContent = content.textContent + "5";
};
//add six
function addSix() {
    content.textContent = content.textContent + "6";
};

//add one
function addOne() {
    content.textContent = content.textContent + "1";
};
//add two
function addTwo() {
    content.textContent = content.textContent + "2";
};
//add three
function addThree() {
    content.textContent = content.textContent + "3";
};

//add zero
function addZero() {
    content.textContent = content.textContent + "0";
};
//add decimal point
function addDecimal() {
    content.textContent = content.textContent + ".";
};

//compute
function compute() {
    //getting the second value

    var secondValue = content.textContent;
    //dividing
    if (sign === "divide") {
        ans = firstValue / secondValue;
        content.textContent = ans;
    }
    //multiplying
    else if (sign === "multiply") {
        ans = firstValue * secondValue;
        content.textContent = ans;
    }
    //minus
    else if (sign === "minus") {
        ans = firstValue - secondValue;
        content.textContent = ans;
    }
    //addition
    else if (sign === "addition") {
        //to convert string into float
        ans = +(firstValue) + +(secondValue);
        content.textContent = ans;
    } else {
        content.textContent = 0;
    }

}
