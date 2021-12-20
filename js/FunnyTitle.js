 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href,"/images/favicon.ico"');
         document.title = '我等你.当黑夜变成了白天。';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href,"/images/favicon.ico"');
         document.title = '我相信你不会回来了.我知道。' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
