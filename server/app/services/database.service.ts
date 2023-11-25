import { injectable } from "inversify";
import * as pg from "pg";
import "reflect-metadata";
import { Medecins } from "./medecins";

type values = [number, string, string, string, number, number];


@injectable()
export class DatabaseService {
  public connectionConfig: pg.ConnectionConfig = {
    user: "postgres",
    database: "TP4",
    password: "root",
    port: 5432,          // Attention ! Peut aussi être 5433 pour certains utilisateurs
    host: "localhost",
    keepAlive: true
  };
  public pool: pg.Pool = new pg.Pool(this.connectionConfig);

  public async getAllMedecins(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const queryText: string = `SELECT * FROM Medecins;`;
    const res = await client.query(queryText);
    client.release();

    return res;
  }

  public async getMedecins(num: string): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values: string[] = [num.toString()];
    const queryText: string = `SELECT * FROM Medecins WHERE idMedecin = $1;`;

    const res = await client.query(queryText, values);
    client.release();

    return res;
  }

  public async updateMedecins(medecins: Medecins): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values: values = [medecins.idmedecin, medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesexperience, medecins.idservice];
    const queryText: string = `UPDATE Medecins SET prenom = $2, nom = $3, specialite = $4, anneesExperience = $5, idService = $6 WHERE idMedecin = $1;`;
    const res = await client.query(queryText, values);
    client.release();

    return res;
  }

  public async deleteMedecins(num: string): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values: string[] = [num];
    const queryText: string = `DELETE FROM Medecins WHERE idMedecin = $1;`;

    const res = await client.query(queryText, values);
    client.release();

    return res;
  }

  public async createMedecins(medecins: Medecins): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const values = [medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesexperience, medecins.idservice];
    const queryText: string = `INSERT INTO Medecins (prenom, nom, specialite, anneesexperience, idservice) VALUES($1,$2,$3,$4,$5);`;
    console.log(values);
    const res = await client.query(queryText, values);
    client.release();

    return res;
  }

  public async getAllServices(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();

    const res = await client.query(`SELECT * FROM Services;`);
    client.release();

    return res;
  }

  public async poolDemo(): Promise<pg.QueryResult> {
    const client = await this.pool.connect();
    const res = await client.query(`SELECT NOW();`);
    console.log(res);
    client.release();
    return res;
  }
}
