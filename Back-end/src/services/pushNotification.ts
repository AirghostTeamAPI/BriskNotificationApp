import axios from "axios";
import { findUsersByEquipments } from "../repository/user";

export async function sendPushNotifications(equipments) {
  try {
    const foundUsers = await findUsersByEquipments(equipments)
    const pushTokens = foundUsers.map(user => user.pushToken)

    const message = {
      to: pushTokens,
      sound: 'default',
      title: 'Nova fol',
      body: `Nova fol sobre seu veiculo`,
    };

    await axios.post('https://exp.host/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
        authorization: `Bearer ${process.env.PUSH_NOTIFICATION_TOKEN}`
      },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.log(error)
  }
}