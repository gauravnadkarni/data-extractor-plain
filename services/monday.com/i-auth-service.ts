import AuthToken from "../../models/monday.com/work-management/auth-token";

export default interface IAuthService {
    getToken(): Promise<AuthToken>;
}