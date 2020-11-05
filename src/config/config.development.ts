export default () => {
  return {
    port: parseInt(process.env.NEST_PORT) || 9878,
    database: {
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT, 10) || 27017,
      db: process.env.MONGO_DB,
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PWD,
    }
  };
}
