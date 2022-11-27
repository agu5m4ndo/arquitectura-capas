const path = require('path');
const { loggerConsole } = require('./middleware/logger')

const mainHtml = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    loggerConsole.info(`${req.originalUrl} ${req.method}`);
}

module.exports = { mainHtml };