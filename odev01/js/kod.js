document.addEventListener("DOMContentLoaded", function () {
  
    yeniOyun();

});
let dogruSecim;
let kartSayısı;
let secilenNo;
let azaltılanSkor;


const yeniOyun = () => {
    document.getElementById("kartlar").innerHTML = "";
    dogruSecim;
    kartSayısı = 3;
        secilenNo = kartSayısı - 1;
        dogruSecim = (Math.floor(Math.random() * kartSayısı));
    
    document.getElementById("textId").innerText = "Kedi kartını bulmak için kartın üzerine tıklamalısın.";
    document.getElementById("kalanHak").innerText = secilenNo;
    kartOlustur(kartSayısı);
    document.getElementById("panel").style.display="block";
}

const kartSec = (card) => {
    secilenNo--;
    document.getElementById("kalanHak").innerText = secilenNo;
    if (card.id === "img" + dogruSecim) {
        card.setAttribute("src", "img/kedi.png");
        oyunuBitir(true);
    }
    else { 
        card.setAttribute("src", "img/kopek.png");
        secilenNo == 0 ? oyunuBitir(false) : yanlışMesaj();
    }

}
const yanlışMesaj = () => {
    document.getElementById("textId").innerText = "Yanlış Seçim. Tekrar deneyin.";
}
const oyunuBitir = (answer) => {
    let message = answer === true ? "Kazandınız!!. Tebrik ederiz." : "Kaybettiniz!!.";
    let container = message + 'Yeni bir oyun oynamak istersen ' +
        '<span onclick="yeniOyun()" style="cursor:pointer;color:white"><u>buraya</u></span> ' +
        'tıklayabilirsin.';
    document.getElementById("textId").innerHTML = container;
    let cards = document.querySelectorAll(".kart");
    cards.forEach(element => {
        element.removeAttribute("onclick");
        if(element.id==="img"+dogruSecim){
            element.setAttribute("src","img/kedi.png")
        }
    });

}
const kartOlustur = (kartSayısı) => {
    for (var i = 0; i < kartSayısı; i++) {
        let element = document.createElement("img");
        element.setAttribute("src", "img/default.png");
        element.className = "kart";
        element.setAttribute("onclick", "kartSec(this)");
        element.id = "img" + i;
        document.getElementById("kartlar").appendChild(element);
    }
}





