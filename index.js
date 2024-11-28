import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "jackz";
const yourPassword = "IAmz";
const yourAPIKey = "d716353e-1511-446c-8573-cd874c357d49";
const yourBearerToken = "e329fcc7-7ff7-4b47-a33a-f61ff96dfd7b";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

//TODO 2: Use axios to hit up the /random endpoint
  //The data should be sent to the ejs file as "content"
  //make sure you use JSON.stringify to turn the JS object from axios into a string.
app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = JSON.stringify(response.data) ;
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {error: error.message});
  }
});
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
