import { Env, LevelType } from "../enums";
import { CommonEnvVars } from "../types";

export const {
  // common
  NODE_ENV = Env.Development,
  // logs
  WRITE_LOG_FILE = false,
  LOG_AS_JSON = false,
  LOG_LEVEL = LevelType.DEBUG,
  // auth
  JWT_SECRET = "some_secret",
} = process.env as CommonEnvVars;