const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;


// -------------- End Of Imports ------------------- //

// --- Middleware --- //


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });



// --- End of Middleware --- //


app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  