const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;


// -------------- End Of Imports ------------------- //

// --- Middleware --- //

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
 });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// --- End of Middleware --- //


app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  