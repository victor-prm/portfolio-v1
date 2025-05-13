import './tag-list.sass'
import { setElement } from "../js/utils";

export function tagList(data) {
    const cname = "tags"
    let title = data.title || "";
    let tags = data.tags || [];
    console.log(tags)

    let thisElm = setElement("div", {
        class: cname
    })

    let titleText = setElement("h2", {
        class: `${cname}__title`,
    }).withHTML(title)

    let tagList = setElement("ul", {
        class: `${cname}__list`,
    })

    tags.map(tag => tagList.append(tagItem(tag)))

    thisElm.append(titleText, tagList)

    return thisElm;
}

function tagItem(name) {
    const cname = "tags-item"
    let item = setElement("li", {
        class: cname
    }).withHTML(name)

    return item
}