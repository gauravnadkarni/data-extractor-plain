import AuthToken from "../../models/monday.com/work-management/auth-token";
import IAuthService from "../monday.com/i-auth-service";
import MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS from '../../constants/monday.com/work-management'

export default class BasicTokenAuthService implements IAuthService {
    async getToken(): Promise<AuthToken> {
        if(!MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_AUTH_ACCESS_TOKEN) {
            throw new Error("Environment variable not defined MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_AUTH_ACCESS_TOKEN");
        }
        const authToken:AuthToken = {
            token: MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_AUTH_ACCESS_TOKEN,
        };
        return authToken;
    }
}