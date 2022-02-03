
/**
 * get selector
 * @param {string} selector
 * @returns document element
 */
function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * hide and show document elements
 * @param {string} selector - change display style to 'none'
 * @param {string} selector - change display style to 'block'
 * @returns document display style
 */
function hideShowElements(hideElement, showElement) {
    getElement(hideElement).style.display = 'none';
    getElement(showElement).style.display = 'block';
}

getElement('#edit-button').addEventListener('click', function() {
    getElement('.lower-section-placeholder').style.display = 'none';
    getElement('.lower-section-style').style.display = 'none';
    getElement('.lower-section-edit').style.display = 'block';
    const highSectionText = getElement('.content').innerHTML;
    getElement('.lower-section-textarea').value = highSectionText;
});

getElement('#save-button').addEventListener('click', function() {
    const lowerSectionText = document.querySelector('.lower-section-textarea').value;
    getElement('.content').innerHTML = `${lowerSectionText}`;
});

getElement('#style-button').addEventListener('click', function() {
    getElement('.lower-section-placeholder').style.display = 'none';
    getElement('.lower-section-edit').style.display = 'none';
    getElement('.lower-section-style').style.display = 'block';
});

for (let i = 0; i < document.querySelectorAll('.text-size-radio-buttons').length; i++) {
    document.querySelectorAll('.text-size-radio-buttons')[i].addEventListener('click', function() {
        if (document.querySelectorAll('.text-size-radio-buttons')[0]) {
            getElement('.content').style.fontSize = this.value;  
        }
        if (document.querySelectorAll('.text-size-radio-buttons')[1]) {
            getElement('.content').style.fontSize = this.value;  
        }
        if (document.querySelectorAll('.text-size-radio-buttons')[2]) {
            getElement('.content').style.fontSize = this.value; 
        }
        if (document.querySelectorAll('.text-size-radio-buttons')[3]) {
            getElement('.content').style.fontSize = this.value;  
        }
        if (document.querySelectorAll('.text-size-radio-buttons')[4]) {
            getElement('.content').style.fontSize = this.value; 
        }
    });
}

getElement('#font-selector').addEventListener('change', function(){
    getElement('.content').style.fontFamily = this.value;
});

getElement('.bold-text').addEventListener('click', function() {
    if(this.checked) {
        getElement('.content').style.fontWeight = 'bold';
    } else {
        getElement('.content').style.fontWeight = 'normal';
    }
});

getElement('.italic-text').addEventListener('click', function() {
    if(this.checked) {
        getElement('.content').style.fontStyle = 'italic';
    } else {
        getElement('.content').style.fontStyle = 'normal';
    }
});

getElement('#Color-button').addEventListener('click', function() {
    getElement('.text-color-block').style.display = 'block';
});

for (let i = 0; i < document.querySelectorAll('.all-color').length; i++) {
    document.querySelectorAll('.all-color')[i].addEventListener('click', function() {
        if (getElement('.content').classList.length > 1) {
            getElement('.content').classList.remove(getElement('.content').classList[1]);
        }
        getElement('.content').classList.add(`text-color${i+1}`);
    });
}

getElement('#BgColor-button').addEventListener('click', function() {
    getElement('.background-color-block').style.display = 'block';
});

for (let i = 0; i < document.querySelectorAll('.all-bgColor').length; i++) {
    document.querySelectorAll('.all-bgColor')[i].addEventListener('click', function() {
        if (getElement('.content').classList.length > 1) {
            getElement('.content').classList.remove(getElement('.content').classList[1]);
        }
        getElement('.content').classList.add(this.classList[1]);
    });
}

function hideColorPopup(event, selector) {
    if (event.target.closest(selector) === null) {
        document.querySelector(selector).style.display = 'none';
    }
}

document.addEventListener('mousedown', function(e) {
    hideColorPopup(e, '.text-color-block');
    hideColorPopup(e, '.background-color-block');
});

getElement('#add-button').addEventListener('click', function() {
    hideShowElements('.editor-content', '.section-add-button');
});

getElement('#back-button').addEventListener('click', function() {
    hideShowElements('.section-add-button', '.editor-content');
});

getElement('#list').addEventListener('click', function() {
    hideShowElements('.table-configuration-container', '.list-configuration-container');
});

getElement('#table').addEventListener('click', function() {
    hideShowElements('.list-configuration-container', '.table-configuration-container');
});

getElement('#create-button').addEventListener('click', function() {
    const rows = getElement('#row-table').value;
    const cells = getElement('#cell').value;
    const widthOfCell = getElement('#width-of-cell').value;
    const heightOfCell = getElement('#height-of-cell').value;
    const borderWidth = getElement('#border-width').value;
    const borderColor = getElement('#border-color-selector').value;
    const borderType = getElement('#border-type-selector').value;
    const lists = getElement('#count-of-list').value;
    const typeOfMark = getElement('#type-of-mark-selector').value;
    let lowSectionTextEdit = getElement('.lower-section-textarea');

    if (getElement('#table').checked) {
        let tableResult = `<table border="${borderWidth}"; bordercolor="${borderColor}";><style>table { border-style: ${borderType}; }</style>`;
        for(let i = 1; i <= rows; i++) {
            tableResult += '<tr>';
            for(let u = 1; u <= cells; u++) {
                tableResult += `<td style="width:${widthOfCell}px; height:${heightOfCell}px"></td>`;
            }
            tableResult += '</tr>';
        }
        tableResult += '</table>';
        lowSectionTextEdit.value += tableResult;
    } else {
        let listResult = `<ul type="${typeOfMark}">`;
        for (let i = 1; i <= lists; i++) {
            listResult += '<li>Текст</li>';
        }
        listResult += '<ul></ul>';
        lowSectionTextEdit.value += listResult;
    }
    
    hideShowElements('.section-add-button', '.editor-content');
});

