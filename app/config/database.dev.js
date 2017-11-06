/**
 * Development config
 */
module.exports = {
    environment: 'development',
    uri: 'mongodb://localhost:27017/GPSuivieFact',
    options: { useMongoClient: true },
    db: 'GP-Suivie-Fact',
    favicon_path: 'client/src',
    favicon: 'favicon.ico',
    cors_origin: { origin: 'http://localhost:4200' },
    static_path: 'dist',
    static_file: 'index.html'
};