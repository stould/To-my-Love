import  {loadResourceAsHtml,} from '../libs/resourcesHandler';
import {addDragAndDropToElement,} from '../libs/dragAndDropHandler';
import {handleTarget,} from '../libs/targetHandler';

import {
    heartProperties,
    HEARTSIZE,
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
} from '../libs/constants';

/**
 * Create a new html resource
 */
function createImageContainer() {
    var container = loadResourceAsHtml('div', [{
        name: 'id',
        value: 'heart',
    },]);
    container.style.position = 'absolute';
    container.style.cursor = 'grab';
    container.style.top = Math.floor(Math.random() * (CONTAINER_HEIGHT - HEARTSIZE)) + 'px';
    container.style.left = Math.floor(Math.random() * (CONTAINER_WIDTH - HEARTSIZE)) + 'px';
    container.ondragstart = function() {
        return false;
    };
    return container;
}

/**
 * Load all the hearts and add them to the main container
 * @param count {Integer}
 * @param container {HtmlElement}
 */
function loadHearts(count, container) {
    for(var i = 0; i < count; i++) {
        const fileName = ('images/heart' + (i + 1) + '.svg');
        var properties = heartProperties;

        properties.push({
            name: 'src',
            value: fileName,
        });

        var newImage = loadResourceAsHtml('img', properties);
        var imageContainer = createImageContainer();
        imageContainer.appendChild(newImage);
        addDragAndDropToElement(container, imageContainer);
        
        container.appendChild(imageContainer);
    }
}

/**
 * Main function to load the library and setup things properly
 */
(function() {
    var container = document.querySelector('#container');
    container.style.position = 'relative';
    loadHearts(6, container);
    handleTarget(document.querySelector('#target'));
})();