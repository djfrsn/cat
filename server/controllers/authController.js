import passport from 'passport';
import mongoose from 'mongoose';
const User = mongoose.model('User');

export const login = (
  app // Anon login
) =>
  app.get(
    '/login',
    passport.authenticate(['anonymous'], { session: true }),
    async function(req, res) {
      if (req.signedCookies.user) {
        res.redirect('/');
      } else {
        const { _id } = await new User().save();

        res.cookie(
          'user',
          { _id },
          { maxAge: 604800000, httpOnly: true, signed: true }
        );
        res.redirect('/');
      }
    }
  );
