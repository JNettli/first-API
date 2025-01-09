import http from "http";

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.appendHeader("Access-Control-Allow-Headers", "Content-Type");
    res.appendHeader("Access-Control-Allow-Methods", "PUT");

    if (req.method === "GET") {
    switch(req.url){
        case "/test":
            res.end("This is the test path!");
            break;
        case "/hello":
            res.end("This is the hello path");
            break;
        case "/about":
            res.end("This is the about page");
                    break;
        case "/json":
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ first: "object" }));
            break;
        default:
            res.end("Hello World");
            break;
        }
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
            console.log(chunk);
        });

        req.on("end", () => {
            const data = JSON.parse(body);
            console.log(data);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        });
    } else if (req.method === "PUT") {
        res.end("From put request");
    } else {
        res.end("Oh no something is bad now.");
    }
});

server.listen(port, () => {
    console.log("Server has started on port: ", port);
});