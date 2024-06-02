import { DatabaseConnection } from '../database/connection';
import { Genero } from '../models/Genero';

const table = "genero";
const db = DatabaseConnection.getConnection();

export default class GeneroService {

    static addData(param) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (genero) values (?)`, [param.genero],
                (_, { insertId }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId);
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }

    static deleteData(id) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?`, [id],
                () => {
                    resolve();
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }

    static updateData(param) {      
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`update ${table} set genero = ? where id = ?`, [param.genero, param.id],
                () => {
                    resolve();
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }

    static findById(id) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`select * from ${table} where id = ?`, [id],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        let item = rows.item(0);
                        let genero = new Genero(item.id, item.genero);
                        resolve(genero);
                    } else {
                        resolve(null);
                    }
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }

    static findAll() {      
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`select * from ${table}`, [],
                (_, { rows }) => {
                    let generos = [];
                    for (let i = 0; i < rows.length; i++) {
                        let item = rows.item(i);
                        generos.push(new Genero(item.id, item.genero));
                    }
                    resolve(generos);
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }
}
