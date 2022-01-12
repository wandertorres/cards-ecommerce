import { db } from './db';

/*export default function productsFetch() {
    const req = db;

    console.log(req);

    return req;
};*/

export default {
    productsFetch: async () => {
        //const req = await fetch(db);
        //const json = await req.json();

        return db;
    }
}