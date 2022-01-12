import { db } from './db.js';

/*export default function productsFetch() {
    const req = db;

    console.log(req);

    return req;
};*/

const productsFetch = async () => {
    const req = await fetch(db);
    const json = await req.json();

    return json;
};

export default productsFetch;