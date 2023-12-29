function animateRow(selector, xValue) {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      scrub: true,
    },
    x: xValue,
  });
}

function animateScreen(selector, trigger, heightValue) {
  gsap.to(selector, {
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      start: "bottom bottom-=21.5%",
      end: "bottom top+=21.5%",
      scrub: true,
    },
    height: heightValue,
  });
}

function initAnimations() {
  animateRow(".first-row", 500);
  animateRow(".second-row", -500);
  animateRow(".third-row", 500);
  animateScreen(".screen-two", ".room-one", "0px");
}

function scrollTriggerRefresh() {
  // Kill all existing ScrollTrigger instances
  ScrollTrigger.killAll(true);

  // Refresh ScrollTrigger
  ScrollTrigger.refresh(true);
}


// Add event listener for 'refresh' event
ScrollTrigger.addEventListener("refresh", function () {
  // Re-initialize animations after all ScrollTriggers have been refreshed
  initAnimations();
});

window.onresize = scrollTriggerRefresh;
window.onload = scrollTriggerRefresh;
