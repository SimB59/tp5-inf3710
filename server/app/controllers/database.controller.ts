import { Router } from "express";
import { inject, injectable } from "inversify";
import { DatabaseService } from "../services/database.service";
import Types from "../types";

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_ERROR = 404;

@injectable()
export class DatabaseController {
  router: Router;
  public constructor(
    // @ts-ignore -- À ENLEVER LORSQUE L'IMPLÉMENTATION EST TERMINÉE
    @inject(Types.DatabaseService) private readonly databaseService: DatabaseService
  ) {
    this.configureRouter();
  }

  private configureRouter() {
    this.router = Router();

    this.router.get('/services', async (req, res) => {
      try {
        const allFournisseurs = await this.databaseService.getAllServices();
        res.status(HTTP_OK).json(allFournisseurs.rows);
      }
      catch (error) {
        res.status(HTTP_ERROR).json(error);
      }
    });

    this.router.post('/', async (req, res) => {
      try {
        await this.databaseService.createMedecins(req.body).then(() => { res.status(HTTP_CREATED).json() });
      }
      catch {
        res.status(HTTP_ERROR);
      }

    });

    this.router.patch('/', async (req, res) => {
      try {
        await this.databaseService.updateMedecins(req.body).then(() => { res.status(HTTP_CREATED).json() });
        res.status(HTTP_CREATED);
      }
      catch {
        res.status(HTTP_ERROR);
      }
    });

    this.router.delete('/:numeroMedecin', (req, res) => {
      console.log(req.params.numeroMedecin);
      this.databaseService.deleteMedecins(req.params.numeroMedecin).then(() => { res.status(HTTP_OK).json() }).catch((error) => { res.status(HTTP_ERROR).json(error) });
    });

    this.router.get('/debug', async (req, res) => {
      try {
        await this.databaseService.poolDemo();
        res.status(HTTP_OK);
      }
      catch {
        res.status(HTTP_ERROR);
      }

    });

    this.router.get('/', async (req, res) => {
      try {
        const allPlanRepas = await this.databaseService.getAllMedecins();
        res.status(HTTP_OK).json(allPlanRepas.rows);
      }
      catch (error) {
        res.status(HTTP_ERROR).json(error);
      }
    });
  }
}
