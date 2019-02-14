import {handleTarget,} from '../libs/targetHandler';
import {loadHearts,} from '../libs/heartsHandler';
import {handleModal,} from '../libs/modalHandler';

import {
    CONTAINER_HEIGHT,
    CONTAINER_WIDTH,
} from '../libs/constants';

/**
 * Main function to load the library and setup things properly
 */
(function() {
    const heartsCount = 6;
    var container = document.querySelector('#container');
    container.style.width = CONTAINER_WIDTH + 'px';
    container.style.height = CONTAINER_HEIGHT + 'px';
    container.style.position = 'relative';
    var heartHandler = loadHearts(heartsCount, container);
    var modalHandler = handleModal(document.querySelector('#myModal'));
    handleTarget(modalHandler,heartHandler, document.querySelector('#target'));
})();