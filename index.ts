import { RxHttpServer } from './lib/rx-http-server';
import * as http from "http";

console.log('Listening.');

const server = http.createServer().listen(8000);

const rxServer = new RxHttpServer(server);

const obs = rxServer
.filter((req) => req.url === 'user')
.map(req => req.body)
.map(() => ({
    status: 400,
    body: {},
    headers: {}
}))


obs.subscribe((data) => {
    response.write(data.status);
})

