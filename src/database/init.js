import { DatabaseConnection } from './database-connection'
export default class DatabaseInit {

    InitDb() {
        db = DatabaseConnection.getConnection();

        var sql = [
            `DROP TABLE IF EXISTS status;`,
            `DROP TABLE IF EXISTS filme;`,
            `DROP TABLE IF EXISTS genero;`,

            `create table if not exists status (
                id integer primary key autoincrement,
                status text
            );`,

            `crate table if not exists genero (
                id integer primary key autoincrement,
                genero text
            );`,

            `create table if not exists filme (
                id integer primary key autoincrement,
                titulo text,
                status_id int,
                genero text,
                foreign key (status_id) references status (id),
                foreign key (genero) references genero (id)
            );`,

            `insert into status(status) values('Assistido');`,
            `insert into status(status) values('Não Assistido');`,
            `insert into status(status) values('Assistindo');`,
            `insert into status(status) values('Favorito');`,
            `insert into status(status) values('Não Gostei');`,

            `insert into genero(genero) values('Ação');`,
            `insert into genero(genero) values('Aventura');`,
            `insert into genero(genero) values('Comédia');`,
            `insert into genero(genero) values('Drama');`,
            `insert into genero(genero) values('Ficção Científica');`,
            `insert into genero(genero) values('Musical');`,
            `insert into genero(genero) values('Romance');`,
            `insert into genero(genero) values('Suspense');`,
            `insert into genero(genero) values('Terror');`,
            `insert into genero(genero) values('Found Footage');`
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("Executando SQL: " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error) => {
                console.log("Erro: " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("Transaction completa.");
            }
        );
    }

}