const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://admin:admin@ds151024.mlab.com:51024/gp-suivi-fact',
    secret: crypto,
    db: 'GP-Suivie-Fact'
};