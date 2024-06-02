import { DatabaseConnection } from '../database/connection';
import { Filme } from '../models/Filme';

const table = "filme";
const db = DatabaseConnection.getConnection();

export const FilmeService =  {

    //  addData(param) { 
    //     return new Promise((resolve, reject) => db.transaction(
    //         tx => {
    //             tx.executeSql(`insert into ${table} (titulo, diretor, ano, genero, status) 
    //             values (?, ?, ?, ?, ?)`, [param.titulo, param.diretor, param.ano, param.genero, param.status],
    //             (_, { insertId }) => { 
    //                 console.log("id insert: " + insertId);
    //                 resolve(insertId);
    //             }), (sqlError) => {
    //                 console.log(sqlError);
    //                 reject(sqlError);
    //             }
    //         }
    //     ));
    // },

    addData(param) { 
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (titulo) 
                values (?)`, [param.titulo],
                (_, { insertId }) => { 
                    console.log("id insert: " + insertId);
                    resolve(insertId);
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    },

     deleteData(id) {
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
    },

     updateData(param) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`update ${table} set titulo = ?, diretor = ?, ano = ?, genero = ?, status = ? where id = ?`,
                [param.titulo, param.diretor, param.ano, param.genero, param.status, param.id],
                () => {
                    resolve();
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    },

     findById(id) {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`select * from ${table} where id = ?`, [id],
                (_, { rows }) => {
                    if (rows.length > 0) {
                        let item = rows.item(0);
                        let filme = new Filme();
                        filme.id = item.id;
                        filme.titulo = item.titulo;
                        filme.diretor = item.diretor;
                        filme.ano = item.ano;
                        filme.genero = item.genero;
                        filme.status = item.status;
                        resolve(filme);
                    }
                    resolve(null);
                }), (sqlError) => {
                    console.log(sqlError);
                    reject(sqlError);
                }
            }
        ));
    },

     findAll() {
        return new Promise((resolve, reject) => db.transaction(
            tx => {
                tx.executeSql(`select * from ${table}`, [],
                (_, { rows }) => {
                    let data = [];
                    for (let i = 0; i < rows.length; i++) {
                        let item = rows.item(i);
                        let filme = new Filme();
                        filme.id = item.id;
                        filme.titulo = item.titulo;
                        filme.diretor = item.diretor;
                        filme.ano = item.ano;
                        filme.genero = item.genero;
                        filme.status = item.status;
                        data.push(filme);
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
