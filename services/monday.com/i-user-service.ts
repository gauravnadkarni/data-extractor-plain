import AuthToken from "../../models/monday.com/work-management/auth-token";
import User from "../../models/monday.com/work-management/user";

export default interface IUserService {
    setAndUseAuthToken(authToken: AuthToken):void;
    me(): Promise<User>;
}