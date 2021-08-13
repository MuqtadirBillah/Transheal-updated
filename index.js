$(document).ready(function(){
    
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    // Check if the media query is true

    window.addEventListener('scroll', function() {
        if (mediaQuery.matches) {
            if (window.scrollY > 200) {
                document.getElementById('aaa').classList.add('fixed-top');
                document.getElementById('addd').style.display = 'none';
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.aaaa').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
                // .navbar-collapse
                document.querySelector(".navbar-collapse").style.backgroundColor="white";
                document.querySelector(".navbar-collapse").style.position="fixed";
                document.querySelector(".navbar-collapse").style.width="100%";
                document.querySelector(".navbar-collapse").style.padding="0 !important";
                document.querySelector(".navbar-collapse").style.padding="10px 0";
                document.querySelector(".navbar-collapse").style.textAlign="center";
                document.querySelector(".navbar-collapse ul").style.margin="0 auto";
                document.querySelector(".navbar-collapse ul li").style.marginLeft="0px";
                document.querySelector("nav").style.padding="0px";
                document.querySelector(".topArrow").style.color="#1a8a4a";
                document.querySelector(".topArrow a").style.fontSize="x-large";
                document.querySelector(".topArrow").style.marginLeft="20px";
                document.querySelector(".topArrow").style.display="inline-block";
                document.querySelector(".logNav").style.display="block";
            }
            else {
                document.getElementById('aaa').classList.remove('fixed-top');
                document.getElementById('addd').style.display = 'block';
                document.querySelector(".navbar-collapse").style.position="relative";
                document.querySelector(".navbar-collapse").style.backgroundColor="rgba(0,0,0,0)";
                // remove padding top from body
                document.body.style.paddingTop = '0';
                document.querySelector(".navbar-collapse ul li").style.marginLeft="00px";
                document.querySelector(".navbar-collapse").style.boxShadow="0 0 0px 0px rgba(0,0,0,0)";
                document.querySelector(".topArrow").style.display="none";
                document.querySelector(".logNav").style.display="none";
            } 
        }
        else{
            document.querySelector(".logNav").style.display="block";
            if (window.scrollY > 200) {
                document.getElementById('aaa').classList.add('fixed-top');
                document.getElementById('addd').style.display = 'none';
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.aaaa').offsetHeight;
                document.body.style.paddingTop = navbar_height + 'px';
                // .navbar-collapse
                document.querySelector(".navbar-collapse").style.backgroundColor="white";
                document.querySelector(".navbar-collapse").style.position="fixed";
                document.querySelector(".navbar-collapse").style.width="100%";
                document.querySelector(".navbar-collapse").style.padding="0 !important";
                document.querySelector(".navbar-collapse").style.padding="10px 0";
                document.querySelector(".navbar-collapse").style.textAlign="center";
                document.querySelector(".navbar-collapse ul").style.margin="0 auto";
                document.querySelector(".navbar-collapse ul li").style.marginLeft="0px";
                document.querySelector("nav").style.padding="0px";
                document.querySelector(".topArrow").style.color="#1a8a4a";
                document.querySelector(".topArrow a").style.fontSize="x-large";
                document.querySelector(".topArrow").style.marginLeft="20px";
                document.querySelector(".topArrow").style.display="inline-block";
            }
            else {
                document.getElementById('aaa').classList.remove('fixed-top');
                document.getElementById('addd').style.display = 'block';
                document.querySelector(".navbar-collapse").style.position="relative";
                document.querySelector(".navbar-collapse").style.backgroundColor="rgba(0,0,0,0)";
                // remove padding top from body
                document.body.style.paddingTop = '0';
                document.querySelector(".navbar-collapse ul li").style.marginLeft="00px";
                document.querySelector(".navbar-collapse").style.boxShadow="0 0 0px 0px rgba(0,0,0,0)";
                document.querySelector(".topArrow").style.display="none";
            } 
        }
    });
})