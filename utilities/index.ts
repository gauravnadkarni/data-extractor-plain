import fs from 'fs/promises'

export const writeToFile = async (data:string, path:string):Promise<void> => {
    await fs.writeFile(path,data);
}

export const getBas64EncodedString =  (data:string):string => (Buffer.from(data).toString('base64'));