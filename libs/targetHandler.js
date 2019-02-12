import {
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
    TARGETSIZE,
    TIMECOUNTER,
} from '../libs/constants';

/**
 * Handler to the target element
 * @param target {HtmlElement}
 */
export var handleTarget = function(target) {
    var timer = document.getElementById('timer');

    var start = new Date().getTime();
    var end = null;

    function changePosition() {
        target.style.top = Math.floor(Math.random() * (CONTAINER_HEIGHT - TARGETSIZE)) + 'px';
        target.style.left = Math.floor(Math.random() * (CONTAINER_WIDTH - TARGETSIZE)) + 'px';
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