import {
    CONTAINER_OFFSET,
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
    HEARTSIZE,
} from '../libs/constants';

/**
 * Add drag and drop capability to param element that is held by param container
 * @param container {HtmlElement}
 * @param element {HtmlElement}
 */
export var addDragAndDropToElement = function(container, element) {
    element.addEventListener('mousedown', function( event ) {
        const shiftX = event.clientX - element.getBoundingClientRect().left;
        const shiftY = event.clientY - element.getBoundingClientRect().top;
        
        const elementWidth = HEARTSIZE;
        const elementHeight = HEARTSIZE;

        //This is just a turn around, not sure yet how to solve the current problem:
        //When the user clicks near the border of the element, mouseup is not fired. This code below helps to solve:
        if(event.offsetX <= 3 || event.offsety <= 3 || event.offsetX + 3 >= HEARTSIZE || event.offsetY + 3 >= HEARTSIZE) {
            return;
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveAt(event.clientX, event.clientY);
        }
      
        function stopDragging() {
            container.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        }

        function moveAt(clientX, clientY) {
            const diffX = clientX - shiftX - CONTAINER_OFFSET;
            const diffY = clientY - shiftY - CONTAINER_OFFSET;
            const stop = 
                diffX < 0 || 
                diffY < 0 || 
                diffX > (CONTAINER_WIDTH - elementWidth) || 
                diffY > (CONTAINER_HEIGHT - elementHeight);

            if(stop) {
                if(diffX < 0) {
                    element.style.left = '0px';
                }
                if(diffY < 0) {
                    element.style.top = '0px';
                }
                if(diffX > CONTAINER_WIDTH - elementWidth) {
                    element.style.left = (CONTAINER_WIDTH - elementWidth) + 'px';
                }
                if(diffY > CONTAINER_HEIGHT - elementHeight) {
                    element.style.top = (CONTAINER_HEIGHT - elementHeight) + 'px';
                }

                stopDragging();
            } else {
                element.style.left = diffX + 'px';
                element.style.top = diffY + 'px';
            }
        }
      
        container.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function() {
            stopDragging();
        };
    }, false);
};