# RxJs Http Server Test

**This was a test to create an RxJs Observable server, it is incomplete!**

## Description

The original idea for this was to create a fluent api requiring little of the user to get started, a desired API would like like the following:

```
const server = http.createServer().listen(8000);
const rxServer = new RxHttpServer(server);
const endpoint = rxServer
.filter((req) => req.url === 'user')
.map(req => req.body)
.map(() => ({
    status: 400,
    body: {},
    headers: {}
}))
```

Unfortunately I couldn't find a simple way without requiring the developer to pass down the response object.

### **TBD.**
