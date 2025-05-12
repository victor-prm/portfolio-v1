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

    let link = setElement("a", {
        class: cname,
        href: ref
    }).withHTML(text)

    let icon = setElement("i",{
        class: `${cname}__icon`
    })
    if(direction === "right"){
        icon.classList.add("fas", "fa-long-arrow-right")
        link.append(icon)
    }else{
        icon.classList.add("fas", "fa-long-arrow-left")
        link.prepend(icon)
    }

    return link;
}