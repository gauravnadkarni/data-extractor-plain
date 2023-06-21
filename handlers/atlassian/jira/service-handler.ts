import IUserService from '../../../services/atlassian/i-user-service';
import AuthToken from '../../../models/atlassian/jira/auth-token';
import IAuthService from '../../../services/atlassian/i-auth-service';
import User from '../../../models/atlassian/jira/user';

export default class ServiceHandler {
    userService: IUserService;
    authService: IAuthService;
    constructor( 
        userService:IUserService,
        authService:IAuthService,
    ) {
        this.userService = userService;
        this.authService = authService;
    }

    public async getDataAboutSelf():Promise<User> {
        const token:AuthToken = await this.authService.getToken();
        this.userService.setAuthToken(token);
        return await this.userService.myself();
    }
}