const docx = require('../build');

var doc = new docx.Document(undefined,{differentFirstPageHeader:true});

doc.createParagraph("First Page").pageBreak()
doc.createParagraph("Second Page");

var tab = new docx.TextRun().tab()
var pageNumber = new docx.TextRun().pageNumber()

var pageoneheader = new docx.Paragraph("Running head: My Title").maxRightTabStop();

pageoneheader.addRun(tab);
pageoneheader.addRun(pageNumber);
doc.firstPageHeader.addParagraph(pageoneheader);

var pagetwoheader = new docx.Paragraph("My Title").maxRightTabStop();

pagetwoheader.addRun(tab)
pagetwoheader.addRun(pageNumber)
doc.Header.addParagraph(pagetwoheader)
doc.Header = new docx.Paragraph("My Title")


var exporter = new docx.LocalPacker(doc);
exporter.pack('Testing');

console.log('Document created successfully at project root!');
