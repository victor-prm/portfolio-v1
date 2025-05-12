import { createListItem } from "../components/list-item";
import { projectList } from "../js/project-list";
import { setElement } from "../js/utils";

export default function Projects() {
    const cname = 'projects'
    const thisElm = setElement("div", {
        class: cname
    })

    let title = setElement("h1").withHTML("Projects")

    let projects = projectList();
    let projectContainer = setElement("ul", {
        class: `${cname}__project-list`
    })

    projects.map(item => projectContainer.append(createListItem(item)))

    thisElm.append(title, projectContainer)

    return thisElm;
}

