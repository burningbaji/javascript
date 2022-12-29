function greetuser(user='unknow'){
    console.log(`hello mr.${user}`)
}
greetuser();
greetuser("baji shaik");

const helloteja =(username = 'unkown') =>{
    return`welcome back! mr.${username}`
}
const mydata = helloteja('baji shaik');
console.log(mydata);