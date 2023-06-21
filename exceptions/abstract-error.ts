export default class AbstractError extends Error {
    private _code:number
    constructor(message:string,code:number) {
        super(message)
        this._code = code
    }

    get code() {
        return this._code
    }
}