const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", (req, res) => {
      // Successful authentication, redirect home.
      res.send("successfull authenticated");
    })
  );
};
