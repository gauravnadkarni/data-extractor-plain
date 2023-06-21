import IUserService from '../../../services/monday.com/i-user-service';
import AuthToken from '../../../models/monday.com/work-management/auth-token';
import IAuthService from '../../../services/monday.com/i-auth-service';
import User from '../../../models/monday.com/work-management/user';

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
        this.userService.setAndUseAuthToken(token);
        return await this.userService.me();
    }
}