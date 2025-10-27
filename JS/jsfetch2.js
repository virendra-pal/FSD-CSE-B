const url = "https://dummyjson.com/users";
const f1 = async () => {
    try {
        const res = await fetch(url);
        const jsondata = await res.json();
        jsondata.users.forEach((data) => {
            console.log("Name = ", data.firstName);
            console.log("Email = ", data.email);
            console.log("IP = ", data.ip);
            console.log("Mac Address = ", data.macAddress);
            console.log("####################");
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}
f1();