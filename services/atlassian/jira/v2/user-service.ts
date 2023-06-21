import {URL} from 'url';
import AuthToken from "../../../../models/atlassian/jira/auth-token";
import User from "../../../../models/atlassian/jira/user";
import IUserService from "../../i-user-service";
import HttpHandler from '../../../../utilities/http-handler';
import { AxiosResponse } from "axios";
import AbstractJiraServiceForV2 from "./abstract-jira-service";
import { getBas64EncodedString } from '../../../../utilities';

export default class UserService extends AbstractJiraServiceForV2 implements IUserService {
    private _authToken!: AuthToken;
    
    private _buildBasicAuthHeader(uid:string, passCode:string) {
        return { "Authorization": "Basic "+getBas64EncodedString(`${uid}:${passCode}`)}
    }

    public setAuthToken(authToken: AuthToken) {
        this._authToken = authToken;
    }

    public async myself():Promise<User>  {
        const path:string = this.getRestBaseUrl().pathname.concat("/myself");
        const url:URL = new URL(path,this.getRestBaseUrl());
        const response:AxiosResponse<User> = await HttpHandler.genericRequest<User>({
            method:"get",
            url:url.toString(),
            headers: this._buildBasicAuthHeader(this._authToken.email,this._authToken.token),
        });
        return response.data;
    }
}