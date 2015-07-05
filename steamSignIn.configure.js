SteamSignIn.configuration = {
    apiKey: "",
    returnTo: "authorize"
};

SteamSignIn.configure = function (configuration) {
    
    var newConfiguration;

    newConfiguration = this.mergeNewConfigurationToOldWithoutReference(configuration);
    check(newConfiguration, getConfigurationTypeDefinition());
    this.configuration = newConfiguration;
}

SteamSignIn.mergeNewConfigurationToOldWithoutReference = function (configuration) {
    return _.extend(
        _.clone(this.configuration),
        configuration
    );
}

function getConfigurationTypeDefinition () {
    return {
        apiKey: String,
        returnTo: String
    };
}