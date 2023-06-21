import AbstractError from "./abstract-error";

export default class EnvironmentSettingError extends AbstractError {
    constructor(msg:string,code?:number) {
        if(!code) {
            code = 500;
        }
        super(msg,code);
    }
}