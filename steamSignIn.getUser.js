SteamSignIn.getUser = function (given) {

    try {

        var response = this.requestUserIdentityFromSteam({
            query: given.query
        });
        return _.first(response.data.response.players);

    } catch (error) {
        this.throwError({
            message: "Can not get steam user.",
            error: error
        });
    }
}

SteamSignIn.requestUserIdentityFromSteam = function (given) {
    return HTTP.get(
        "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
        {
            params: {
                key: this.configuration.apiKey,
                steamids: this.getSteamIdFromQuery(given.query)
            }
        }
    );
}

SteamSignIn.getSteamIdFromQuery = function (query) {
    return this.getSteamIdFromUrl(query["openid.claimed_id"]);
}

SteamSignIn.getSteamIdFromUrl = function (url) {
    return _.last(url.split("/"));
}