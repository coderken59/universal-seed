import * as normalizePort from 'normalize-port';
import * as app from './app';

const port = normalizePort(process.env.PORT) || 8080;
const baseUrl = `http://localhost:${port}`;

app.set('port', port);

app.listen(port, () => {
    console.log(`Universal server listening at ${baseUrl}`);
});
