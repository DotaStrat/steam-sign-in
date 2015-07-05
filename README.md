# SteamSignIn

**Simple Steam Sign In**

*Exposes:* SteamSignIn (object)
*Depends:* 

#### SteamSignIn.setConfiguration

**Client, Server**

```javascript
SteamSignIn.setConfiguration({
    // Youre steam api key
    apiKey: String,
    // url to return to, which is appended at the end of the Meteor.absoluteUr
    returnTo: String || "authorize"
})
```

#### SteamSignIn.getConfiguration

**Client, Server**

Get your configuration

```javascript
SteamSignIn.getConfiguration()
// => { apiKey: "", .... }
```

#### SteamSignIn.getDefaultConfiguration

**Client, Server**

The default configuration.

```javascript
SteamSignIn.getDefaultConfiguration()
// => { apiKey: "", .... }
```

#### SteamSignIn.initiateSignIn

**Client**

Takes user to the steam login page.

```javascript
SteamSignIn.initiateSignIn();
```