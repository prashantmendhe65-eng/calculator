window.onload = function () {

    const display = document.getElementById("display");

    window.appendValue = function(value){
        display.value += value;
    }

    window.appendFunction = function(value){
        display.value += value;
    }

    window.clearDisplay = function(){
        display.value = "";
    }

    window.deleteLast = function(){
        display.value = display.value.slice(0, -1);
    }

    window.calculate = function(){

        try{
            let result = eval(display.value);
            display.value = result;
        }
        catch(error){
            display.value = "Error";
        }

    }

}