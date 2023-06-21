import GenericObject from "./generic-object";

export default interface ErrorResponse {
    code:number,
    message:string,
    errors:GenericObject,
}