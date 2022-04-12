import { sign } from 'jsonwebtoken';
import User from '../models/User';

export async function authenticateUser(login: string, password: string) {
  const foundUser = await User.findOne({ login });
  if (foundUser) {
    if (foundUser.password === password) {
      const token = sign({
        id: foundUser.id,
        username: foundUser.username,
        equipment: foundUser.equipment,
        login: foundUser.login,
      }, process.env.JWTSECRET);

      return token;
    }
  }
}