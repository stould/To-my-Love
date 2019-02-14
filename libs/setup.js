import {handleTarget,} from '../libs/targetHandler';
import {loadHearts,} from '../libs/heartsHandler';

/**
 * Main function to load the library and setup things properly
 */
(function() {
    const heartsCount = 6;
    var container = document.querySelector('#container');
    container.style.position = 'relative';
    var heartHandler = loadHearts(heartsCount, container);
    handleTarget(heartHandler, document.querySelector('#target'));
})();