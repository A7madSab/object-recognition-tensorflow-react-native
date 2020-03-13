function get(url) {
    return new Promise((accept, reject) => {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";
        req.onload = function(event) {
            var resp = req.response;
            if(resp) {
                accept(resp);
            }
        };
        req.send(null);
    });
}

export const changeImage2RawImageData = async (img) => {
    // const response = await fetch(img)
    // console.log("1")
    // const data = await response.arrayBuffer()
    // console.log("2")
    let data = await get(img);
    console.log(data)
    return data
}    

