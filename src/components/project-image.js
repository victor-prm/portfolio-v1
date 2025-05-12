import './project-image.sass'
import { setElement } from "../js/utils";
import { imgWrapper } from './small';

export default function projectImage(imgSrc) {
    const cname = 'project-image'
    const thisElm = setElement("div",{
        class: `${cname}__wrapper`
    })
    const img = setElement("img", {
        class: cname,
        src: imgSrc
    })

    thisElm.append(img)

    return thisElm;
}

