import './project-image.sass'
import { setElement } from "../js/utils";

export default function projectImage(imgSrc) {
    const cname = 'project-image'

    const thisElm = setElement("img", {
        class: cname,
        src: imgSrc
    })

    return thisElm;
}

