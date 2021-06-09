import 'swiper/swiper-bundle.min.css';
import {initSliderContinuous} from "./components/initSliderContinuous";
import {initMenu} from "./components/menu";
import {initFilter} from "./components/initFilter";
import {initInViewportAnimation} from "./components/initInViewportAnimation";
import {initScrollDown} from "./components/scrollDown";

export function runAfterDomLoad() {
    initSliderContinuous()
    initMenu()
    initFilter()
    initInViewportAnimation()
    initScrollDown()
}
