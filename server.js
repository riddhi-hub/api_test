import express, { json } from "express"
import axios from "axios"

const app = express();
app.use(json())
const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=> console.log(`Server is running at http://localhost:${PORT}`))

app.get('/' , (req,res)=>{
    res.send(
        "SERVER IS WORKING FINE")
})


app.post('/user',(req,res)=>{
    const { name } = req.body
    async function f1(pin) {
    const res1 = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
    const data = res1.data;
    const message = data[0].Message;
    res.json({message, name});
}

f1(457226);
})
