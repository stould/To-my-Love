import {
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
    HEARTSIZE,
    TARGETSIZE,
    TIMECOUNTER,
} from '../libs/constants';

import {getRandomInt,} from '../libs/helper';

/**
 * Handler to the target element
 * @param target {HtmlElement}
 */
export var handleTarget = function(modalHandler, heartHandler, target) {
    var timer = document.getElementById('timer');
    var colisionCounter = document.getElementById('colisionCounter');
    
    var start = new Date().getTime();
    var end = null;

    function randomizeEverything() {
        target.style.top = getRandomInt(CONTAINER_HEIGHT - TARGETSIZE) + 'px';
        target.style.left = getRandomInt(CONTAINER_WIDTH - TARGETSIZE) + 'px';
        heartHandler.delegate.randomizeHearts();
    }

    function countColisions() {

        const targetRadius = TARGETSIZE / 2.0;
        const heartRadius = HEARTSIZE / 2.0;

        const targetCenterX = parseInt(target.style.left.replace('px', '')) + targetRadius;
        const targetCenterY = parseInt(target.style.top.replace('px', '')) + targetRadius;

        var count = 0;

        for(var i = 0; i < heartHandler.heartCount; i++) {
            const currentHeart = heartHandler.heartContainers[i];

            const heartCenterX = parseInt(currentHeart.style.left.replace('px', '')) + heartRadius;
            const heartCenterY = parseInt(currentHeart.style.top.replace('px', '')) + heartRadius;

            const distance = Math.hypot(targetCenterX - heartCenterX, targetCenterY - heartCenterY);
            
            count += (distance <= targetRadius) ? 1 : 0;
        }

        return count;
    }

    setInterval(() => {
        end = new Date().getTime();
        var timeSpan =  end - start;

        if(modalHandler.triggered && modalHandler.status === 'hidden') {
            modalHandler.triggered = false;
            randomizeEverything();
        } else {
            if(timeSpan > TIMECOUNTER) {
                start = end;
                if(modalHandler.status === 'hidden') {
                    randomizeEverything();
                }
            } else {
                if(modalHandler.status === 'hidden') {
                    timer.innerText = timeSpan;
                    const colisions = countColisions();
                    colisionCounter.innerText = colisions;

                    if(colisions === 6) {
                        modalHandler.show();
                    }
                }
            }
        }
    }, 50);

    randomizeEverything();
};