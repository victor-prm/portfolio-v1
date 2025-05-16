import '../style/detail.sass'
import { projectList } from "../js/project-list";
import { getBasePath, setElement } from "../js/utils";
import imageGrid from '../components/image-grid';
import { metaCard } from '../components/meta-card';

let data = getContent().current;

export default function detail() {
  const cname = 'project'
  const thisElm = setElement("article", {
    class: cname
  })

  let projectImages = loadProjectImages(data.id);
  let imageContainer = imageGrid(projectImages);

  //Add meta card to beginning of grid
  const allTags = { type: data.type, roles: data.roles, tags: data.tags }
  imageContainer.prepend(metaCard(allTags));

  thisElm.append(imageContainer)

  headerContext();
  setTimeout(() => { updateFooter() }, 10)

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
  const basePath = getBasePath();

  for (let i = 1; i <= project.num_images; i++) {
    images.push(`${basePath}/project-imgs/${projectId}/${projectId}-${i}.jpg`)
  }

  return images
}

function updateFooter() {
  let navContainer = document.querySelector(".footer__nav")

  let previous = getContent().previous;
  let previousLink = navContainer.querySelector(".arrow-link--left")

  let next = getContent().next;
  let nextLink = navContainer.querySelector(".arrow-link--right")

  let basePath = getBasePath()
  let baseUrl = `${basePath}/detail?id=`
  console.log(basePath,baseUrl)


  if (previous) {
    previousLink.style.display = "block"
    previousLink.innerHTML = `◅ ${previous.title}`
    previousLink.href = `${baseUrl}${previous.id}`
  } else {
    previousLink.style.display = "none"
  }

  if (next) {
    nextLink.style.display = "block"
    nextLink.innerHTML = `${next.title} ▻`
    nextLink.href = `${baseUrl}${next.id}`
  } else {
    nextLink.style.display = "none"
  }

}

