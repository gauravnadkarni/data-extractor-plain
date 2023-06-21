import AuthToken from "../../models/atlassian/jira/auth-token";
import IAuthService from "./i-auth-service";
import ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS from '../../constants/atlassian/jira'

export default class BasicTokenAuthService implements IAuthService {
    async getToken(): Promise<AuthToken> {
        if(!ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_ACCESS_TOKEN) {
            throw new Error("Environment variable not defined ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_ACCESS_TOKEN");
        }
        if(!ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_EMAIL_ADDRESS) {
            throw new Error("Environment variable not defined ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_EMAIL_ADDRESS");
        }
        const authToken:AuthToken = {
            email: ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_EMAIL_ADDRESS,
            token: ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_AUTH_ACCESS_TOKEN,
        };
        return authToken;
    }
}