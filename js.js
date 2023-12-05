function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
         getResponce1()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}
}

async function getResponce() {
    let responce = await fetch("shop.json")
    let content = await responce.text()
    content = JSON.parse(content)
    content = content.splice(0, 10)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                `
    }


}

async function getResponce1() {

    let responce = await fetch("shop.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 10)
    //content.sort()
    console.log(content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }
    content_price=content.sort((a, b) => a.price - b.price);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_price) {
                node_for_insert.innerHTML += `
                <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount" value="0"></p>
        </li>
                        `
            }

}
sort()