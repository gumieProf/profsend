    var ua = navigator.userAgent.toLowerCase();
    if(0 < ua.indexOf("iphone") || 0 < ua.indexOf("android") && 0 < ua.indexOf("mobile")) { ($("body").width("360px");}
    if(0 < ua.indexOf("iPad") || 0 < ua.indexOf("Android")) { $("body").width("1024px");}