import HttpStatusCodes from "http-status-codes";
import { Request, Response, Router } from 'express';
import { authenticateUser } from '../../services/user';

const router: Router = Router();

router.post("/user/auth", async (req: Request, res: Response) => {
  try {
    const jwtToken = await authenticateUser(req.body.login, req.body.password)
    return res.status(HttpStatusCodes.OK).json({ jwtToken });
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
