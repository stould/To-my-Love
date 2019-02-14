/**
 * This function handles a modal
 * @param modal {HtmlElement} 
 */
export function handleModal(modal) {

    var that = {
        status: 'hidden',
        triggered: false,
    };

    const span = document.getElementsByClassName('close')[0];

    that.show = function() {
        modal.style.display = 'block';
        modal.style.zIndex = 1001;
        that.status = 'shown';
        that.triggered = true;
    };

    that.hide = function() {
        modal.style.display = 'none';
        modal.style.zIndex = -1;
        that.status = 'hidden';
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