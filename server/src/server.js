import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from "morgan";

// routers
import productRoute from "./routes/products.route.js"
import cartRoute from "./routes/cart.route.js"

const app = express();
const Port = process.env.PORT || 3000;
const origin = {
    origin: [
        "http://localhost:5173"
    ]
}

app.use(morgan('dev'));
app.use(cors(origin));
app.use(express.json());

// app.use('/', (req, res) => {
//     res.json({ message: "hello" })
// })

app.use("/products", productRoute);
app.use("/cart", cartRoute);

app.listen(Port, () => {
    console.log(`Server running on ${Port}`);
})