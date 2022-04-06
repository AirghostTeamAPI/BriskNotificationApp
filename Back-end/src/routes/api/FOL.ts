import FOL from "../../models/FOL";
import HttpStatusCodes from "http-status-codes";
import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get("/fols", async (req: Request, res: Response) => {
  try {
    return res.status(HttpStatusCodes.OK).json(await FOL.find({ ...(req.query.search && { keywords: { "$regex": req.query.search, "$options": "i" } }), ...(req.query.equipment && { equipment: req.query.equipment }) }));
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
