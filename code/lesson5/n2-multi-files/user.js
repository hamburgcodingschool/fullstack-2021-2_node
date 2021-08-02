// const name = "Barbara";
// const age = 15;
// const city = "Hamkburg";
// function test(arg1) {
//     console.log("This is a test...");
//     console.log(arg1);
// }

// module.exports = { name, age, city, test };


const user = {
    name: "Barbara",
    age: 15,
    city: "Hamkburg",    
    test: function(arg1) {
        console.log("This is a test...");
        console.log(arg1);
    }
}

module.exports = user;