import { Request,Response,NextFunction } from "express";
import BasicTokenAuthService from "../../services/atlassian/basic-token-auth-service";
import IAuthService from "../../services/atlassian/i-auth-service";
import IUserService from "../../services/atlassian/i-user-service";
import UserService from "../../services/atlassian/jira/v2/user-service";
import AtlassianServiceHandler from '../../handlers/atlassian/jira/service-handler';
import User from "../../models/atlassian/jira/user";
import IDataFormatter from "../../services/data-formatters/i-data-formatter";
import JsonFormatter from "../../services/data-formatters/json-formatter";
import IDataWriter from "../../services/data-writers/i-data-writer";
import FileWriter from "../../services/data-writers/file-writer";
import ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS from '../../constants/atlassian/jira'
import AbstractController from "../abstract-controller";


export default class Jira extends AbstractController{
    public async pullData(req: Request, res: Response, next: NextFunction):Promise<Response> {
        const userService:IUserService = new UserService();
        const authService:IAuthService = new BasicTokenAuthService();
        const formatterService:IDataFormatter = new JsonFormatter();
        try {
            const writerService:IDataWriter = new FileWriter(ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_DATA_OUT_PATH);
            const atlassianServiceHandler:AtlassianServiceHandler = new AtlassianServiceHandler(userService, authService);
            const user:User = await atlassianServiceHandler.getDataAboutSelf();
            const dataString:string = formatterService.formatData(user);
            await writerService.writeData(dataString, ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_DATA_OUT_FILE_EXT ? `jira_me.${ATLASSIAN_JIRA_ENVIRONMENT_CONSTANTS.ATLASSIAN_JIRA_DATA_OUT_FILE_EXT}`:null);
            return this.formatSuccess(res,200);
        } catch (err:any) {
            return this.formatError(res, err);
        }
    }
}