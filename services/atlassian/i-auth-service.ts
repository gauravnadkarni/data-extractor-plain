import AuthToken from "../../models/atlassian/jira/auth-token";

export default interface IAuthService {
    getToken(): Promise<AuthToken>;
}