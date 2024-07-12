const express = require('express');
const app = express();

const PORT = 5500;

// Middleware
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/ContactUs.html')
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
