const url="https://dummyjson.com/users?limit=2";
const pr = fetch(url);
pr.then((res)=>{
    return res.json();
})
// for single user
// .then((data)=>{
//     console.log("name = ", data.users[0].firstName);
//     console.log("email = ", data.users[0].email);
//     console.log("ip = ", data.users[0].ip);
//     console.log("Mac Address = ", data.users[0].macAddress);
// })

//for more than 1 user
.then((data)=>{
    data.users.forEach(element => {
        console.log("name = ", element.firstName);
        console.log("email = ", element.email);
        console.log("ip = ", element.ip);
        console.log("Mac Address = ", element.macAddress);
        console.log();
    });
})

.catch((err)=>{
    console.error("Error = ", err.message);
})