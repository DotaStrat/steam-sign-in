Module.setupAuthorization = function () {
    try {
        this.setupAuthorizationRoute();
        return true;
    } catch (error) {
        return false;
    }
}

Module.setupAuthorizationRoute = function () {
    Router.route(
        this.getConfiguration().returnTo, 
        function () {
            Module.getConfiguration().onAuthorize.call(
                {},
                Module.getUser(Module.getSteamIdFromQuery(this.params.query))
            );
            this.response.writeHead(301, {
                "Location": Meteor.absoluteUrl()
            });
            this.response.end();
        }, 
        { 
            where: "server" 
        }
    );
}

Module.getSteamIdFromQuery = function (query) {
    return this.getSteamIdFromUrl(query["openid.claimed_id"]);
}

Module.getSteamIdFromUrl = function (url) {
    return _.last(url.split("/"));
}

Module.getUser = function (userId) {
    try {
        return this.getUserIdentity(userId);
    } catch (error) {
        this.throwError({
            message: "Can not get steam user.",
            error: error
        });
    }
}

Module.getUserIdentity = function (userId) {
    var response = this.requestUserIdentityFromSteam(userId);
    return _.first(response.data.response.players);
}

Module.requestUserIdentityFromSteam = function (userId) {
    return HTTP.get(
        "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
        {
            params: {
                key: this.getConfiguration().apiKey,
                steamids: userId
            }
        }
    );
}