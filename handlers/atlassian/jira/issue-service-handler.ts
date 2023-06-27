import IUserService from '../../../services/atlassian/i-user-service';
import AuthToken from '../../../models/atlassian/jira/auth-token';
import IAuthService from '../../../services/atlassian/i-auth-service';
import User from '../../../models/atlassian/jira/user';
import ServiceHandler from './service-handler';

export default class IssueServiceHandler extends ServiceHandler {
    constructor( 
        userService:IUserService,
        authService:IAuthService,
    ) {
        super(userService, authService);
    }

    async getIssuesPaginated() {

    }
}