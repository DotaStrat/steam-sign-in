var configuration;
configuration = getDefaultConfiguration();

SteamSignIn.setConfiguration = setConfiguration;
SteamSignIn.getConfiguration = getConfiguration;
SteamSignIn.getDefaultConfiguration = getDefaultConfiguration;

function setConfiguration (givenConfiguration) {

    var newConfiguration;
    newConfiguration = _.extend(getConfiguration(), givenConfiguration);
    check(newConfiguration, getConfigurationTypeDefinition());
    configuration = newConfiguration;
    this.setupAuthorization();
}

function getConfiguration () {
    return _.clone(configuration);
}

function getDefaultConfiguration () {
    return {
        apiKey: "",
        returnTo: "authorize",
        onAuthorize: null
    };
}

function getConfigurationTypeDefinition () {
    return {
        apiKey: String,
        returnTo: String,
        onAuthorize: Match.OneOf(null, Function)
    };
}