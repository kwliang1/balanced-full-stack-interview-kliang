import fs from "fs";

const data = fs.readFileSync(`./data/classes.json`, {encoding: 'utf-8'});

console.info(`Class data`, data);

export default function(req:Request, res:Response){
    // @ts-ignore
    res.status<number>(200).json(JSON.parse(data));
}
