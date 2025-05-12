import { setElement } from "../js/utils";

export default function Projects() {
  const thisElm = setElement("div",{
    class: 'projects'
  })

  let title = setElement("h1").withHTML("Projects")
  thisElm.append(title)
 
  return thisElm;
}

