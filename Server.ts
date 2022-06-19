import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Server is running.'));

app.use('/api', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('API listening on port 3000'));

export default app;

