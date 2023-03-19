/*start toggler comment */

var toggler_btn=document.querySelector(".toggler-btn");
var side_nav=document.querySelector(".side-nav");

toggler_btn.onclick = function(){
    side_nav.classList.toggle("active");
}

/*start title animation code */
var title=document.querySelector("#title");
var array=["Web Developer...","Designer...","IOT Developer...","Open to Work..."];
var arrIndex=0;
var charIndex=0;

function updateTitle(){
    charIndex++;
    title.innerHTML="I'm <span>"+array[arrIndex].slice(0,charIndex)+"</span>";
    if(charIndex == array[arrIndex].length){
        arrIndex++;
        charIndex=0;
    }
    if(arrIndex == array.length){
        arrIndex=0;
    }
    setTimeout(updateTitle,400);
}
updateTitle();

/*start skill-scition*/

$(document).ready(function(){
    var html = $(".html").html();
    var css = $(".css").html();
    var javascript = $(".javascript").html();
    var php = $(".php").html();
    var wordpress = $(".wordpress").html();
    var react = $(".react").html();
    $(".progress-html").animate({'width':html},50,function(){
        $(".progress-css").animate({'width':css},50,function(){
            $(".progress-javascript").animate({'width':javascript},50,function(){
                $(".progress-php").animate({'width':php},50,function(){
                    $(".progress-wordpress").animate({'width':wordpress},50,function(){
                        $(".progress-react").animate({'width':react},50,function(){
                            sessionStorage.setItem("skill-animation","done");    
                        });
                    });
                });
            });
        });
    });
});


