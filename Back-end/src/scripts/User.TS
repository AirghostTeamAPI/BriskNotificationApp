import excelToJson from 'convert-excel-to-json'
import User from '../models/User';

export async function importUserCsvFile() {
  const result = excelToJson({
    sourceFile: '././files/USER.xlsx'
  });
  result.query.shift();

  result.query.forEach(element => {
    const newUser = new User({
      Username: element.A,
      Login: element.B,
      Password: element.C,
      Equipment: element.D,
    })

    User.countDocuments({ name: element.A }, async function (err, count) {
      if (count === 0) {
        User.create(newUser)
      }
      else {
        User.updateOne({ name: element.A }, newUser)
      }
    })
  })

};
