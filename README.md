# task105

//
function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);
    return unique;
}



//  edit path to image


// uploadImage
function uploadImage() {
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"];

    if (types.indexOf(file.type) == -1) {
        alert("Type not Supported");
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert("Image not Exced 2MG");
        return;
    }

    getImageBase64(file);
    // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
        productImage = reader.result;
    };

    reader.onerror = function () {
        alert("Error !!");
    };
}
