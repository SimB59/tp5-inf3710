"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.DatabaseController = void 0;
const express_1 = require("express");
const inversify_1 = require("inversify");
const database_service_1 = require("../services/database.service");
const types_1 = require("../types");
const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_ERROR = 404;
let DatabaseController = class DatabaseController {
    constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    databaseService) {
        this.databaseService = databaseService;
        this.configureRouter();
    }
    configureRouter() {
        this.router = (0, express_1.Router)();
        this.router.get('/services', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allFournisseurs = yield this.databaseService.getAllServices();
                res.status(HTTP_OK).json(allFournisseurs.rows);
            }
            catch (error) {
                res.status(HTTP_ERROR).json(error);
            }
        }));
        this.router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.databaseService.createMedecins(req.body).then(() => { res.status(HTTP_CREATED).json(); });
            }
            catch (_a) {
                res.status(HTTP_ERROR);
            }
        }));
        this.router.patch('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.databaseService.updateMedecins(req.body).then(() => { res.status(HTTP_CREATED).json(); });
                res.status(HTTP_CREATED);
            }
            catch (_b) {
                res.status(HTTP_ERROR);
            }
        }));
        this.router.delete('/:numeroMedecin', (req, res) => {
            console.log(req.params.numeroMedecin);
            this.databaseService.deleteMedecins(req.params.numeroMedecin).then(() => { res.status(HTTP_OK).json(); }).catch((error) => { res.status(HTTP_ERROR).json(error); });
        });
        this.router.get('/debug', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.databaseService.poolDemo();
                res.status(HTTP_OK);
            }
            catch (_c) {
                res.status(HTTP_ERROR);
            }
        }));
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allPlanRepas = yield this.databaseService.getAllMedecins();
                res.status(HTTP_OK).json(allPlanRepas.rows);
            }
            catch (error) {
                res.status(HTTP_ERROR).json(error);
            }
        }));
    }
};
DatabaseController = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(types_1.default.DatabaseService)),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DatabaseController);
exports.DatabaseController = DatabaseController;
//# sourceMappingURL=database.controller.js.map