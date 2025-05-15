import './meta-card.sass'
import { setElement } from "../js/utils";
import { tagList } from './tag-list';

export function metaCard(data) {
    let typeList = data.type;
    let roleList = data.roles;
    let tagsList = data.tags
    //console.log(typeList, roleList, tagsList)

    const cname = "meta-card"

    let thisElm = setElement("hgroup", {
        class: cname
    })

    let tagsContainer = setElement("div", {
        class: `${cname}__tags-container`
    })

    let type = tagList({
        title: "Type",
        tags: data.type
    })
    let role = tagList({
        title: "Role",
        tags: data.roles
    })
    let tags = tagList({
        title: "Tags",
        tags: data.tags
    })

    let description = setElement("p", {
        class: `${cname}__description`
    }).withHTML("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum tempore fugiat suscipit id commodi officiis fuga debitis omnis nesciunt esse, veniam ut nisi necessitatibus eligendi facilis accusamus veritatis vel. Sequi corrupti, quibusdam eius ipsam error nostrum laudantium. Ea, ipsa quibusdam.")

    tagsContainer.append(type, role, tags)
    thisElm.append(tagsContainer,description)

    return thisElm;
}