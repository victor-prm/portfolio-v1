import './small.sass'
import { setElement } from "../js/utils";


export function imgWrapper(parentClass) {
    let imgWrap = setElement("figure", {
        class: `${parentClass}__img-wrap`
    })

    return imgWrap;
}

export function arrowLink(data) {
    const cname = "arrow-link"
    let text = data.text || "";
    let ref = data.link || "#"
    let direction = data.direction || "left";

    let icon = direction === "right"? " ▻" : "◅ "

    let link = setElement("a", {
        class: cname,
        href: ref
    }).withHTML(icon+text)
    //⫷⪕⪪⪡⚌
    return link;
}