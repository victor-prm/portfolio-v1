export function setElement(tag, attributesObj) {
    function setAttributes(el, attrs) {
        Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    }

    if (typeof tag !== "string") throw new Error("setElement: 'tag' must be a valid string.");
    let newElm = document.createElement(tag);
    if (attributesObj && typeof attributesObj === "object") setAttributes(newElm, attributesObj);

    // Attach a method to set content directly on the created element
    newElm.withHTML = function (html) {
        if (typeof html !== "undefined") {
            this.innerHTML = String(html); // Convert to string to avoid errors
        }
        return this; // Enables method chaining
    };


    return newElm; // Return the actual element
}

export function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

export function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export function getLS(key) {
    return JSON.parse(localStorage.getItem(key))
}

export function setLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getCurrentRoute() {
  return location.pathname;
}