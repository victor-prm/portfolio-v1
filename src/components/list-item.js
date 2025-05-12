import './list-item.sass'
import { setElement } from "../js/utils";

export function createListItem(data) {
    const cname = "list-item"
    let title = data.title

    let thisElm = setElement("li", {
        class: cname
    })

    return thisElm;
}