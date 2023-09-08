


var eka_id = document.getElementById("eka");
eka_id.classList.add
("rivit_vierekkain");

var jokaToinen = document.getElementById("toka");
jokaToinen.classList.add("joka_toinen");


var jokaToinenOdd = document.getElementById("kolmas");
jokaToinenOdd.classList.add("joka_toinen_odd");


var linkList = document.links;

var pdfImg = new Image(24, 24);
pdfImg.src = "./images/file-pdf-solid.svg"
pdfImg.setAttribute("id","pdfkuva");


var mailImg = new Image(24, 24);
mailImg.src = "./images/envelope-solid.svg"
mailImg.setAttribute("id","mailkuva");


var arrowImg = new Image(24, 24);
arrowImg.src = "./images/arrow-up-right-from-square-solid.svg"
arrowImg.setAttribute("id","arrowkuva")

var arrowImg2 = new Image(24, 24);
arrowImg2.src = "./images/arrow-up-right-from-square-solid.svg"
arrowImg2.setAttribute("id","arrowkuva2")

for (let i = 0; i < linkList.length; i++)
{
    linkList[i].classList.add("dotted");
        
    if (document.links[i].href.slice(-3) == "pdf"){
        
        
        linkList[i].appendChild(pdfImg)
        document.getElementById("pdfkuva").style.paddingLeft = "1rem"
        
        

    } 

    if (document.links[i].href.includes("@")){
        linkList[i].prepend(arrowImg2)
        document.getElementById("arrowkuva2").style.paddingRight = "1rem"
        linkList[i].prepend(mailImg)
        document.getElementById("mailkuva").style.paddingRight = "1rem"


    }

    if (document.links[i].href.includes("http://") || document.links[i].href.includes("https://")){
        linkList[i].prepend(arrowImg)
        document.getElementById("arrowkuva").style.paddingRight = "1rem"
    }

    

    
}








