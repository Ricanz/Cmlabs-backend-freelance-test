const express = require('express'); 
const app = express();              
const port = 3000;

const fizzbuzzController =require('./fizzbuzz-test')
const palindromeontroller =require('./palindrome-test')

app.use("/fizzbuzz", fizzbuzzController)
app.use("/palindrome", palindromeontroller)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});