document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Splits text into words and characters
    const text = new SplitType("#heading", { types: "chars" });

    gsap.set("#heading", { autoAlpha: 1 }); // prevents flash of unstyled content
    gsap.set(text.chars, { yPercent: 100 }); // set initial state

    // Page Load Animation
    const initialAnimation = gsap.to(text.chars, {
      yPercent: 0,
      ease: "sine.out",
      stagger: { from: "center", amount: 0.5, ease: "power1.out" },
      onComplete: activateScrollTrigger // Activate ScrollTrigger after initial animation
    });

    // User Scroll Animation
    function activateScrollTrigger() {
      gsap.to(text.chars, {
        yPercent: -100,
        stagger: { from: "center", amount: 1 },
        scrollTrigger: {
          trigger: "#heading",
          start: "top top",
          end: () =>
            `+=${document.querySelector("#heading").offsetHeight * 0.25}`,
          scrub: 1
        }
      });
      gsap.to(".paragraph", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".paragraph",
          start: "top 30%",
          end: "top center",
          scrub: 1
    }
  });
  gsap.to("#page2 h3", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
          start: "top 30%",
          end: "top center",
          scrub: 1
    }
  });

    }
  });
  