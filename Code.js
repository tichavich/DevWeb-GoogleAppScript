// application setting
const APPCONFIG = {
  IDConnectSheet:"1IDOgMesMRBQqXRpoOI4BNV1fO3yeHg6PzbH9CB_JrCk",
  sheetName:["record","employ","building","issue"]
}

//CRUD

 CreateDataSet=(sheet_index,data)=>{
   let conSheet = SpreadsheetApp.openById(APPCONFIG.IDConnectSheet);
   let selectSheet = conSheet.getSheetByName(APPCONFIG.sheetName[sheet_index]);
   selectSheet.appendRow(data);
 };
 const ReadDataOnceforCell=(sheet_index,cell_name)=>{
   let conSheet = SpreadsheetApp.openById(APPCONFIG.IDConnectSheet);
   let selectSheet = conSheet.getSheetByName(APPCONFIG.sheetName[sheet_index]);
   return selectSheet.getRange(cell_name).getValue();
 };
const ReadDataOnceforRowCol=(sheet_index,row_num,col_num)=>{
  let conSheet = SpreadsheetApp.openById(APPCONFIG.IDConnectSheet);
  let selectSheet = conSheet.getSheetByName(APPCONFIG.sheetName[sheet_index]);    
  return selectSheet.getRange(row_num,col_num).getValue();
};
const ReadDataOnceforRangeRowCol=(sheet_index,row,col,numRow,numCol)=>{
  //// Print values from a 3x3 box (1,1,3,3)
  let conSheet = SpreadsheetApp.openById(APPCONFIG.IDConnectSheet);
  let selectSheet = conSheet.getSheetByName(APPCONFIG.sheetName[sheet_index]);    
  return selectSheet.getRange(row,col,numRow,numCol).getValues();
};

 const ReadDataAll=(sheet_index)=>{
  let conSheet = SpreadsheetApp.openById(APPCONFIG.IDConnectSheet);
  let selectSheet = conSheet.getSheetByName(APPCONFIG.sheetName[sheet_index]);
  return selectSheet.getDataRange().getValues();
};

function ResponseDataSet(pasingArr){
    CreateDataSet(0,pasingArr);
}

//Extranal files 
function IncludeFiles(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

//response to webpage
function doGet(e) {
  return HtmlService.createTemplateFromFile('index').evaluate()
      .setTitle("HR")
      .addMetaTag('viewport','width=device-width , initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
