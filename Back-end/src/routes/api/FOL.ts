import FOL from "../../models/FOL";
import HttpStatusCodes from "http-status-codes";
import { Request, Response, Router } from 'express';
import { findFolById } from "../../services/fol";

import passport from 'passport';

const router: Router = Router();

router.get("/fols", passport.authenticate('bearer', { session: false }), async (req: Request, res: Response) => {
  try {
    let fols;
    fols = await FOL.find({ ...(req.query.search && { keywords: { "$regex": req.query.search, "$options": "i" } }), ...(req.query.equipment && { equipment: req.query.equipment }) });
    if (!fols.length) {
      fols = await FOL.find({ ...(req.query.search && { issue_description: { "$regex": req.query.search, "$options": "i" } }), ...(req.query.equipment && { equipment: req.query.equipment }) });
    }
    return res.status(HttpStatusCodes.OK).json(fols);
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

router.get("/fols/category", passport.authenticate('bearer', { session: false }), async (req: Request, res: Response) => {
  try {
    const fols = await FOL.find({ ...(req.query.search && { category: { "$regex": req.query.search, "$options": "i" } }), ...(req.query.equipment && { equipment: req.query.equipment }) });
    return res.status(HttpStatusCodes.OK).json(fols);
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

router.get("/fols/categories", passport.authenticate('bearer', { session: false }), async (req: Request, res: Response) => {
  try {
    const fols = await FOL.find({ ...(req.query.equipment && { equipment: req.query.equipment }) });
    let categories = new Set();
    for (let i = 0; i < fols.length; i++) {
      categories.add(fols[i].category);
    }
    return res.status(HttpStatusCodes.OK).json(Array.from(categories));
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
