export default interface IDataWriter {
    writeData(data:any, name?:string | null):Promise<void>;
}