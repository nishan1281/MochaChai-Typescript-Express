import {Router, Request, Response} from "express";

const router = Router();

//route GET/ auth

router.get('/', (req: Request, res: Response)=>{
    res.send(200);
});

export default router;