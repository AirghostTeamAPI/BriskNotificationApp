import excelToJson from 'convert-excel-to-json'
import moment from 'moment';
import { sendPushNotifications } from '../services/pushNotification';
import FOL from '../models/FOL';

export async function importCsvFile() {
  const result = excelToJson({
    sourceFile: '././files/FOLS.xlsx'
  });
  result.query.shift();

  result.query.forEach(element => {
    if (element.H) {
      if (element.H.length > 0) {
        element.H = Number(element.H);
      }
    } else {
      element.H = 0
    }

    const newFOL = new FOL({
      title: element.A,
      equipment: element.B,
      applicability: element.C,
      issue_description: element.D,
      category: element.E,
      status: element.F,
      issue_date: (moment(element.G, "DD/MM/YYYY")).toDate(),
      revision_number: element.H,
      revision_date: element.I,
      remarks: element.J,
      keywords: element.K,
    })

    FOL.countDocuments({ title: element.A }, async function (err, count) {
      if (count === 0) {
        FOL.create(newFOL)
        sendPushNotifications(element.B)
      }
      else {
        const foundFol = await FOL.findOne({ title: element.A })
        if (foundFol.revision_date < element.I) {
          FOL.updateOne({ title: element.A }, newFOL)
        }
      }
    })
  })

};