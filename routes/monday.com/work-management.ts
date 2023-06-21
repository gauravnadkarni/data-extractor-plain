import express, { Router, Request, Response, NextFunction } from 'express';
import WorkManagementController from '../../controllers/monday.com/work-management';
const router:Router = express.Router();

router.get("/getData",async (req: Request, res: Response, next: NextFunction):Promise<Response>=>{
    const workManagementController:WorkManagementController = new WorkManagementController();
    return await workManagementController.pullData(req, res, next);
});

export default router;