import './list-item.sass'
import { setElement } from "../js/utils";

export function createListItem(data) {
    const cname = "list-item"
    let title = data.title

    let thisElm = setElement("li", {
        class: cname
    })

    let projectTitle = setElement("h2").withHTML(title)
    thisElm.append(projectTitle)

    return thisElm;
}