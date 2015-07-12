Module.getConfigurationTypeDefinition = function () {
    return {
        apiKey: String,
        returnTo: String,
        onAuthorize: Match.OneOf(null, Function)
    };
}

Module.getDefaultConfiguration = function () {
    return {
        apiKey: "",
        returnTo: "authorize",
        onAuthorize: null
    };
}

Module.configuration = Module.getDefaultConfiguration();

Module.setConfiguration = function (givenConfiguration) {

    var newConfiguration;
    newConfiguration = _.extend(this.getConfiguration(), givenConfiguration);
    check(newConfiguration, this.getConfigurationTypeDefinition());
    this.configuration = newConfiguration;
    this.setupAuthorization();
}

Module.getConfiguration = function () {
    return _.clone(this.configuration);
}

Module.throwError = function (given) {
    throw _.extend(
        new Error( given.message +" "+ given.error.message ),
        { 
            response: given.error.response 
        }
    );
}