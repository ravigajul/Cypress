const geocode = (address,callback)=>{
    const data = {
        latitude: 0,
        longitude:0
    }
    callback(data)
}

geocode('Atlanta',(data)=>{
    console.log(data)
})

//This printS undefined as the fnAdd is not returning anything but setTimeout
/* const fnAdd =(a,b)=>{
    setTimeout(()=>{
        return a+b
    },2000)
}
console.log('The sume of numbers is ' + fnAdd(3,5)) */

//Address the undefined return by using callback
const fnAdd =(a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },2000)
}
debugger
fnAdd(3,5,(x)=>{
    debugger
    console.log('The sume of numbers is ' + x)
})