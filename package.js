Package.describe({
  name: 'mleiber:accounts-orcid',
  version: '0.0.2',
  summary: 'Meteor OAuth for ORCID',
  git: 'https://github.com/markleiber/accounts-orcid',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('accounts-base', ['client', 'server']);
  /* Export Accounts (etc) to packages using this one. */
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('mleiber:orcid@0.0.2', ['client', 'server']);

  api.addFiles('orcid_login_button.css', 'client');

  api.addFiles("orcid.js");

});
