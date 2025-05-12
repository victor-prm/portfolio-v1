import '../style/detail.sass'
import { projectList } from "../js/project-list";
import { setElement } from "../js/utils";
import projectImage from '../components/project-image';

let data = getContent().current;

export default function Projects() {
  const cname = 'project'
  const thisElm = setElement("article", {
    class: cname
  })

  let projectImages = loadProjectImages(data.id);
  let imageContainer = setElement("section", {
    class: `${cname}__image-container`
  })

  projectImages.map(image => imageContainer.append(projectImage(image)))

  thisElm.append(imageContainer)

  headerContext();

  return thisElm;
}

function headerContext() {
  const cname = 'header-context'
  console.log(data)


  const thisElm = setElement("div", {
    class: cname
  })
  let title = setElement("h1", {
    class: `${cname}__title`
  }).withHTML(data.title)
  thisElm.append(title)

  getContent()


  //APPEND
  let headerCon = document.querySelector(".header__context-info")
  if (headerCon.childElementCount === 0) {
    headerCon.append(thisElm)
  }
}

function getContent() {
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");

  let projectArray = projectList();

  let index = projectArray.findIndex(item => item.id === id);
  let currentProject = projectArray[index];

  //console.log(index);
  //console.log(currentProject);

  let previousproject = {}
  let nextProject = {};
  if (index > 0) { } previousproject = projectArray[index - 1]
  if (index < projectArray.length) nextProject = projectArray[index + 1]

  let content = {
    previous: previousproject,
    current: currentProject,
    next: nextProject
  }
  //console.log(content)
  return content;
}

function loadProjectImages(projectId) {
  const projects = projectList()
  const project = projects.find(p => p.id === projectId)

  if (!project) return console.error("Project not found!")

  const images = []
  for (let i = 1; i <= project.num_images; i++) {
    images.push(`/project-imgs/${projectId}/${projectId}-${i}.jpg`)
  }

  return images
}