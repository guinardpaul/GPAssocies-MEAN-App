/**
 * Production config
 */
module.exports = {
  environment: 'production',
  uri: 'mongodb://admin:admin@ds151024.mlab.com:51024/gp-suivi-fact',
  options: { useMongoClient: true },
  db: 'GP-Suivie-Fact',
  favicon_path: 'dist',
  favicon: 'favicon.ico',
  cors_origin: { origin: 'http://gp-suivifact.herokuapp.com/' }, // Changer adresse quand définie
  static_path: 'dist',
  static_file: 'index.html'
};