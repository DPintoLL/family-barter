// server/middleware/authenticate.js

/**
 * Checks user's credentials.
 * @param {object} users
 */
const authenticate = (db) => {
  return (req, res, next) => {
    req.user = null;
    req.errors = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      view: null,
    };

    if (req.session.user_id) {
      authFromCookie(req, db);
    } else if (req.originalUrl === "/login" && req.method === "POST") {
      authFromLogin(req, db);
    } else if (req.originalUrl === "/register" && req.method === "POST") {
      authFromRegistration(req, db);
    }

    next();
  };
};

/**
 * Verifies a user's id from their cookie.
 * @param {object} req - request object
 * @param {object} db - database connection
 */
const authFromCookie = (req, db) => {
  const userID = req.session.user_id;
  const user = db.users.getByID(userID);

  if (user) {
    req.user = user;
  }

  return;
};

/**
 * Verifies a user's login credentials.
 * @param {object} req - request object
 * @param {object} db - database connection
 */
const authFromLogin = (req, db) => {
  const user = db.users.getByEmail(req.body.email);

  if (!req.body.email) {
    req.errors.email = "please enter an email address";
  } else if (!req.body.password) {
    req.errors.password = "please enter a password";
  } else if (user && db.user.confirmPassword(req.body.password)) {
    req.session.user_id = user.id;
    req.user = user;
  } else {
    req.errors.password = "No account found for that email and password";
  }
  return;
};

/**
 * Confirms a user's email and password when registering.
 * @param {object} req - request object
 * @param {object} db - database connection
 */
const authFromRegistration = (req, db) => {
  req.errors.firstName = !req.body.firstName
    ? "please enter a first name"
    : null;
  req.errors.lastName = !req.body.lastName ? "please enter a last name" : null;
  req.errors.email = req.body.email
    ? db.users.emailInUse(req.body.email)
      ? "email already in use"
      : null
    : "please enter an email address";
  req.errors.password = !req.body.password ? "please enter a password" : null;

  if (Object.values(req.errors).every((err) => err === null)) {
    const user = db.users.add(req.body);
    req.session.user_id = user.id;
    req.user = user;
  }
  return;
};

module.exports = { authenticate };
