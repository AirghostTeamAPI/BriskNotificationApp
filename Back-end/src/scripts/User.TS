import excelToJson from 'convert-excel-to-json'
import moment from 'moment';
import User from '../models/User';

export async function importCsvFile() {
  const result = excelToJson({
    sourceFile: '././files/USER.xlsx'
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

    const newUser = new User({
      Username: element.A,
      Login: element.B,
      Password: element.C,
      Equipment: element.D,
    })

    User.countDocuments({ title: element.A }, async function (err, count) {
      if (count === 0) {
        User.create(newUser)
      }
      else {
        const foundUser = await User.findOne({ title: element.A })
        if (foundUser.revision_date < element.I) {
          User.updateOne({ title: element.A }, newUser)
        }
      }
    })
  })

};
