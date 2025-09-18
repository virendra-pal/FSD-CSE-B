async function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("registering is taking place")
            reject("Registration failed ")
        }, 5000)
    })
     .catch((err)=>{
        console.log(err)
    })
}

async function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("email is sending")
             reject("Send Email failed")
        }, 2000)
    })
    .catch((err)=>{
        console.log(err)
    })
}

async function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("logging is taking place")
          reject("login failed ")
        }, 3000)
    })
 .catch((err)=>{
        console.log(err)
    })
}

async function sendData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data is fetching")
          reject()
        }, 2000)
    })
     .catch((err)=>{
        console.log(err)
    })
}

async function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data is displaying on the screen, can't you see")
           reject()
        }, 1000)
    })
     .catch((err)=>{
        console.log(err)
    })
}
// register()
// .then(sendEmail)
// .then(login)
// .then(sendData)
// .then(displayData)
async function f(){
    try{
        await register()
        await sendEmail()
        await login()
        await sendData()
        await displayData()
    }
    catch{
        console.log("error in the main flow")
    }
}
f();
console.log("hello jee kase ho saare ")