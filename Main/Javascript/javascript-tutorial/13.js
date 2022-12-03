// callback funtion

function myfunc2(name){
    console.log("inside function")
    console.log(`your name is ${name}`);
};

function myfunc(callback){
    console.log("hello there")
    callback("pritesh");
}
 myfunc(myfunc2)