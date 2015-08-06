Package.describe({
  name: 'mleiber:accounts-orcid',
  version: '0.0.1',
  summary: 'Meteor OAuth for ORCID',
  git: 'https://github.com/markleiber/accounts-orcid',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.use('accounts-base', ['client', 'server']);
  /* Export Accounts (etc) to packages using this one. */
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('mleiber:orcid', ['client', 'server']);

  api.addFiles('orcid_login_button.css', 'client');

  api.addFiles("orcid.js");

});
