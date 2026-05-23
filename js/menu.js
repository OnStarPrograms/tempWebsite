let menu = document.getElementById("menu");
let bottom = document.getElementById("bottom");

bottom.style.zIndex = page_names.length + 2;
menu.style.zIndex = page_names.length + 1;

function toggle_menu(){
    menu.classList.toggle('hidden');
}

function toggleWrapper(page){
    toggle(page.name);
    return page;
}

pages.map((x) => toggleWrapper(x));
let intro = pages.find((x) => x.name === 'introduction');
toggle(intro.name);
