import AuthToken from "../../models/atlassian/jira/auth-token";
import User from "../../models/atlassian/jira/user";

export default interface IUserService {
    setAuthToken(authToken: AuthToken):void;
    myself(): Promise<User>;
}