Module.initateSignIn = function () {
    this.launchSignIn({
        loginUrl: this.constructOAuthUrl({
            realm: Meteor.absoluteUrl(),
            returnTo: Meteor.absoluteUrl(this.getConfiguration().returnTo)
        }),  
    });
}

Module.launchSignIn = function (given) {
    Oauth.launchLogin({
        loginUrl: given.loginUrl,
        loginService: "steam",
        loginStyle: "redirect"
    });
}

Module.constructOAuthUrl = function (given) {
    return  'https://steamcommunity.com/openid/login' +
            '?openid.ns=http://specs.openid.net/auth/2.0' +
            '&openid.mode=checkid_setup' +
            '&openid.return_to=' + given.returnTo +
            '&openid.realm=' + given.realm +
            '&openid.identity=http://specs.openid.net/auth/2.0/identifier_select' +
            '&openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select';
}