
let drumKit = {
    w:["images/crash.png","sounds/crash.mp3"],
    a:["images/kick.png","sounds/kick-bass.mp3"],
    s:["images/snare.png","sounds/snare.mp3"],
    d:["images/tom1.png","sounds/tom-1.mp3"],
    j:["images/tom2.png","sounds/tom-2.mp3"],
    k:["images/tom3.png","sounds/tom-3.mp3"],
    l:["images/tom4.png","sounds/tom-4.mp3"]
};

let btns=document.querySelectorAll("button");
for (let btn of btns){
    btn.addEventListener("click", () => {
        addNoise(btn.className[0])
    });
}

document.addEventListener("keydown", (event) => {
    addNoise(event.key)
});

function addNoise(pressedBtn)
{
    var audio = new Audio(drumKit[pressedBtn][1]);
    audio.play();

    let btnSrc = '.' + pressedBtn;
    document.querySelector(btnSrc).innerHTML = "<img src=\"" + drumKit[pressedBtn][0] +"\">"

    //Background-Image
    // let image = "url('" + drumKit[pressedBtn][0] + "')";
    // document.querySelector(btnSrc).style.backgroundImage = image;

    //Replacing Button to Img Tag
    // let button = document.querySelector(btnSrc);
    // let img = document.createElement("img");
    // img.textContent = button.textContent;
    // img.setAttribute("src",drumKit[pressedBtn][0]);
    // button.parentNode.replaceChild(img,button);
}

