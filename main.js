const drop_area = document.querySelector(".drop");
const btn = document.querySelector("button");
const file_input = document.querySelector("input");

let file;

btn.onclick = () => {
    file_input.click()
}
file_input.addEventListener("change", function() {
    file = this.files[0]
    displayImage();
    
})

drop_area.addEventListener("dragover", (event) => {
    event.preventDefault();
    drop_area.classList.add("drop-active")
})

drop_area.addEventListener("dragleave", (event) => {
    event.preventDefault();
    drop_area.classList.remove("drop-active")
})

drop_area.addEventListener("drop", (event) => {
    event.preventDefault()
    file = event.dataTransfer.files[0]
    displayImage();
})

function displayImage() {
    let validExtensions = ['image/jpg', 'image/png', 'image/jpeg']
    if(validExtensions.includes(file.type)) {
        let fileReader = new FileReader()
        fileReader.onload = () => {
            let url = fileReader.result
            let img = `<img src="${url}" alt="">`
            drop_area.innerHTML = img;
        }
        fileReader.readAsDataURL(file)
    } else console.log("not allowed");
    drop_area.classList.remove("drop-active")
}