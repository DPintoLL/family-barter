// server/middleware/authenticate.js

/**
 * Checks user's credentials.
 * @param {object} db - database connection
 */
const authenticate = (db) => {
  // BUG: User remains undefined
  return (req, res, next) => {
    if (req.session.user_id) {
      db.users.getByID(req.session.user_id).then((user) => {
        req.user = user ? user : null;
        next();
      });
    } else {
      db.users.getByID(1).then((user) => {
        // temporary
        req.user = user;
        next();
      });
    }
  };
};

module.exports = { authenticate };
