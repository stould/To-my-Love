export function handleModal(modal) {

    var that = {};

    const span = document.getElementsByClassName('close')[0];

    that.show = function() {
        modal.style.display = 'block';
    };

    that.hide = function() {
        modal.style.display = 'none';
    };

    span.addEventListener('click', function() {
        that.hide();
    });
    
    window.onclick = function(event) {
        if (event.target == modal) {
            that.hide();
        }
    };

    return that;
}