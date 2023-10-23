

// testicommentti
var eka_id = document.getElementById("eka");
eka_id.classList.add
("rivit_vierekkain");

var jokaToinen = document.getElementById("toka");
jokaToinen.classList.add("joka_toinen");


var jokaToinenOdd = document.getElementById("kolmas");
jokaToinenOdd.classList.add("joka_toinen_odd");


var linkList = document.links;


const isExternalLink = (url) => {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host !== window.location.host;
};



for (let i = 0; i < linkList.length; i++)
{
    linkList[i].classList.add("dotted");
    
    
    if (document.links[i].href.slice(-3) == "pdf"){
        
        
        const pdfElement = document.createElement("i");
        pdfElement.setAttribute("class", "fa-solid fa-file-pdf")
        pdfElement.style.color = "940040";
        pdfElement.style.paddingLeft = "1rem";
        linkList[i].appendChild(pdfElement)
        
        

    } 

    

    

    if (isExternalLink(document.links[i].href) == true){
        
        

        const elemnte = document.createElement("i");
        elemnte.setAttribute("class", "fa-solid fa-arrow-up-right-from-square")
        elemnte.style.color = "#95a686";
        elemnte.style.paddingRight = "1rem";
        linkList[i].prepend(elemnte)


    
        


        
        
    }

    if (document.links[i].href.includes("@")){
        
        const elemnteMail = document.createElement("i");
        elemnteMail.setAttribute("class", "fa-solid fa-envelope-circle-check")
        elemnteMail.style.color = "#ffa200";
        elemnteMail.style.paddingRight = "1rem";
        linkList[i].prepend(elemnteMail)


    }
    
}








