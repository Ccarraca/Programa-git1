const inputs =ducument.queryselectorall(".input");

function focusfunc() {
    let parent =this.parentNode;
    parent.classlist.add("focus");

    function blurfunc() {
        let parent =this.parentNode;
        if( this.value==) {
            parent.classlist.add("focus");

        }
        
    
}
inputs.array.forEach((input) => {
    input.addeventlistener("focus",focusfunc);
    input.addeventlistener("blur",blurfunc);
    
});
