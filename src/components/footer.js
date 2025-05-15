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

    let prevLink = arrowLink({ text: "", link: "/projects" })
    let nextLink = arrowLink({ text: "", link: "/projects", direction: "right" })

    nav.append(prevLink, nextLink)

    thisElm.append(nav)

    window.addEventListener("contentUpdate", () => {
        console.log("Hey! an update!")
    })

    return thisElm;
}