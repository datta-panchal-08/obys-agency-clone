function loadingAnimation()
{
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duaration: 0.6,
        delay: 0.5
    });
    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
    
            var h5Timer = document.querySelector("#line1-part1 h5");
    
            var grow = 0;
    
            setInterval(() => {
                if (grow < 100) {
                    h5Timer.innerHTML = grow++;
                } else {
                    h5Timer.innerHTML = grow;
                }
    
            }, 33);
        }
    });
    tl.to(" .line h2",{
        animationName:"fontChanger",
        opacity:1
    })
    
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 4
    });
    
    tl.from("#page1",{
        y:1600,
        opacity:0,
        delay:0,
        ease:Power4,
        duration:0.6
    });
    tl.to("#loader",{
        display:"none"
    });
    tl.from("#nav",{
         opacity:0
    });
    tl.from("#hero1 h1 , #hero2 h1 ,#hero3 h2 ,#hero4 h1 ",{
        y:140,
        stagger:0.2
    });
}

function cursorAnimation()
{
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            x:dets.x,
            y:dets.y
        });
    });
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();
