const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientKey,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      //TODO: Database stuff here
    }
  )
);
