# SteamSignIn

**Simple Steam Sign In**

*Exposes:* SteamSignIn (object)

#### SteamSignIn.configure

*Avaliable:* Client, Server

```javascript
SteamSignIn.configure({
    // Youre steam api key
    apiKey: String,
    // url to return to, which is appended at the end of the Meteor.absoluteUr
    returnTo: String || "authorize"
})
```

#### SteamSignIn.initiateSignIn

*Avaliable:* Client

Takes user to the steam login page.

```javascript
SteamSignIn.initiateSignIn();
```