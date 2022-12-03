//understand callback fubntion 

//basic example of callbnack function

function gettwoNumbers(number1, number2 , onSuccess , onFailure){
    if(typeof number1 ==='number' && typeof number2 ==='number'){
        onSuccess(number1,number2);

    }else{
        onFailure();
    }
    
}

function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
};

function onfail(){
    console.log("Please enter only number")
}

gettwoNumbers("5",4,addTwoNumbers,onfail);

