import { PDFExtract } from 'pdf.js-extract';

export async function findFolById(id: string) {
  const pdfExtract = new PDFExtract();
  const options = {};
  const doc = await pdfExtract.extract('./files/FOL-MUS.pdf', options);
  for (let i = 0; i < doc.pages.length; i++) {
    if (doc.pages[i].content[0].str.includes(id)) {
      return doc.pages[i].pageInfo.num;
    }
  }
}