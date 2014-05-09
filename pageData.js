javascript:(function(){

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }


  var pg = pageData;
  var win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=780, height=500, top="+(screen.height-600)+", left="+(screen.width-840));
  var style = "body { margin:0; padding: 0; background: #fff; color: #293431; font-family: 'Lucida Sans Unicode', 'Lucida Grande, Sans-Serif'; }";

  style = style + " table { width:100%; border-spacing: 2px border-color: gray; } ";
  style = style + "tr:nth-of-type(odd) { background: #eee; }";
  style = style + "tr { display: table-row }";
  style = style + "th { background: #333; color: white; font-weight: bold; }";
  style = style + "td { padding: 6px; border: 1px solid #ccc; text-align: left; }";

  var html = "<h2>Page Data</h2><tr><th>Name</th><th>Value</th></tr>";

  for(var prop in pg) {
    if(!isFunction(pg[prop])) {
      html = html + "<tr><td>"+ prop +"</td><td>"+ pg[prop] +"</td></tr>";
    }
  }

  if(win != undefined) {
    win.document.head.innerHTML = "<style>" + style + "</style>";
    win.document.body.innerHTML = "<table>" + html + "</table>";
    win.focus();
  } else {
    alert('You need to allow popups from this domain to use this Page Data tool. Look for the window icon with an x in the address bar!');
  }
})();


