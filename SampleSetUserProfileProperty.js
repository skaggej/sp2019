(function ($) {
    'use strict';

    var requestHeaders = {
        'X-RequestDigest': $("#__REQUESTDIGEST").val(),
        "accept": "application/json; odata=nometadata",
        "content-type": "application/json;odata=nometadata"
    };

    var userData = {
        'accountName': 'SP2019\spadmin',
        'propertyName': 'MyLinks', //can also be used to set custom single value profile properties
        'propertyValue': '[{"title":"Google","url":"http://www.google.com","openInNewWindow":true}]]'
    }

    $.ajax({
        url: "http://portal.sp2019.com/_api/SP.UserProfiles.PeopleManager/SetSingleValueProfileProperty",
        type: "POST",
        headers: requestHeaders,
        data: JSON.stringify(userData),
        success: function (data) {
            console.log(data)
        },
        error: function (jqxr, errorCode, errorThrown) {
            console.log(jqxr.responseText);
        }
    });

})(jQuery);