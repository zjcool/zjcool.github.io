// build time:Wed Dec 18 2019 05:54:52 GMT+0800 (中国标准时间)
$(function(){$(".layout").velocity("stop").velocity("transition.slideUpIn",{delay:500,duration:1e3,easing:"easeInOutQuart",complete:function(){if($(".sidebar-toc").length>0){setTimeout(function(){$("#toggle-sidebar").click()},200)}}});$("#top-container").velocity("stop").velocity("transition.fadeIn",{delay:500,duration:1e3,easing:"easeInOutQuart"})});
//rebuild by neat 