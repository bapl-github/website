var tl = gsap.timeline({ repeat: -1, delay: 1 });
tl.fromTo("#top", {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
}, {
    strokeDashoffset: 0,
    strokeDasharray: 1000,
    duration: 4,
})
tl.fromTo("#front1", {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
}, {
    strokeDashoffset: 0,
    strokeDasharray: 1000,
    duration: 3,
}, "-=2.5")
tl.fromTo(["#back", "#side"], {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
}, {
    strokeDashoffset: 0,
    strokeDasharray: 1000,
    duration: 3,
}, "-=3")
tl.fromTo("#front", {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
}, {
    strokeDashoffset: 0,
    strokeDasharray: 1000,
    duration: 3,
}, "-=3")
tl.fromTo("#circle", {
    strokeDashoffset: 1000,
    strokeDasharray: 1000
}, {
    strokeDashoffset: 0,
    strokeDasharray: 1000,
    duration: 2,
}, "-=1.5")
tl.fromTo(["#panel_right", "#panel_left"], {
    opacity: 0,
}, {
    opacity: 1,
    duration: 2,
}, "-=3")
tl.fromTo("#satellite", {
    opacity: 1
}, {
    opacity: 0,
    y: -100,
    x: 100,
    duration: 1,
},)