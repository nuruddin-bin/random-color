// Changing the background color by genaratin random Hex color by chicking a button


// get all element
const root = document.getElementById('root');
const changeBtn = document.getElementById('changeBtn');
const codeBox = document.getElementById('codeBox');
const copyBtn = document.getElementById('copyBtn');

// genarate Hex codo #3c3feb
function getHexCode() {
    const hexCode = Math.floor(Math.random()*16777215).toString(16);

    return `#${hexCode}`;
}

// show color in root element
(function(){ 
    changeBtn.addEventListener('click', function(){
        const hexCode = getHexCode();
        root.style.background = hexCode;
        
        codeBox.value = hexCode;
    })

    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(codeBox.value);
    })

})();