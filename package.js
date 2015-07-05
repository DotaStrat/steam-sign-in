Package.describe({
  name: 'cikica:steam-sign-in',
  version: '0.0.1',
  summary: 'Steam oAuth sign in the simple way.',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.export("SteamSignIn");
  
  api.addFiles('steamSignIn.js', ["client", "server"]);
  api.addFiles('steamSignIn.configure.js', ["client", "server"]);
  api.addFiles('steamSignIn.initateSignIn.js', ["client"]);
  api.addFiles('steamSignIn.getUser.js', ["server"]);

  api.use("oauth", ["server", "client"]);
  api.use("oauth2", ["server", "client"]);
  api.use("http", ["server"]);
  api.use("check", ["server"]);
});