import GenericObject from "./generic-object";

export default interface SuccessResponse {
    code:number,
    message:string,
    data:GenericObject,
}