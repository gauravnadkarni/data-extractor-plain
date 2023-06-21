import AuthToken from "../../../../models/atlassian/jira/auth-token";
import User from "../../../../models/atlassian/jira/user";
import IUserService from "../../i-user-service";

export default class UserService implements IUserService{
    private _authToken!: AuthToken;
    
    public setAuthToken(authToken: AuthToken) {
        this._authToken = authToken;
    }

    public async myself(): Promise<User> {
        throw new Error("Method not implemented.");
    }
}