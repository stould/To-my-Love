/* global resourcesHandler */
/*exported setup*/

var addDragAndDrop = function(element) {

    element.addEventListener("mousedown", function( event ) {
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
        document.body.append(element);
      
        moveAt(event.pageX, event.pageY);
      
        // centers the ball at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
      
        // (3) move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // (4) drop the ball, remove unneeded handlers
        element.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    }, false);
};

function loadHearts(count, container) {
    const width = container.clientWidth;
    const height = container.clientHeight;

    const heartSize = 50;
    
    var handler = resourcesHandler();

    for(var i = 0; i < count; i++) {
        const fileName = ('images/heart' + (i + 1) + '.svg');
        const heartProperties = [
            {
                name: 'width',
                value: '50',
            },
            {
                name: 'height',
                value: '50',
            },
            {
                name: 'src',
                value: fileName,
            },
        ];
        
        var newImg = handler.loadResourceAsHtml('img', heartProperties);
        var newDiv = document.createElement('div');
        newDiv.appendChild(newImg);

        newDiv.style.position = 'absolute';
        newDiv.style.top = Math.floor(Math.random() * (height - heartSize)) + 'px';
        newDiv.style.left = Math.floor(Math.random() * (width - heartSize)) + 'px';

        newDiv.ondragstart = function() {
            return false;
        };
        addDragAndDrop(newDiv);
        
        container.appendChild(newDiv);
    }
}

function setup() {
    var container = document.querySelector('#container');
    container.style.position = 'relative';
    loadHearts(6, container);
}