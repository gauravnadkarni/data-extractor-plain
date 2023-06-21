import { Request,Response,NextFunction } from "express";
import AbstractController from "../abstract-controller";
import IUserService from "../../services/monday.com/i-user-service";
import UserService from "../../services/monday.com/work-management/v2/user-service";
import IAuthService from "../../services/monday.com/i-auth-service";
import BasicTokenAuthService from "../../services/monday.com/basic-token-auth-service";
import IDataFormatter from "../../services/data-formatters/i-data-formatter";
import JsonFormatter from "../../services/data-formatters/json-formatter";
import IDataWriter from "../../services/data-writers/i-data-writer";
import FileWriter from "../../services/data-writers/file-writer";
import MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS from "../../constants/monday.com/work-management";
import WorkManagementServiceHandler from "../../handlers/monday.com/work-management/service-handler";
import User from "../../models/monday.com/work-management/user";


export default class WorkManagement extends AbstractController{
    public async pullData(req: Request, res: Response, next: NextFunction):Promise<Response> {
        const userService:IUserService = new UserService();
        const authService:IAuthService = new BasicTokenAuthService();
        const formatterService:IDataFormatter = new JsonFormatter();
        try {
            const writerService:IDataWriter = new FileWriter(MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_DATA_OUT_PATH);
            const workManagementServiceHandler:WorkManagementServiceHandler = new WorkManagementServiceHandler(userService, authService);
            const user:User =await workManagementServiceHandler.getDataAboutSelf();
            const dataString:string = formatterService.formatData(user);
            await writerService.writeData(dataString, MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_DATA_OUT_FILE_EXT ? `monday_me.${MONDAY_COM_WORK_MANAGEMENT_ENVIRONMENT_CONSTANTS.MONDAY_COM_WORK_MANAGEMENT_DATA_OUT_FILE_EXT}`:null);
            return this.formatSuccess(res,200);
        } catch (err:any) {
            return this.formatError(res,err);
        }
    }
}