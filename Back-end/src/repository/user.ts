import User from "../models/User";

export async function findUsersByEquipments(equipments: string[]) {
  const foundUser = await User.find({ equipment: { $in: equipments } });
  return foundUser;
}

export async function findUserAndUpdateToken(login: string, pushToken: string) {
  const foundUser = await User.findOne({ login });
  await User.updateOne({ _id: foundUser.id }, { pushToken });
}