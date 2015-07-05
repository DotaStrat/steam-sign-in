SteamSignIn.getUser = getUser;
SteamSignIn.setupAuthorization = setupAuthorization;

function setupAuthorization () {
    try {
        setupAuthorizationRoute();
        return true;
    } catch (error) {
        return false;
    }
}

function setupAuthorizationRoute () {
    Router.route(
        SteamSignIn.getConfiguration().returnTo, 
        function () {
            SteamSignIn.getConfiguration().onAuthorize.call(
                {},
                SteamSignIn.getUser(getSteamIdFromQuery(this.params.query))
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

function getSteamIdFromQuery (query) {
    return getSteamIdFromUrl(query["openid.claimed_id"]);
}

function getSteamIdFromUrl (url) {
    return _.last(url.split("/"));
}

function getUser (userId) {
    try {
        return getUserIdentity(userId);
    } catch (error) {
        this.throwError({
            message: "Can not get steam user.",
            error: error
        });
    }
}

function getUserIdentity (userId) {
    var response = requestUserIdentityFromSteam(userId);
    return _.first(response.data.response.players);
}

function requestUserIdentityFromSteam (userId) {
    return HTTP.get(
        "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
        {
            params: {
                key: SteamSignIn.getConfiguration().apiKey,
                steamids: userId
            }
        }
    );
}