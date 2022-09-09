import {producto} from "./file.js";

const body_fruits = document.querySelector(".body_frutaP");
const body_frutas = document.querySelector(".body_kart_content");

let html = "";
let purchased = {};

producto.forEach(({id,name,stock,url,price}) => {
  html += `  
    <div class="fruta">
        <div class="img">
            <img src="${url}" alt="${name}">
        </div>
        <div class="body_fruta" id="${id}">
            <h2 class="body_fruta_title">${name}</h2>
            <p class="body_fruta_precio">Precio: ${price}</p>
            <p class="body_fruta_stock">Stock: ${stock}</p>
            <button class="btn">Añadir al car!</button>
        </div>
    </div>
    `;
});

body_fruits.innerHTML = html;

const ico_kart = document.querySelector("#ico_kart");
const body_card = document.querySelector("#body_kart");

ico_kart.addEventListener("click", () => {
      body_card.classList.toggle("body_kart-show");
      
});

function writekar(){
    
    let html ="";

     const arraykar = Object.values(purchased);

     arraykar.forEach(({id,name,stock,url,price,unit}) =>{
        html += `
        <div class="body_kart_content-card" id="${id}">
        
                <div class="bkart_img">
                    <img src="${url}" alt="">
                </div>
                
                <h4 class="bkart_title">${name}</h4>
                <p class="body_fruta_precio">Precio: ${price}</p>
                <p class="body_fruta_stock" >Stock: ${stock}</p>
                
                <div class="bkart_iconos" id="${id}">
                    <span class="ico-btn_unit" id="${id}" ><img  class="plus" src="./images/mas-color.png" alt="mas"></span>
                    <span class= "ico-btn_unit"  id="unit">${unit}</span>
                    <span class="ico-btn_unit" id="${id}"><img class="rest" src="./images/rest-color.png" alt=""></span>
                    <span class="ico-btn_unit" id="${id}"><img class="delete" src="./images/trash-color.png" alt=""></span>
                </div>
            </div>  `;
     });
     body_frutas.innerHTML = html;
}

    body_fruits.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn")){
       const idfruta = +e.target.parentElement.id;
        const sellfruta = producto.find((item) => item.id == idfruta);

         if( purchased[idfruta]) {
             purchased[idfruta].unit++;
         }else{
             purchased[idfruta] = sellfruta;
             purchased[idfruta].unit = 1;
     }
     writekar();
    }
});

body_frutas.addEventListener("click", (e) =>{
    if (e.target.classList.contains("plus")) {
        const idfruta = +e.target.parentElement.id;
        if(purchased[idfruta].unit < purchased[idfruta].stock) {
        purchased[idfruta].unit++; 
        };
        if (purchased[idfruta].unit === purchased[idfruta].stock) {
            alert("Has alcanzado el limite -stock- de este producto");
        }          
    }

    if (e.target.classList.contains("rest")) {
        const idfruta = +e.target.parentElement.id;
        purchased[idfruta].unit--; 
         if(purchased[idfruta].unit === 0){
            delete purchased[idfruta];
         }       
    }

    if (e.target.classList.contains("delete")) {
        const idfruta = +e.target.parentElement.id;
        delete purchased[idfruta];        
    }

    writekar();
});


let enka = [document.querySelector("#unit")];
console.log(enka);


