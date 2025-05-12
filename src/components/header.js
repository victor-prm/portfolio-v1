import './header.sass'
import { setElement } from "../js/utils";
import { arrowLink } from "./small";

export function createHeader(data) {
    const cname = "header"

    let thisElm = setElement("header", {
        class: cname
    })

    let nav = setElement("nav", {
        class: `${cname}__nav`
    })

    let link = arrowLink({ text: "Index" , link: "/"})
    let menuButton = setElement("button",{
         class: `${cname}__nav__menu-button`
    })
    let menuIcon = setElement("i",{
        class: "fas fa-bars"
    })
    menuButton.append(menuIcon)

    nav.append(link,menuButton)

    thisElm.append(nav)

    return thisElm;
}