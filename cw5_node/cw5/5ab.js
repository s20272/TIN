const http = require("http");

const host = 'localhost';
const port = 9999;

const requestListener = function (req, res) {
    switch (req.url) {
        case "/students":
            prepareMakeStudentsResponse(res)
            break
        case "/error":
            prepareErrorResponse(res);
            break
        default :
            prepareDefaultResponse(res)
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Started on http://${host}:${port}`);
});

function prepareMakeStudentsResponse(res) {
    res.writeHead(200)
    res.end(JSON.stringify(makeStudents()))
}

function makeStudents() {
    return [new Student("John", "Doe", "s123456"),
        new Student("John", "Wick", "s987654")]
}

function prepareErrorResponse(res) {
    res.writeHead(500);
    res.end("Something goes wrong...");
}

function prepareDefaultResponse(res) {
    res.writeHead(200);
    res.end("Hello node.js!");
}

function Student(firstName, lastName, index) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.index = index;
}
