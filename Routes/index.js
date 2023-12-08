import { Router } from "express";
import AuthRouters from './Auth.router.js'

const   router = Router();

router.use("/auth" , AuthRouters)

export default router;