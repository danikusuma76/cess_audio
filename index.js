const links =[
    
    {
        label :"Instagram",
        link :"https://instagram.com/jual.mixer.kaliwungu?igshid=YmMyMTA2M2Y=",
    
    },
    {
        label :"Facebook",
        link :"https://www.facebook.com/profile.php?id=100011432105301",
    
    },
    
    {
        label: "WhatsApp",
        link : "https://wa.me/628122503467"
    },
    {
        label :"Detail Toko",
        link :"https://g.co/kgs/11BsJn",
    
    },
    
];
const btnContainer = document.getElementById("btn-container");

for (let i = 0; i < links.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("btn-link");
    btn.innerHTML = links[i].label;
    btn.addEventListener("click", () => clickLink(links[i].link));
    btnContainer.append(btn);
}

function clickLink(url) {
    window.open(url, "_blank");
}