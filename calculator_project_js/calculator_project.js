// calculator class 

class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    clear(){
this.currentOperand = '';
this.previousOperand= '';
this.operation = undefined;
    }
// Delete function  
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);// convert to string and delete the last element of the currentoperand.
    }

    // append number 
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.'))return;// check if decimal has already been added. if true then use return to stop user adding another decimal.
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
// choose operation function 
    chooseOperation(operation){
        if(this.currentOperand === '')return;
        if(this.previousOperand !== ''){
            this.compute()
        };
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
// Compute the calculation function 
    compute(){
        let computation ;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current))return;
        switch(this.operation){
            case'+':
                computation = prev + current;
                break
                case'-':
                computation = prev - current;
                break
                case'*':
                computation = prev * current;
                break
                case'÷':
                computation = prev / current;
                break
                default:
                    return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
// gets the display number 
getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if(isNaN(integerDigits)) {
        integerDisplay = '';
    }else{
        integerDisplay = integerDigits.toLocaleString('en',{
            maximumFractionDigits:0
    })
   
   }

   if(decimalDigits != null){
    return `${integerDigits}.${decimalDigits}`;
} else{
    return integerDisplay;
}

}
    // updates the current and previous operands

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText = '';
        }
     
    }
}
//nuber and operands buttons 

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear');
const previousOperandTextElement = document.querySelector('[data-previous-operand');
const currentOperandTextElement = document.querySelector('[data-current-operand');

// calculator const 

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

// event listener for the number buttons 
numberButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

// event listener function for the operand buttons 

operationButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

// Equals button event lister 

equalsButton.addEventListener('click',button =>{
    calculator.compute();
    calculator.updateDisplay();

});

// clear  button event listener 

allClearButton.addEventListener('click',button =>{
    calculator.clear();
    calculator.updateDisplay()

});

// delete button event listener 

deleteButton.addEventListener('click',button =>{
    calculator.delete();
    calculator.updateDisplay()

});




/* Alternate Code  solution 


// gets the history value 
function getHistory(){
    return document.getElementById("history-value");

}
// prints the history  value 
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}

//gets the input value 
function getOutput(){
    return document.getElementById('output-value').innerText = num;
}

// displays the output onto the page 
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText =num;
    }else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }

}
// format the input to  string that adds commas 
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n = number(num);
    let value = n.toLocaleString("en"); // to add commas to seperate long numbers 
    return value;
}

// take out the commas 
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
// get the operator button value using an for loop and event listener
let operator = document.getElementsByClassName("operator");
for(let i = 0; i< operator.length; i++){
    operator[i].addEventListener('click',function(){
// alert("the operator clicked"+ this.id);
// logic 
// clear button 
if(this.id == "clear"){
    printHistory("");
    printHistory("");
}
if(this.id=="backspace"){
    var output= reverseNumberFormat(getOutput).toString();
    if(output){
        // if output has a value
        output = output.substr(0,output.length-1);
        printOutput(output);
    }
}
else{
    let output = getOutput();
    let history = getHistory();
    if(output == "" && history !=""){
        if(isNaN(history[history.length-1])){
            history = history.substr(0,history.length-1);
        }
    }
    if(output!=""|| history !=""){
        // condition is true:false
        output = output ==""?output:reverseNumberFormat(output);
        history = history+output;
        if(this.id=="="){
            let result =eval(history);
            printOutput(result);
            printHistory("");
        }
        else{
            history=history+this.id;
            printHistory(history);
            printOutput("");
        }
    }
}

    });
}




//get the number button value using a for loop and event listener 

let number = document.getElementsByClassName("number");
for(let i = 0; i< number.length; i++){
    operator[i].addEventListener('click',function(){
// alert("the number clicked"+ this.id);
// logic 
let output = reverseNumberFormat(getOutput()); // turn string back into integer
if(output != NaN){ // check if output is integer 
    output=output + this.id;  
    printOutput(output);  // display the number 

}

    });
}

*/














