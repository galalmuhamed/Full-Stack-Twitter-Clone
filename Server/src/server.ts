import express from 'express';
import config from './config/config';
import bodyParser from 'body-parser';
import route from './routes/server';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = (config.PORT as unknown as number) || 8080;

app.use('/', route);

app.listen(port, () => {
	console.log(`server lestion to http://localhost:${port}`);
});
