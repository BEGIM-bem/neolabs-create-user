const express = require('express');
const mongoose = require('mongoose');

const { router } = require('./routes');

const app = express();

app.use(express.json());

app.use(router);

const PORT = 5050;
const DB_ADDRESS = "mongodb+srv://begimay:Bilimbek@cluster0.deub7.mongodb.net/education?retryWrites=true&w=majority"
async function startBackend() {
    await mongoose.connect(DB_ADDRESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    });

    console.log('Подключение к базе данных завершено!');

    app.listen(PORT, () => {
        console.log('Приложение запущено на порту: ', PORT);
    });
}

startBackend();


