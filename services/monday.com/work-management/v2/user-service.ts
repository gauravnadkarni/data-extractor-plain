import {URL} from 'url';
import AbstractWorkManagementService from '../abstract-work-management-service';
import EnvironmentSettingError from '../../../../exceptions/env-setting-error';
import AuthToken from '../../../../models/monday.com/work-management/auth-token';
import { ApolloClient, ApolloQueryResult, createHttpLink, gql } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import GenericObject from '../../../../models/generic-object';
import IUserService from '../../i-user-service';
import User from '../../../../models/monday.com/work-management/user';
import fetch from "node-fetch";
import GraphqlQueryError from '../../../../exceptions/graphql-query-error';

export default class UserService extends AbstractWorkManagementService implements IUserService {
    private _authToken!: AuthToken;

    constructor() {
        super();
    }
        
    public setAndUseAuthToken(authToken: AuthToken):void {
        this._authToken = authToken;
        const authLink = setContext((_, { headers }) => {
            // get the authentication token from local storage if it exists
            const token = authToken.token;
            // return the headers to the context so httpLink can read them
            return {
              headers: {
                ...headers,
                Authorization: token ? `${token}` : "",
              }
            }
        });
        const url:URL = new URL('v2',this.baseUrl)

        const httpLink = createHttpLink({
            uri: url.toString(),
        });
        this.client.setLink(authLink.concat(httpLink)); 
    }

    public async me():Promise<User>  {
        try {
            const queryResponse: ApolloQueryResult<{me:User}> = await this.client.query({
                query: gql`
                    query  me {
                        name
                        email
                        id
                        enabled
                        title
                        location
                        mobile_phone
                    }
                `,
            })
            return queryResponse.data.me;
        } catch(err:any) {
            throw new GraphqlQueryError("Error while querying for me",400, err);
        }
    }

    public async getBoards():Promise<User>  {
        try {
            const queryResponse: ApolloQueryResult<{me:User}> = await this.client.query({
                query: gql`
                    query  me {
                        name
                        email
                        id
                        enabled
                        title
                        location
                        mobile_phone
                    }
                `,
            })
            return queryResponse.data.me;
        } catch(err:any) {
            throw new GraphqlQueryError("Error while querying for me",400, err);
        }
    }
}