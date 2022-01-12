import db from './db';

export default {
    productsFetch: async () => {
        //const req = await fetch(db);
        //const json = await req.json();
        
        return db;
    }
}
