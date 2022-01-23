require('dotenv').config();
const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const connect = require('./config/db');
const path = require('path');
const session = require("express-session")
const flash = require("express-flash")


app.use(express.json());
app.set('view engine', 'ejs');

const itemSchema = require('./models/items.schema');
const itemCont = require('./controller/items.cont');
const frontpageCont = require('./controller/frontPage.cont');

app.use(session({
    secret:process.env.COOKIES_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60*24}

}))

app.use(flash())

app.use(favicon(path.join(__dirname, 'public', 'images', 'fav.png')));
app.use(express.static(__dirname + '/public'));
app.use(path.join(__dirname + '/uploads'), express.static(__dirname + '/uploads'));
app.use("/item",itemSchema)


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});
app.get('/signIn', (req, res) => {
    res.render('signIn');
});
app.use("/products",itemCont)
app.use("/productPage",frontpageCont)



app.use(function (req, res, next) {
    res.status(404).render('notFound');
});


const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, async () => {
        await connect();

        console.log(`Listening on port ${port}`);
    });
}

module.exports = start;