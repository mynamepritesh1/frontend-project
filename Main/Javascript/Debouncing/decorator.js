//decorator function taken funtion

//and return funtion

function decorator(func){
    return function(){
        func();
    }
};

function hello(){
    console.log("hello world");

}

const decoratedhello = decorator(hello);
decoratedhello();