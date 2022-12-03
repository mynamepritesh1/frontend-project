//synchrnous programming vs asynchronuos programming
//synchronous programming
//setTimeout 
//agar apne ko tme set karna hai to use setTimeout

console.log("script-start");//script start here

const id = setTimeout(()=>{
    console.log("inside function"); // time ham set karenge uske bad ye fuc run hoga

} , 0);

for (let i =0; i<100; i++){
    console.log(".....");
}

console.log("settimeout id is:",id);
console.log("clearing time out");
clearTimeout(id);
console.log("script end");


