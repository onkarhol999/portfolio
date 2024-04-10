function valueSetters(){
    gsap.set("#nav a", { y: "-100%", opacity: 0});
    gsap.set("#home span .child", { y: "100%", opacity: 0});
    gsap.set("#home .c-visual #Visual", { y: "-100%", opacity: 0});
    gsap.set("#home .row img", { y: "100%", opacity: 0})
}

function revealToSpan() {
    document.querySelectorAll('.reveal')
        .forEach(function (elem) {
            var parent = document.createElement("span");
            var child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);
            elem.innerHTML = "";
            elem.appendChild(parent);
        })
}

function loaderAnimation(){
    let tl = gsap.timeline();
tl
    .from("#loader .reveal .parent .child span", {
        x: 100,
        delay: 1,
        stagger: 0.2,
        duration: 1.4,
        ease: Power3.easeInOut
    })
    .to("#loader .reveal .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "100%",
        top:0,
        duration: 1,
        delay:-0.7,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "0%",
        duration: 1,
        delay:-0.5,
        ease: Circ.easeInOut,
        onComplete: function(){
                    // animateSVG();
                    animateHomepage();
        }
    });

}
function animateSVG(){
    document.querySelectorAll("#Visual>g").forEach(function(e){
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    })
    gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
        strokeDashoffset: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: 2
    })
}
function animateHomepage(){
  
    var tl = gsap.timeline();

    tl.to("#nav a", {
        y: 0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut,
    })
    gsap.to("#home span .child", {
        y: 0,
        stagger: .1,
        opacity:1,
        duration:1.7,
        ease: Expo.easeInOut,
    })
    gsap.to("#home .c-visual #Visual", {
        y: 0,
        stagger: .1,
        opacity:1,
        duration:1.7,
        ease: Expo.easeInOut,
    })
    gsap.to("#home .row img", {
        y: 0,
        stagger: .1,
        opacity:1,
        duration:1.7,
        ease: Expo.easeInOut,
    })
}

function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardShow() {
    document.querySelectorAll(".cnt").forEach(function (cnt) {
        var showingimage;

        cnt.addEventListener("mousemove", function (dets) {
            const cursor = document.querySelector("#cursor").children[dets.target.dataset.index];
            cursor.style.opacity = 1;
            showingimage = dets.target;
            cursor.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
        });

        cnt.addEventListener("mouseleave", function () {
            if (showingimage) {
                const cursor = document.querySelector("#cursor").children[showingimage.dataset.index];
                cursor.style.opacity = 0;
                showingimage = null; // Clear the showingimage variable
            }
        });
    });
}



revealToSpan();
valueSetters();
loaderAnimation();
locoInitialize();
cardShow();