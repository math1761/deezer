const express = require('express')
const app = express()
const port = 4280
const cors = require('cors');
const notificationsJson = require('./notifications.json');

app.use(cors({
    allowedHeaders: '*',
    origin: '*'
}));

app.use(express.json());

const pagination = (array, page_size, page_number) =>
    array.slice((page_number - 1) * page_size, page_number * page_size);

app.get('/', (req, res) => {
    const pageSize = req.query.pageSize;
    const pageNumber = req.query.pageNumber;

    res.json({
        pageSize,
        pageNumber,
        count: notificationsJson.notifications.length,
        notifications: pagination(notificationsJson.notifications, pageSize, pageNumber)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});