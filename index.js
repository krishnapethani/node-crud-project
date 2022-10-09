const express = require('express');
const mongoose=require("mongoose");
const db =require("./db/db");
const model = require("./models/employee.model");
const routes= require("./routes/emp");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


app.use(express.static(__dirname + "/public"));



const app = express();
const PORT = 3000;
app.use(router);

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
const router = require('./routes/emp');
app.use(cors());

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
