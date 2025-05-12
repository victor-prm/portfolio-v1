import './header.sass'
import { getCurrentRoute, setElement } from "../js/utils";
import { arrowLink } from "./small";

export function createHeader(data) {
    const cname = "header"

    let thisElm = setElement("header", {
        class: cname
    })

    let nav = setElement("nav", {
        class: `${cname}__nav`
    })

    if (getCurrentRoute() === '/detail') {
        let link = arrowLink({ text: "Index", link: "/projects" })
        nav.append(link)
    }


    let menuButton = setElement("button", {
        class: `${cname}__nav__menu-button`
    })
    let menuIcon = setElement("i", {
        class: "fas fa-bars"
    })
    menuButton.append(menuIcon)

    nav.append(menuButton)

    let contextInfo = setElement("div", {
        class: `${cname}__context-info`
    })

    thisElm.append(nav, contextInfo)

    return thisElm;
}