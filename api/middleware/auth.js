const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, 'mini-bus');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Authorization Denied',
    });
  }
}

module.exports = auth;