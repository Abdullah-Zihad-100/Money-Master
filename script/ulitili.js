// get input value by id using a function

function getInputFieldValuById(inputId){
    const inputField=document.getElementById(inputId);
    const inputValue=inputField.value;
    const input=parseFloat(inputValue);
        if(isNaN(input)){
alert('enter number');
return;
    }
return input;
}



// get element inner text using funtion 
function setElementTextById(elementId,element){
    const elementValue=document.getElementById(elementId);
      elementValue.innerText=element;
}