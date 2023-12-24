gsap.to(".first-row", {
    scrollTrigger: {
        trigger: ".first-row",
        start: "top bottom",
        scrub: true,
    },
    x: 500,
});

gsap.to(".second-row", {
    scrollTrigger: {
        trigger: ".second-row",
        start: "top bottom",
        scrub: true,
    },
    x: -500,
});

gsap.to(".third-row", {
    scrollTrigger: {
        trigger: ".second-row",
        start: "top bottom",
        scrub: true,
    },
    x: 500,
});
