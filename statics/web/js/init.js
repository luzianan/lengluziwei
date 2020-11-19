//function ResumeError() { return true; }
//window.onerror = ResumeError;

try {
    var userAgent = navigator.userAgent.toLowerCase();
    // Figure out what browser is being used 
    jQuery.browser = {
        version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
        safari: /webkit/.test(userAgent),
        opera: /opera/.test(userAgent),
        msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
        mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
    };
    if ($.browser.msie) {
        if ($.browser.version.indexOf("8") > -1) {
            document.write('<!--bootstrap-->');
            document.write('<link href="/statics/web/css/bootstrap.min.css" rel="Stylesheet" type="text/css" />');
            document.write('<script type="text/javascript" src="/statics/web/js/bootstrap.min.js"></script>');
            document.write('<!--公用css-->');
            document.write('<link href="/statics/web/css/comm_ie8.css" rel="stylesheet" type="text/css" />');

            document.write('<script type="text/javascript" src="/statics/web/js/imagesloaded.pkgd.min.js"></script>');
            document.write('<script type="text/javascript" src="/statics/web/js/commjs_ie8.js"></script>');
        }
        else {
            document.write('<script type="text/javascript" src="/statics/web/js/jquery.animate-colors-min.js"></script>');
            document.write('<!--bootstrap-->');
            document.write('<link href="/statics/web/css/bootstrap.min.css" rel="Stylesheet" type="text/css" />');
            document.write('<script type="text/javascript" src="/statics/web/js/bootstrap.min.js"></script>');

            document.write('<!--公用css-->');
            document.write('<link href="/statics/web/css/comm.css" rel="stylesheet" type="text/css" />');
            document.write('<script type="text/javascript" src="/statics/web/js/imagesloaded.pkgd.min.js"></script>');
            document.write('<script type="text/javascript" src="/statics/web/js/commjs.js"></script>');
        }
    }
    else {
        document.write('<script type="text/javascript" src="/statics/web/js/jquery.animate-colors-min.js"></script>');
        document.write('<!--bootstrap-->   ');
        document.write('<link href="/statics/web/css/bootstrap.min.css" rel="Stylesheet" type="text/css" />');
        document.write('<script type="text/javascript" src="/statics/web/js/bootstrap.min.js"></script>');

        document.write('<!--公用css-->');
        document.write('<link href="/statics/web/css/comm.css" rel="stylesheet" type="text/css" />');
        document.write('<script type="text/javascript" src="/statics/web/js/imagesloaded.pkgd.min.js"></script>');
        document.write('<script type="text/javascript" src="/statics/web/js/commjs.js"></script>');
    }
}
catch (e) { }