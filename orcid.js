Accounts.oauth.registerService('orcid');

if (Meteor.isClient) {
    Meteor.loginWithOrcid = function(options, callback) {
    /* support a callback without options */
    if (!callback && typeof options === "function") {
            callback = options;
            options = null;
        }

        var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
        ORCID.requestCredential(options, credentialRequestCompleteCallback);
    };
} else {
    Accounts.addAutopublishFields({
   forLoggedInUser: ['services.orcid']
    });
}
