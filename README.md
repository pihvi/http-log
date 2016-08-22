## http-log
Receive http requests and print request info i.e. a http debug server.

### Installing
```bash
npm install -g http-log
```

### Start with default parameters
```bash
http-log
```
Starts http server at port 7777 and prints request info and responds with empty response and status code 200.


### Start with all configurable parameters
```bash
http-log 8888 404 "Not found"
```
Starts http server at port 8888 and prints request info and responds with "Not found" and status code 404.
