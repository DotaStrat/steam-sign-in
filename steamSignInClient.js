SteamSignIn.initateSignIn = function () {
    launchSignIn({
        loginUrl: constructOAuthUrl({
            realm: Meteor.absoluteUrl(),
            returnTo: Meteor.absoluteUrl(this.getConfiguration().returnTo)
        }),  
    })
};

function launchSignIn (given) {
    Oauth.launchLogin({
        loginUrl: given.loginUrl,
        loginService: "steam",
        loginStyle: "redirect"
    });
}

function constructOAuthUrl (given) {
    return  'https://steamcommunity.com/openid/login' +
            '?openid.ns=http://specs.openid.net/auth/2.0' +
            '&openid.mode=checkid_setup' +
            '&openid.return_to=' + given.returnTo +
            '&openid.realm=' + given.realm +
            '&openid.identity=http://specs.openid.net/auth/2.0/identifier_select' +
            '&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select';
}