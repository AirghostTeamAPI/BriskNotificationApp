import HttpStatusCodes from "http-status-codes";
import { Request, Response, Router } from 'express';
import { authenticateUser} from '../../services/user';
import User from '../../models/User';


import passport from 'passport';
import { IUser } from "src/interface/user";


const router: Router = Router();

router.post("/user/auth", async (req: Request, res: Response) => {
  try {
    console.log(req.body.login, req.body.password)
    const jwtToken = await authenticateUser(req.body.login, req.body.password)
    return res.status(HttpStatusCodes.OK).json({ jwtToken });
    console.log(jwtToken)
  } catch (err) {
    console.error((err as Error).message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

router.get("/user/viewedFols",passport.authenticate('bearer', { session: false }), async(req:Request,res: Response) => {
  try{
    const foundUser:Partial<IUser> = (req.user)
    console.log(foundUser);
    
    const userFols = foundUser.viewedFols
    return res.status(HttpStatusCodes.OK).json({ userFols })
  }
  catch(err){
    console.log(err)
  }
});

router.post("/fol/:folId",passport.authenticate('bearer', { session: false }), async (req: Request, res: Response) => {
  try {
    const foundUser:Partial<IUser> = (req.user)
    const foundLogin: IUser = await User.findOne({ login: foundUser.login });
    foundLogin.viewedFols.push(req.params.folId)
    
    await User.updateOne({ login: foundLogin.login }, foundLogin)
    console.log(foundLogin)
    
    return res.status(HttpStatusCodes.OK).json({ foundLogin })

  } catch (err) {
    console.log(err)
  }
});

export default router;
