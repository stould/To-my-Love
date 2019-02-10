import  {loadResourceAsHtml,} from '../libs/resourcesHandler';
import {addDragAndDropToElement,} from '../libs/dragAndDropHandler';

const heartProperties = [
    {
        name: 'width',
        value: '50',
    },
    {
        name: 'height',
        value: '50',
    },
];

function loadHearts(count, container) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    const heartSize = 50;

    for(var i = 0; i < count; i++) {
        const fileName = ('images/heart' + (i + 1) + '.svg');
        var properties = heartProperties;
        properties.push({
            name: 'src',
            value: fileName,
        });
        var newImg = loadResourceAsHtml('img', properties);
        var newDiv = document.createElement('div');
        newDiv.appendChild(newImg);

        newDiv.style.position = 'absolute';
        newDiv.style.top = Math.floor(Math.random() * (height - heartSize)) + 'px';
        newDiv.style.left = Math.floor(Math.random() * (width - heartSize)) + 'px';

        newDiv.ondragstart = function() {
            return false;
        };

        addDragAndDropToElement(newDiv);
        
        container.appendChild(newDiv);
    }
}

(function() {
    var container = document.querySelector('#container');
    container.style.position = 'relative';
    loadHearts(6, container);
})();