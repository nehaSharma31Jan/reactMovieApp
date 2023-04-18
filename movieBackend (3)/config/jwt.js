module.exports = {
    secret: process.env.JWT_SECRET || 'secretkey',
    expiresIn: '7d'
  };
  