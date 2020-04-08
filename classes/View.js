function View() {
  this.showSideBar = function() {
  Logger.log("SHow side bar!");
  var ui = SpreadsheetApp.getUi();
  var htmlOutput = HtmlService.createHtmlOutputFromFile('HTML/sidebar')
                     .setTitle("SideBar Test");
  ui.showSidebar(htmlOutput);
  };

  this.showModal = function(){
    var html = HtmlService.createHtmlOutputFromFile('HTML/sidebar')
      .setWidth(900)
      .setHeight(600);
      SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Group Assignment Panel');
  }
}
