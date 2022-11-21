// importing express as express
const express = require("express")

const app = express()

// assigning the port 8080 to the app (express)
const PORT = 80;

// to get the access to the server (CORS Error)
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

// function getsometing(req, res) {
//     console.log("e");
//     res.send("hello, namaste");
// }

// app.get("/", getsometing);

// (urlpath, callback function)
app.get("/", (req, res) => {
    // console.log(req);
    // console.log(res);

    // res.status(404).send("<font color='red'><h1><marquee scrollmount='20'>Details nahi hai!</marquee></h1></font>\n");
    res.sendfile("index.html");
})

app.get("/api/:id/:name", (req, res) => {
    const { id } = req.params;
    const { name } = req.params;

    if (id == "ajay" && name == "1") {
        res.send("I know you!")
    }
    //  else {
    //     res.send("Kaun ho tum?")
    // }
    else if (id == "ajay" && name == "2") {
        res.send("Chal rhaa hai!")
    }
})


app.get("/post", (req, res) => {
    res.send("hehehe");
})




app.listen(PORT, () => {

    console.log("Server is ON!")
})