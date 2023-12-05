"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const inversify_1 = require("inversify");
const pg = require("pg");
require("reflect-metadata");
let DatabaseService = class DatabaseService {
    constructor() {
        this.connectionConfig = {
            user: "postgres",
            database: "TP4",
            password: "Spike2001",
            port: 5432,
            host: "localhost",
            keepAlive: true
        };
        this.pool = new pg.Pool(this.connectionConfig);
    }
    getAllMedecins() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const queryText = `SELECT * FROM Medecins;`;
            const res = yield client.query(queryText);
            client.release();
            return res;
        });
    }
    getMedecins(num) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [num.toString()];
            const queryText = `SELECT * FROM Medecins WHERE idMedecin = $1;`;
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    updateMedecins(medecins) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [medecins.idmedecin, medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesexperience, medecins.idservice];
            const queryText = `UPDATE Medecins SET prenom = $2, nom = $3, specialite = $4, anneesExperience = $5, idService = $6 WHERE idMedecin = $1;`;
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    deleteMedecins(num) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [num];
            const queryText = `DELETE FROM Medecins WHERE idMedecin = $1;`;
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    createMedecins(medecins) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const values = [medecins.prenom, medecins.nom, medecins.specialite, medecins.anneesexperience, medecins.idservice];
            const queryText = `INSERT INTO Medecins (prenom, nom, specialite, anneesexperience, idservice) VALUES($1,$2,$3,$4,$5);`;
            console.log(values);
            const res = yield client.query(queryText, values);
            client.release();
            return res;
        });
    }
    getAllServices() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query(`SELECT * FROM Services;`);
            client.release();
            return res;
        });
    }
    poolDemo() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield this.pool.connect();
            const res = yield client.query(`SELECT NOW();`);
            console.log(res);
            client.release();
            return res;
        });
    }
};
DatabaseService = __decorate([
    (0, inversify_1.injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map