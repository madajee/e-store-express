module.exports = {
  port: 3000,
  jwtSecret: '!!CryptoCat@!!',
  jwtExpirationInSeconds: 60 * 60, // 1 hour
  roles: {
    USER: 'user',
    ADMIN: 'admin'
  },
  productPriceUnits: {
    DOLLAR: 'dollar',
    EURO: 'euro',
    INR: 'inr'
  },
  HOST: "localhost",
  USER: "mulejohn",
  PASSWORD: "mulejohn",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dockerize: {
    HOST: "db",
    USER: "postgres",
    PASSWORD: "password",
    DB: "testdb",
  },
  amqpqueues: {
    HOST: "localhost",
    PORT: "5672"
  },
  ff: {
    amqpqueues: false
  },
  events: {
    CHANGEROLE: "changerole"
  }
}
