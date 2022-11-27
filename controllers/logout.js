const path = require('path');
const { loggerConsole } = require('./middleware/logger')

const logoutView = (req, res) => {
    setTimeout(() => {
        req.session.destroy();
    }, 3000);
    loggerConsole.info(`${req.originalUrl} ${req.method}`);
    res.sendFile(path.join(__dirname, '..', 'public', 'logout.html'))
}

module.exports = {
    logoutView
}