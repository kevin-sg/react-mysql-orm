export const environmentVariables = {
  HOST_PORT: parseInt(process.env.PORT as string),
  HOST_CLIENT: process.env.HOST_CLIENT as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_DIALECT: process.env.DB_DIALECT as string,
  DB_USERNAME: process.env.DB_USERNAME as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
};
