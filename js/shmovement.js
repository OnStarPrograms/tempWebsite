const page_names = ['introduction', 'programmer', 'socials', 'game', 'chatroom', 'aero_ring'];
const magic_mouse = new mouse();
let pages = init(page_names);
let active_page = '';


function callBack(page_name){
    active_page = page_name;
}

function init(page_names){
    return page_names.map((x) => new page(x));
}

function updateWindows(pages){
    let update_page = pages.find((x) => x.name === active_page);
    const page_bounding = update_page.dom_object.getBoundingClientRect();

    if (magic_mouse.prev.x === 0 
        && magic_mouse.prev.y === 0
    ){
        magic_mouse.prev.x = magic_mouse.x - page_bounding.left;
        magic_mouse.prev.y = magic_mouse.y - page_bounding.top;
    }

    update_page.dom_object.style.left = (magic_mouse.x - magic_mouse.prev.x - 30) + 'px';
    update_page.dom_object.style.top = (magic_mouse.y - magic_mouse.prev.y - 30) + 'px';
    update_page.coord.z = update_page.dom_object.style.zIndex = page_names.length;
    
    
}

function updateZ(x){
    x.coord.z = (x.coord.z > -5)? x.coord.z - 1: x.coord.z;
    x.dom_object.style.zIndex = x.coord.z;
    return x
}

function toggle(caller){
    let update_page = pages.find((x) => x.name === caller);
    update_page.dom_object.classList.toggle('hidden');
}




// ------------- Event Listeners ----------------------
document.addEventListener('mousedown', function(event) {
    magic_mouse.track = true;
});

document.addEventListener('mouseup', function(event) {
    if (magic_mouse.track === true
        && active_page !== ''
    ){
        let update_page = pages.find((x) => x.name === active_page);
        update_page.dom_object.style.zIndex = 4;
        active_page = '';
        magic_mouse.prev.x = magic_mouse.prev.y = 0;
    }
    pages = pages.map((x) => updateZ(x));
    magic_mouse.track = false;
});


document.addEventListener('mousemove', function(event) {
    if (magic_mouse.track === true
        && active_page !== ''
    ){
        magic_mouse.x = event.clientX;
        magic_mouse.y = event.clientY;
        updateWindows(pages);
    }
});
// ----------------------------------------------------