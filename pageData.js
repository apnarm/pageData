  javascript:(function(){
  var pg = pageData;
  var html = "";
  var win = "";

  win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=500, top="+(screen.height-600)+", left="+(screen.width-840));
  style = "body { margin:0; padding: 0; background: #fff; color: #293431; font-family: 'Lucida Sans Unicode', 'Lucida Grande, Sans-Serif'; }";
  style = style + " table { width:100%; border-spacing: 2px border-color: gray; } ";
  style = style + "tr:nth-of-type(odd) { background: #eee; }";
  style = style + "tr { display: table-row }";
  style = style + "th { background: #333; color: white; font-weight: bold; }";
  style = style + "td { padding: 6px; border: 1px solid #ccc; text-align: left; }";

  html = "<h2>Page Data</h2><tr><th>Name</th><th>Value</th></tr>";

  for(var prop in pg) {
    if(prop != "cleanDirtyArray") {
      html = html + "<tr><td>"+ prop +"</td><td>"+ pg[prop] +"</td></tr>";
    }
  }

  win.document.head.innerHTML = "<style>" + style + "</style>";
  win.document.body.innerHTML = "<table>" + html + "</table>";
})();
