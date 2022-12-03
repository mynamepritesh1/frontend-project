function myfunc(){
    let i = 0;
    return function(){
        if(i<1){
            console.log("hi did you called me");
            i++;

        }else{
            console.log("i Already called")
        }
    }
}

const func = myfunc();
func()
func()
