import { upload_image } from "./api.js";

const drop_area = document.querySelector(".drop");
const btn_file_upload = document.querySelector("button");
const input_file_upload = document.querySelector("input");
let file;

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
    var res = upload_image(file);
    console.log(res)
})
btn_file_upload.onclick = () => {
    input_file_upload.click()
}
input_file_upload.addEventListener("change", function() {
    file = this.files[0]
    var res = upload_image(file);
    console.log(res)
})