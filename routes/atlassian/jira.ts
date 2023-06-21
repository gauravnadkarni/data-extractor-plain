import express, { Router, Request, Response, NextFunction } from 'express';
import JiraController from '../../controllers/atlassian/jira';
const router:Router = express.Router();

router.get("/getData",async (req: Request, res: Response, next: NextFunction):Promise<Response>=>{
    const jiraController:JiraController = new JiraController();
    return await jiraController.pullData(req, res, next);
});

export default router;