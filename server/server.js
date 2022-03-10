const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8000, () => {
  console.log(`Server is running.`);
});

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pratice",
  password: "postgres",
  port: 5432
});

app.get("/api/list/get/:page", (req, res) => {
  const { page } = req.params;
	const perPage = 50;
	const nextNumber = page * perPage;
	const prevNumber = nextNumber - perPage + 1;

  pool.query( "SELECT * FROM list WHERE sid <= $1 and sid > $2", [ nextNumber, prevNumber ], (error, results) => {
      if (error) {
        throw error;
      }
			console.log(results.rows)
      res.send(results.rows);
    }
  );
});