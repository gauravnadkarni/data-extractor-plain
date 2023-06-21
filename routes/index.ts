import express, { Router, Request, Response } from 'express';
import atlassianRouter from './atlassian/jira';
import mondayRouter from './monday.com/work-management';
const router:Router = express.Router();

router.get("/health",(req: Request, res: Response)=>{
    res.status(200);
    return res.json({"message":"success"});
});

router.use('/atlassian/jira',atlassianRouter);
router.use('/monday/work-management',mondayRouter);

export default router;