// Changing the background color by genaratin random Hex color by chicking a button


// Global
let msgDiv = null;

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
        
        if(msgDiv != null){
            msgDiv.remove();
            msgDiv = null;
        }
        
        getToastMsg(`${codeBox.value} copied`);
    })

})();

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
}