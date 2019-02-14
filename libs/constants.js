const container = document.getElementById('container');
const containerStyle = window.getComputedStyle(container);
var containerBorder = containerStyle.getPropertyValue('border-width');
containerBorder = containerBorder.replace('px', '');

const body = document.getElementsByTagName('body')[0];
const bodyStyle = window.getComputedStyle(body);
var bodyMargin = bodyStyle.getPropertyValue('margin');
bodyMargin = bodyMargin.replace('px', '');

/**
 * The offset pixels of the main container in relation to the page
 */
export const CONTAINER_OFFSET = parseInt(containerBorder) + parseInt(bodyMargin);

/**
 * Main container width
 */
export const CONTAINER_WIDTH = 1400;

/**
 * Main container height
 */
export const CONTAINER_HEIGHT = 768;

/**
 * Heart size
 */
export const HEARTSIZE = 50;

/**
 * Target size
 */
export const TARGETSIZE = 207;

/**
 * Time counter to reset target position, in milis
 */
export const TIMECOUNTER = 7000;

/**
 * Heart properties
 */
export const heartProperties = [
    {
        name: 'width',
        value: HEARTSIZE.toString(),
    },
    {
        name: 'height',
        value: HEARTSIZE.toString(),
    },
];