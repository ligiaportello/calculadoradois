// This is a JavaScript file

var input_box = document.getElementById(elementld,'Calculadora');

function UserClickButton(input) {
    var oldinput=input_box.value;
    var newinput=oldinput+""+input;
    input_box.value=newinput;
}
     function CalculoIgualValue(){
         console.log("click");
         var input=input_box.value;
         input=input.replace('"',"").replace(searchValue,"'",replaceValue,"");
         var result= eval(input);
         input_box.value=result;
     }

function ClearData(){
    input_box.value="";
}

