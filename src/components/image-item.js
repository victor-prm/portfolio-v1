import './image-item.sass'
import { setElement } from "../js/utils";

export default function projectImage(imgSrc) {
  const cname = 'project-image';

  const wrapper = setElement("div", {
    class: `${cname}__wrapper masonry-item`
  });

  const img = setElement("img", {
    class: cname,
    src: imgSrc,
    loading: "lazy" // optional, recommended
  });

  // On image load, dispatch event on masonry container
  img.addEventListener("load", () => {
    const masonryContainer = document.querySelector(".masonry");
    if (masonryContainer) {
      masonryContainer.dispatchEvent(new CustomEvent("imageLoaded"));
    }
  });

  wrapper.append(img);
  return wrapper;
}