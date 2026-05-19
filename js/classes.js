class page{
    /*
        name -> dom name (string)
        dom_object -> dom object (DOM)
        coord.x -> box top left coord x (int)
        coord.y -> box top left coord y (int)
    */

    // constructor(page_name: string)
    
    constructor(page_name){
        this.name = page_name;
        this.dom_object = document.getElementById(page_name);
        
        this.dom_object.style.position = 'absolute';

        this.coord = {
            x: this.dom_object.style.left,
            y: this.dom_object.style.top,
            z: 0
        };
    };
};

class mouse {
    constructor(){
        this.x = 0,
        this.y = 0,
        this.prev = {
            x: 0,
            y: 0
        }
        this.track = false
    }
}