let namepage = document.getElementById("namepage");
    let name1 = `${arr[1]}`;
    let element = document.createElement("div");
    element.className = "box";
    element.setAttribute("title", "Element");
    element.appendChild(document.createTextNode(name1));
    namepage.appendChild(element);