import excelToJson from 'convert-excel-to-json'
import moment from 'moment';
import FOL from '../models/User';

export async function importCsvFile() {
  const result = excelToJson({
    sourceFile: '././files/User.xlsx'
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
      name: element.A,
      email: element.B,
      password: element.C,
      /*issue_description: element.D,
      category: element.E,
      status: element.F,
      issue_date: (moment(element.G, "DD/MM/YYYY")).toDate(),
      revision_number: element.H,
      revision_date: element.I,
      remarks: element.J,
      keywords: element.K,*/
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
