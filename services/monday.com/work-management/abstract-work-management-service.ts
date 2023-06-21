import { ApolloClient, InMemoryCache, NormalizedCacheObject, createHttpLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS from '../../../constants/monday.com/work-management';

export default class AbstractWorkManagementService {
    private _baseUrl:string;
    private _qlClient:ApolloClient<NormalizedCacheObject>;

    constructor() {
        if(!MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_BASE_URL) {
            throw new Error("Environment variable not defined MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_BASE_URL");
        }
        this._baseUrl = MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_BASE_URL;

        this._qlClient = new ApolloClient({
            cache: new InMemoryCache(),
        });
    }

    public get baseUrl() {
        return this._baseUrl;
    }

    public get client() {
        return this._qlClient;
    }
    
}