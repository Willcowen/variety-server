const shoesRouter = require("./src/routes/shoes.js")

//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.use('/shoes', shoesRouter)

//Start up our server
const port = process.env.PORT || 4000;
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
