setInterval(() => {

    let heart = document.createElement("div");

    heart.innerHTML = "💚";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100+"vw";

    heart.style.top = "-20px";

    heart.style.fontSize = "25px";

    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);

},500);