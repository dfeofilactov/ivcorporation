const express = require('express');
const path = require('path');
const logger = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();
const router = express.Router();

router.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, './docs') }));

app.use(logger('dev'));
app.use('/', router);
app.use(express.static(path.join(__dirname, './docs', '/')));

app.listen(PORT, () => {
    console.log(`IV Corp listening on port: ${ PORT }!`);
});
