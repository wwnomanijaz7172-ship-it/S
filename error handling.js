
// try -catch
try {
    console.log(myVariable); 
} catch (error) {
    console.log("Error pakra gaya: " + error.message);
}
console.log("Server abhi bhi chal raha hai!");


//throw

function checkAge(age) {
    if (age < 18) {
        throw new Error("Maazrat, aapki umar 18 saal se kam hai.");
    }
    return "Access Granted!";
}
try {
    checkAge(15);
} catch (error) {
    console.error("Validation Error: " + error.message);
}

//finally ka istamal

try {
    console.log("Database se connect ho raha hai...");
   
    throw new Error("Connection Lost!");
    console.log("Error handled: " + error.message);
} finally {
    console.log("Database connection closed.");
}
//async-await ke sath error handling
async function fetchUserData() {
    try {
        
} catch (error) {
        let response = await fakeApiCall(); 
        console.log(response);
    } catch (error) {
        console.error("Data laane mein masla hua:", error.message);
    }
}

//express.js ma global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); 
    
    res.status(500).json({
        success: false,
        message: "Kuch ghalat ho gaya! Please baad mein koshish karein.",
        error: err.message
    });

//json  parsing error handling

    let badJsonString = "{ name: 'Ali', age: 22 "; 
try {
    let user = JSON.parse(badJsonString);
    console.log(user);
} catch (error) {
    console.error("JSON parsing mein galti hai, invalid format!");
}})