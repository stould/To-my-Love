import  {loadResourceAsHtml,} from '../libs/resourcesHandler';
import {addDragAndDropToElement,} from '../libs/dragAndDropHandler';
import {getRandomInt,} from '../libs/helper';

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
export var loadHearts = function (count, container) {
    var that = {
        heartContainers: [],
        heartCount: count,
        delegate: {},
    };

    var randomizeHearts = function () {
        for(var i = 0; i < that.heartContainers.length; i++) {
            container = that.heartContainers[i];
            container.style.top = getRandomInt(CONTAINER_HEIGHT - HEARTSIZE) + 'px';
            container.style.left = getRandomInt(CONTAINER_WIDTH - HEARTSIZE) + 'px';
        }
    };
    
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
        that.heartContainers.push(imageContainer);
        container.appendChild(imageContainer);
    }

    that.delegate.randomizeHearts = randomizeHearts;

    return that;
};