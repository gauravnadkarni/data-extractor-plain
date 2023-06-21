import {Request, Response} from 'express';
import GenericObject from "../models/generic-object";
import SuccessResponse from '../models/success-response';
import ErrorResponse from '../models/error-response';
import AbstractError from '../exceptions/abstract-error';
import EnvironmentSettingError from '../exceptions/env-setting-error';
import GraphqlQueryError from '../exceptions/graphql-query-error';

export default class AbstractController {
    constructor() {

    }

    private getErrorObject(error?:Error, payload?:any): {
        message:string,
        errors: {
            message:string,
            payload:any,
        },
        code: number,
    } {
        const defaultErrorObject: {
            message:string,
            errors: {
                message:string,
                payload:any,
            },
            code: number,
        } = {
            message: "Error Occurred",
            errors: {
                message:"",
                payload:{},
            },
            code: 500,
        }
        if(!error || !(error instanceof AbstractError)) {
            return {...defaultErrorObject, errors: {message: error?error.message:'',payload:defaultErrorObject.errors.payload}};
        }
        const {code, message} = error

        if(error instanceof GraphqlQueryError) {
            return {
                message: "Error Occurred",
                errors: {
                    message:message,
                    payload:error.getErrorPayload(),
                },
                code: ((!code || code===-1) ? 500 : code),
            }
        } else if(error instanceof AbstractError) {
            return {
                message: "Error Occurred",
                errors: {
                    message:message,
                    payload,
                },
                code: ((!code || code===-1) ? 500 : code),
            }
        }
        return defaultErrorObject;
    }

    protected formatSuccess(res: Response, code:number, payload?:any): Response {
        const response:SuccessResponse = {
            code,
            message: "success",
            data:payload,
        }
        res.status(code);
        res.json(response);
        return res;
    }

    protected formatError(res: Response, error?: Error, payload?:any): Response {
        const errorObject: {
            message:string,
            errors: {
                message:string,
                payload:any,
            },
            code: number,
        } | null = this.getErrorObject(error,payload);
        res.status(errorObject.code);
        res.json(errorObject);
        return res;
    }
}