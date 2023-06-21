import { ApolloError, GraphQLErrors } from "@apollo/client/errors";
import AbstractError from "./abstract-error";

export default class GraphqlQueryError extends AbstractError {
    private _error:ApolloError;

    constructor(msg:string,code:number,error:ApolloError) {
        super(msg,code);
        this._error = error;
    }

    getErrorPayload() {
        const { 
            graphQLErrors,
            protocolErrors,
            clientErrors,
            networkError,
            extraInfo,
        } = this._error;
        return { 
            graphQLErrors,
            protocolErrors,
            clientErrors,
            networkError,
            extraInfo,
        };
    }

    getErrorObject() {
        return this._error
    }
}