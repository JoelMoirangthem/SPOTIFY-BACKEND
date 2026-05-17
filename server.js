const app = require('./src/app');
const connectDB = require('./src/db/db');
connectDB();
app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(3000,()=>{
    console.log("server is running at the server of 3000");
})