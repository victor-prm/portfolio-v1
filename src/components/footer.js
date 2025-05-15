import './footer.sass'
import { getCurrentRoute, setElement } from "../js/utils";
import { arrowLink } from "./small";

export function navFooter(data) {
    //Only show on details page
    if (getCurrentRoute() !== '/detail') return ""

    const cname = "footer"

    let thisElm = setElement("footer", {
        class: cname
    })

    let nav = setElement("nav", {
        class: `${cname}__nav`
    })

    let prevLink = arrowLink({ text: "Project 001", link: "/projects" })
    let nextLink = arrowLink({ text: "Project 003", link: "/projects", direction: "right" })

    /*  if (getCurrentRoute() === '/detail') {
         let link = arrowLink({ text: "Index", link: "/projects" })
         nav.append(link)
     } */

    nav.append(prevLink,nextLink)

    thisElm.append(nav)

    return thisElm;
}