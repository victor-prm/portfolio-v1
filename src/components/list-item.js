import './list-item.sass'
import { getBasePath, setElement } from "../js/utils";
import { projectList } from '../js/project-list';
const IMG_BASE = '/project-imgs/'
let basePath = `${getBasePath()}/detail?id=`
console.log(basePath)

function loadProjectImages(projectId) {
    const projects = projectList()
    const project = projects.find(p => p.id === projectId)

    if (!project) return console.error("Project not found!")

    const images = []
    for (let i = 1; i <= project.num_images; i++) {
        images.push(`${IMG_BASE}${projectId}/${projectId}-${i}.jpg`)
    }

    return images
}

export function createListItem(data) {
    const cname = "list-item"
    let id = data.id;
    let title = data.title
    let year = data.year
    let link = `${basePath}${data.id}`
    let imgSrc = data.thumbnail
        ? `/project-imgs/${id}/${data.thumbnail}`
        : `/project-imgs/${id}/${id}-1.jpg`


    let thisElm = setElement("li", {
        class: cname
    })

    let img = setElement("img", {
        class: `${cname}__thumbnail`,
        src: imgSrc
    })

    let textContainer = setElement("div", {
        class: `${cname}__text-container`
    })
    let projectTitle = setElement("h2", {
        class: `${cname}__title`,
    }).withHTML(`<a href="${link}">${title}</a>`)
    let projectYear = setElement("p", {
        class: `${cname}__year`,
    }).withHTML(year)

    textContainer.append(projectTitle, projectYear)

    thisElm.append(img, textContainer)

    return thisElm;
}