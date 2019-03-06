function getContextInfo() {
    return $.ajax({
      url: "http://portal.sp2019.com/_api/contextinfo",
      method: "POST",
      headers: { "Accept": "application/json; odata=verbose" }
    });
  }
  
  function RestRequest(url,params) {
    var ctxInfo = getContextInfo();
    var req = new XMLHttpRequest();
    req.onreadystatechange = function ()
    {
      if (req.readyState != 4) // Loaded
        return;
      console.log(req.responseText);
    };
    // Prepend web URL to url and remove duplicated slashes.
    var webBasedUrl = "http://portal.sp2019.com";
    req.open("POST",webBasedUrl,true);
    req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
    req.setRequestHeader("x-requestdigest", ctxInfo);
    req.setRequestHeader("ODATA-VERSION","4.0");
    req.send(params ? JSON.stringify(params) : void 0);
  }
  
  RestRequest("/_api/thememanager/GetTenantThemingOptions");