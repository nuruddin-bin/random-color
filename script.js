// Changing the background color by genaratin random Hex color by chicking a button


// Global
let msgDiv = null;
window.addEventListener('load', function(){
    main();
});

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
const main = function(){ 
    changeBtn.addEventListener('click', function(){
        const hexCode = getHexCode();
        root.style.background = hexCode;
        
        codeBox.value = hexCode;
    });

    copyBtn.addEventListener('click', function(){
        if(msgDiv != null){
            msgDiv.remove();
            msgDiv = null;
        }

        isHexValid(codeBox.value);
    });

    codeBox.addEventListener('input', function(){  
        const codeValue = codeBox.value;
        root.style.background = `${codeValue}`;
    });

};

// chack hex code validity
const isHexValid = function(hexCode){
    if(/^#([0-9A-F]{3}){1,2}$/i.test(hexCode)){
        navigator.clipboard.writeText(hexCode);
        getToastMsg(`${codeBox.value} copied`);
    }
}

// get Toast Message element
const getToastMsg = function(msg){
    msgDiv = document.createElement('div');

    msgDiv.innerHTML = msg;
    document.body.appendChild(msgDiv);
    msgDiv.className = 'toast-message slid-ani-in';

    msgDiv.addEventListener('click', function(){
        msgDiv.classList.remove('slid-ani-in');
        msgDiv.classList.add('slid-ani-out');

        msgDiv.addEventListener('animationend', function(){
            msgDiv.remove();
            msgDiv = null;
        });
    });
};