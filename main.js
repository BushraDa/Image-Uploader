import { upload_image, URL } from "./api.js";
import { displayImage, update_progress } from "./functions.js";

const drop_area = document.querySelector(".drop");
const btn_file_upload = document.querySelector("button");
const input_file_upload = document.querySelector("input");
const progress_section = document.getElementById("progress_section");
const upload_section = document.getElementById("upload_section");
const finish_section = document.getElementById("finish_section");
//const img_display = document.getElementById("img-display");
//const img_link = document.getElementById("img-link");

let file;

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
    upload(file)
})
btn_file_upload.onclick = () => {
    input_file_upload.click()
}
input_file_upload.addEventListener("change", function() {
    file = this.files[0]
    upload(file)
})

async function upload(file) {
    progress_section.style.display = 'block'
    upload_section.style.display = 'none'
    const path = await upload_image(file);
    progress_section.style.display = 'none'
    finish_section.style.display = 'block'
    //img_display.src = URL + path;
    //img_link.val = URL + path;
}