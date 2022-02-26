// Changing the background color by genaratin random RGB color by chicking a button


// Get elements
const root = document.getElementById('root');
const btn = document.getElementById('btn');

// Main function
(function() { 
    btn.addEventListener('click', function(){
        const RGBCode = genarateRGB();
        root.style.background = RGBCode;
    })
})();

// Random color genaretor function  rgb(0, 0, 0)
function genarateRGB(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
};