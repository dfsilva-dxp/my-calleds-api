module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f3abc7c504b2709b6e442a3de061f2a7'),
  },
});
