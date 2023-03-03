
function displayImage(file) {
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
}

function update_progress(element) { 
    var width = 1;
    var identity = setInterval(scene, 20);
    function scene() {
      if (width >= 100) {
        clearInterval(identity);
      } else {
        width++; 
        element.value = width; 
      }
    }
  }

export { displayImage, update_progress }