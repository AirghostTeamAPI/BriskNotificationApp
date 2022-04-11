import bodyParser from "body-parser";
import express from "express";
import connectDB from "../config/database";
import { importCsvFile } from './scripts/FOL';
import { importUserCsvFile } from './scripts/User';

import FOL from './routes/api/FOL';

const app = express();

connectDB();

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", FOL);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

importCsvFile()
importUserCsvFile()
setInterval(function () {
  console.log('Syncing FOLs...');
  importCsvFile()
  importUserCsvFile()
}, 60 * 5000); // 60 * 1000 milsec

export default server;
