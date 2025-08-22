// Immediately Invoked Function Expression (IIFE)

(function(chai){
    console.log(`DB CONNECTED`);
})();

(() => {
    console.log(`DB Two CONNECTED`);
})();
    
    ((name) => {
        console.log(`Hello ! ${name}`);
    })('Monojit');