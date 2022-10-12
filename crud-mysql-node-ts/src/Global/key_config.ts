// *******************************************************
// *               Socket Event Key                      *
// *******************************************************

export enum EnumHttpStatusCodes {
  OK = 200,
  CREATE = 201,
  BAD_REQUEST = 400,
  UNAUTHOTIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500,
}

export enum EnumHttpStatusMessages {
  OK = "Everything worked as expected.",
  CREATE = "Successful creation occurred.",
  BAD_REQUEST = "The request was unacceptable, often due to missing a required parameter.",
  UNAUTHOTIZED = "No valid API key provided.",
  NOT_FOUND = "The requested resource doesn't exist.",
  INTERNAL_SERVER = "Something went wrong.",
}

// *******************************************************
// *               Entity Key                            *
// *******************************************************

export enum EnumEntityKey {
  USER = "user",
}

// *******************************************************
// *               Path Router v1                        *
// *******************************************************

export enum EnumPathRoute {
  USER = "/api/user",
}
