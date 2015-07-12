Package.describe({
  name: 'cikica:steam-sign-in',
  version: '0.5.0',
  summary: 'Steam oAuth sign in the simple way.',
  git: 'https://github.com/DotaStrat/steam-sign-in.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.export("SteamSignIn");
  
  api.addFiles('module.js', ["client", "server"]);
  api.addFiles('clientServer.js', ["client", "server"]);
  api.addFiles('client.js', "client");
  api.addFiles('server.js', "server");
  api.addFiles('interface.js', ["client", "server"]);

  api.use("oauth", ["server", "client"]);
  api.use("oauth2", ["server", "client"]);
  api.use("http", ["server"]);
  api.use("check", ["server"]);
  api.use("iron:router", ["server", "client"]);
  api.use("underscore", ["server", "client"]);
});