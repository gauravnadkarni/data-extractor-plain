import Path from 'path';
import fs,{promises as fsPromise} from 'fs';
import IDataWriter from "./i-data-writer";

export default class FileWriter implements IDataWriter {
    private _path:string | null = null;

    constructor(path:string | null) {
        this._path = path;
    }

    set path(path:string | null) {
        this._path = path
    }

    get path() {
        return this._path;
    }

    async writeData(data: any, name?:string | null): Promise<void> {
        if(!this._path) {
            throw new Error("Path of the output file not set")
        }
        if(fs.existsSync(this._path) === false) {
            throw new Error("Path doesn't exists")
        }
        const filePath:string = Path.resolve(Path.join(this._path,name?name:'file.txt'));
        const writableStream: fs.WriteStream = fs.createWriteStream(filePath);
        writableStream.write(data);
    }
}