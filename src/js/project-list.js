export function projectList() {
    let list = [
        {
            "title": "Pour Reception",
            "year": "2017",
            "roles": "Interaction Designer",
            "tags": "Arduino, Sound Design, Capacitance, AI",
            "type": "School Work, Exhibition",
            "num_images": "7",
            "id": "pour-reception"
        },
        {
            "title": "HAVE",
            "year": "2018",
            "roles": "Interaction Designer",
            "tags": "Arduino, Light Design, Plants",
            "type": "School Work",
            "num_images": "9",
            "id": "have"
        },
        {
            "title": "Elmer",
            "year": "2017",
            "roles": "Interaction Designer",
            "tags": "Arduino, Raspberry Pi, Slow Technology, NFC/RFID",
            "type": "School Work",
            "num_images": "3",
            "id": "elmer"
        },
        {
            "title": "Newsify",
            "year": "2025",
            "roles": "Frontend Developer",
            "tags": "HTML, Sass, Javascript, Vite, Web Components",
            "type": "School Work",
            "num_images": "6",
            "id": "newsify"
        },
        {
            "title": "Feedelitist",
            "year": "2023",
            "roles": "Frontend Developer",
            "tags": "React, Noodl, AI, MongoDB, HTML, Javascript, CSS, Figma",
            "type": "Client Work",
            "num_images": "9",
            "id": "feedelitist"
        },
        {
            "title": "Noodl",
            "year": "2022",
            "roles": "Design Technologist, Frontend Developer",
            "tags": "React, Noodl, AI, MongoDB, HTML, Javascript, CSS, Figma",
            "type": "Client Work",
            "num_images": "12",
            "id": "noodl"
        },
        {
            "title": "Prodikt",
            "year": "2023",
            "roles": "Design Technologist, Frontend Developer",
            "tags": "React, Noodl, Puppeteer",
            "type": "Client Work",
            "num_images": "4",
            "id": "prodikt"
        },
        {
            "title": "Shine",
            "year": "2022",
            "roles": "Frontend Developer",
            "tags": "React, Noodl, AI, MongoDB, HTML, Javascript, CSS, Figma",
            "type": "Client Work",
            "num_images": "5",
            "id": "shine"
        },
        {
            "title": "Third Nature",
            "year": "2023",
            "roles": "Interaction Designer, Frontend Developer",
            "tags": "React, Noodl, AI, MongoDB, HTML, Javascript, CSS, Figma",
            "type": "Client Work",
            "num_images": "5",
            "id": "third-nature"
        },
        {
            "title": "Bernhard",
            "year": "2017",
            "roles": "Interaction Designer, Design Technologist",
            "tags": "Arduino, Bluetooth, HTML, CSS, Javascript",
            "type": "School Work",
            "num_images": "6",
            "id": "bernhard"
        }
    ]

    let sortedList = list.sort((a, b) => b.year - a.year)
    return sortedList
}