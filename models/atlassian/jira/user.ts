import GenericObject from "../../generic-object";

export default interface User {
    self: string;
    accountId: string;
    accountType:string;
    emailAddress: string;
    displayName: string;
    active: boolean;
    groups: GenericObject;
    roles: GenericObject;
}