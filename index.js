const express = require('express');
const config = require('config');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');


const PORT = config.get('port') || 5555;

const app = express();

app.listen(PORT, () => console.log(`server started on PORT ${PORT}...`));

app.use(express.json()); //чтобы экспресс понимал json


app.use('/api', userRouter);
app.use('/api', postRouter);