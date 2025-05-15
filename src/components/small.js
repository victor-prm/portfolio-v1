import './small.sass'
import { setElement } from "../js/utils";


export function imgWrapper(parentClass) {
    let imgWrap = setElement("figure", {
        class: `${parentClass}__img-wrap`
    })

    return imgWrap;
}

export function arrowLink(data) {
    let cname = "arrow-link"
    let text = data.text || "";
    let ref = data.link || "#"
    let direction = data.direction || "left";

    if (direction === "right") {
        text = `${text} ▻`
        cname += ` ${cname}--right`
    } else {
        text = `◅ ${text}`
        cname += ` ${cname}--left`
    }


    let link = setElement("a", {
        class: cname,
        href: ref
    }).withHTML(text)
    //⫷⪕⪪⪡⚌
    return link;
}