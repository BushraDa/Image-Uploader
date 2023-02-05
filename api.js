const URL = 'https://bushrada.bsite.net/api/'

async function upload_image(img) {
    let send_data = new FormData();
    send_data.append('img', img);
    const request = {
        method : 'POST',
        body : send_data
        }
    const response = await fetch (URL + 'ImageUploading' , request);        
    return await response.text()
}

export { upload_image }