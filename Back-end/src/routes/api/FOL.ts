import FOL from "../../models/FOL";
import HttpStatusCodes from "http-status-codes";
import { Request, Response, Router } from 'express';
import { findFolById } from "../../services/fol";

//import passport from 'passport';

const router: Router = Router();

router.get("/fols", /*passport.authenticate('bearer', { session: false }),*/ async (req: Request, res: Response) => {
  try {
    return res.status(HttpStatusCodes.OK).json(await FOL.find({ ...(req.query.search && { keywords: { "$regex": req.query.search, "$options": "i" } }), ...(req.query.equipment && { equipment: req.query.equipment }) }));
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

router.get("/fol/:folId/:folYear", async (req: Request, res: Response) => {
  try {
    const foundFol = await findFolById(req.params.folId + '/' + req.params.folYear);

    return res.status(HttpStatusCodes.OK).json(foundFol);
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
