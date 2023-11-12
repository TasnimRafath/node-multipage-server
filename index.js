const http = require("http");
const fs = require("fs");
 

const app = http.createServer((req, res) => {

    let { method, url } = req
    if (method == "GET") {
        if (url === "/") {
            let data = fs.readFileSync("./public/pages/home.html", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }
        if (url == "/homecss") {
            let data = fs.readFileSync("./public/css/home.css", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }
        if (url == "/about") {
            let data = fs.readFileSync("./public/pages/about.html", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }

        if (url == "/aboutcss") {
            let data = fs.readFileSync("./public/css/about.css", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }

        if (url == "/signup") {
            let data = fs.readFileSync("./public/pages/signup.html", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }

        if (url == "/signupcss") {
            let data = fs.readFileSync("./public/css/signup.html", "utf-8")
            res.writeHead(200, { "content-Type": "text/html", "MSG": "THIS IS A HIGH SECURITY WEBPAGE" })
            res.write(data)
            res.end()
        }
    }

    else if (method === "POST") {
        if (url === "/newuser") {
            req.on("data", (data) => {
                console.log(data.toString());
                let newuser=JSON.parse(data.toString())
                let users=JSON.parse(fs.readFileSync("./Users.json","utf-8"))
                users.push(newuser)
                // console.log(users);
                fs.writeFileSync("/Users.json", JSON.stringify(users))
            });

            res.writeHead(201,{"Content-Type": "application/json"})
            res.write({"msg":"data received"})
            res.end()
        }
    }


})

app.listen(4000, () => {

    console.log(`server started at http://localhost:4000`);


})