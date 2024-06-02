import { DatabaseConnection } from '../database/connection';
import { Status } from '../models/Status';

const table = "status";
const db = DatabaseConnection.getConnection();

export default class StatusService {
    static addData(param) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (status) values (?)`, [param.status],
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
                tx.executeSql(`update ${table} set status = ? where id = ?`, [param.status, param.id],
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
                        let status = new Status(item.id, item.status);
                        resolve(status);
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
                    let data = [];
                    for (let i = 0; i < rows.length; i++) {
                        let item = rows.item(i);
                        data.push(new Status(item.id, item.status));
                    }
                    resolve(data);
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    }
}
