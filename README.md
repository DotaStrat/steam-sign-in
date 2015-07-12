# SteamSignIn

*Simple Steam Sign In*

Set your api key and what you want to do with the user data when they signed up. Then just fire the initateSignIn method to take them through the sign in.

```javascript
SteamSignIn.setConfiguration({
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    onAuthorize: function (user) {
        console.log("OHOY THAR");
        console.log(user);
    }
});

if ( Meteor.isClient() ) {
    Template.loginPage.events({
        "click .steam-login-button": function () {
            SteamSignIn.initateSignIn();
        }
    });
}
```

### Api

**Exposes:** SteamSignIn (object)

**Depends:** oauth, oauth2, http, check, iron:router, underscore

#### SteamSignIn.setConfiguration

*Client, Server*

```javascript
SteamSignIn.setConfiguration({
    // Youre steam api key
    apiKey: String,
    // method to call when the user sign in is authorized
    onAuthorize: function (user) {
        // steam api user object
        console.log(user)
    },
    // url to return to, which is appended at the end of the Meteor.absoluteUr
    returnTo: String || "authorize"
})
```

#### SteamSignIn.getConfiguration

*Client, Server*

Get your configuration

```javascript
SteamSignIn.getConfiguration()
// => { apiKey: "", .... }
```

#### SteamSignIn.initiateSignIn

*Client*

Takes user to the steam login page.

```javascript
SteamSignIn.initiateSignIn();
```