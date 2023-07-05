const car = {
    img:"https://imgd.aeplcdn.com/370x208/n/rqbmssa_1480082.jpg?q=75",
    model:"Mercedes",
    price:110000,
    year:2019,
    color:"Designo Selenite Grey Magno",
}
const car2 = {
    img:'https://data.favorit-motors.ru/upload/iblock/162/162caf699f44feedc2a6bcf418c32d31.jpg',
    model:"KIA Sportage",
    price:28000,
    year:2023,
    color:"Jungle Green",
}
const car3 = {
    img:"https://images.hgmsites.net/lrg/2020-tesla-roadster-at-2018-grand-basel-show--image-via-bluewin_100669019_l.jpg",
    model:"Tesla Roadster",
    price:200000,
    year:2020,
    color:"White",
}
const car4 = {
    img:"https://www.motorionline.com/wp-content/uploads/2017/03/Ferrari-LaFerrari-Bronzo-Opaco.jpg",
    model:"Ferrari Portofino",
    price:226000,
    year:2021,
    color:"Bronzo Opaco",
}
const cars =[car, car2, car3, car4];
const mercedes =[car];
const kia =[car2];
const tesla =[car3];
const ferrari =[car4];

function fetchcar(carName){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(carName === "cars"){
                resolve(cars);
            }else if(carName === "mercedes") {
              resolve(mercedes);
            }else if(carName === "kia") {
              resolve(kia);
            }else if(carName === "tesla") {
              resolve(tesla);
            } else if(carName === "ferrari") {
                resolve(ferrari);
            }else {
                reject("Product Not Found")
            }
        }, 1000);
    });
}

const input = document.getElementById("input");
const btn = document.getElementById("btn-s");;
const emptyDiv = document.getElementById("car")

btn.onclick = () => {
    const name = input.value
    emptyDiv.innerHTML = "<h4>Loading...</h4>"
    const res = fetchcar(name).then((data) => {
        emptyDiv.innerHTML =""
        for(let i = 0; i < data.length; i++ ){
            emptyDiv.innerHTML +=`
            <div>
            <img src="${data[i].img}" width="150px"
            </div>
            <div>
            <h4>${data[i].model}</h4>
            <p>Price: ${data[i].price} $ </p>
            <p>Year: ${data[i].year}</p>
            <p>Color: ${data[i].color}</p>
        </div>
        ` ;
        }

}).catch ((error) => {
    emptyDiv.innerText = error;
}).finally(() => {
    input.value= "";
});
console.log(res);

}

