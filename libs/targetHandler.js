import {
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
    TARGETSIZE,
    TIMECOUNTER,
} from '../libs/constants';

import {getRandomInt,} from '../libs/helper';

/**
 * Handler to the target element
 * @param target {HtmlElement}
 */
export var handleTarget = function(heartHandler, target) {
    var timer = document.getElementById('timer');

    var start = new Date().getTime();
    var end = null;

    function changePosition() {
        target.style.top = getRandomInt(CONTAINER_HEIGHT - TARGETSIZE) + 'px';
        target.style.left = getRandomInt(CONTAINER_WIDTH - TARGETSIZE) + 'px';
        heartHandler.delegate.randomizeHearts();
    }

    setInterval(() => {
        end = new Date().getTime();
        var timeSpan =  end - start;

        if(timeSpan > TIMECOUNTER) {
            start = end;
            changePosition();
        } else {
            timer.innerText = timeSpan;
        }
    }, 50);

    changePosition();
};