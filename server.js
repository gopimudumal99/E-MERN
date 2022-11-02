const app = require("./src/app");
const dotenv = require("dotenv")

// given .env file path to dotenv
dotenv.config({path:'./src/configs/config.env'});


// Listen the PORT
app.listen(process.env.PORT, () => {
  console.log(`Listing on port http://localhost:${process.env.PORT}`);
});
