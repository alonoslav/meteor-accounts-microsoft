Package.describe({
  name: 'jss:accounts-microsoft',
  version: '1.0.1',
  summary: 'A login service for Microsoft accounts.',
  git: 'https://github.com/alonoslav/meteor-accounts-microsoft',
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');

  api.use('underscore');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('q42:microsoft@1.0.1', ['client', 'server']);

  api.addFiles(['client/login.js', 'client/login_button.css'], 'client');
  api.addFiles('lib/register.js');
  api.addFiles('server/autopublish.js', 'server');
});
