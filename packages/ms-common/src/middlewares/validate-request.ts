import { RequestHandler } from "express";
import Joi, { ValidationError } from "joi";

import { BadRequestError, RequestValidationError } from "../errors";

enum ReqAttr {
  BODY = "body",
  PARAMS = "params",
  QUERY = "query",
}

// TODO: don't like this solution but I don't want env nested in packages so
// that a work around for now
const validateRequest =
  (requestAttribute: ReqAttr, schema: Joi.ObjectSchema<unknown>): RequestHandler =>
  async (req, _res, next) => {
    try {
      // eslint-disable-next-line security/detect-object-injection
      const validated = await schema.validateAsync(req[requestAttribute], {
        stripUnknown: true,
      });
      // eslint-disable-next-line security/detect-object-injection
      req[requestAttribute] = validated;
      next();
    } catch (err) {
      if (err instanceof BadRequestError) {
        return next(err);
      } else if ((err as ValidationError).isJoi) {
        return next(new RequestValidationError(err as ValidationError));
      }

      next(err);
    }
  };

export { ReqAttr, validateRequest };
