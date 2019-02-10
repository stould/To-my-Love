const container = document.getElementById('container');
const containerStyle = window.getComputedStyle(container);
var containerBorder = containerStyle.getPropertyValue('border-width');
containerBorder = containerBorder.replace('px', '');

const body = document.getElementsByTagName('body')[0];
const bodyStyle = window.getComputedStyle(body);
var bodyMargin = bodyStyle.getPropertyValue('margin');
bodyMargin = bodyMargin.replace('px', '');

export const CONTAINER_OFFSET = parseInt(containerBorder) + parseInt(bodyMargin);
export const CONTAINER_WIDTH = 1024;
export const CONTAINER_HEIGHT = 768;

export const heartProperties = [
    {
        name: 'width',
        value: '50',
    },
    {
        name: 'height',
        value: '50',
    },
];