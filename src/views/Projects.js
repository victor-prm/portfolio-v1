import '../style/projects.sass'
import { createListItem } from "../components/list-item";
import { projectList } from "../js/project-list";
import { setElement } from "../js/utils";

export default function Projects() {
    const cname = 'projects'
    const thisElm = setElement("div", {
        class: cname
    })
    let headerCon = document.querySelector(".header__context-info")

    let projects = projectList();
    let projectContainer = setElement("ul", {
        class: `${cname}__project-list`
    })

    projects.map(item => projectContainer.append(createListItem(item)))

    thisElm.append(projectContainer)

    if (headerCon.childElementCount === 0) {
        headerCon.append(headerContext())
    }


    return thisElm;
}

function headerContext() {
    const cname = 'header-context'
    const thisElm = setElement("div", {
        class: cname
    })
    let title = setElement("h1", {
        class: `${cname}__title`
    }).withHTML("Projects")
    thisElm.append(title)
    return thisElm;
}

