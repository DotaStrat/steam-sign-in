SteamSignIn = {};
SteamSignIn.throwError = function (given) {
    throw _.extend(
        new Error( given.message +" "+ given.error.message ),
        { 
            response: given.error.response 
        }
    );
}