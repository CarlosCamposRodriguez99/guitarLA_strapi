module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST'),
        srv: env.bool('DATABASE_SRV'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'guitarla_strapi'),
        username: env('DATABASE_USERNAME', 'lacr'),
        password: env('DATABASE_PASSWORD', '261200'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
