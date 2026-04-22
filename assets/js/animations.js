import { ScrollTrigger } from "../../vendor/gsap/ScrollTrigger.js";
import { ScrollSmoother } from "../../vendor/gsap/ScrollSmoother.js";
import { SplitText } from "../../vendor/gsap/SplitText.js";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 3,
    effects: true
});