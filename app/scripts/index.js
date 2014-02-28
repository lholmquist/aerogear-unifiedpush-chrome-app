var form = document.querySelector( 'form' ),
    webview = document.querySelector( 'webview' ),
    indicator = document.querySelector( '.indicator' ),
    terminator = document.querySelector( '.terminator' );

var loadstart = function() {
    indicator.innerText = 'loading...';
},
loadstop = function() {
    indicator.innerText = '';
};

webview.addEventListener( 'loadstart', loadstart );
webview.addEventListener( 'loadstop', loadstop );

webview.addEventListener('exit', function(e) {
    if (e.reason === 'killed') {
        webview.src = 'data:text/plain,Terminated!';
    }
});

terminator.addEventListener( 'click', function(){ webview.terminate(); } );

form.onsubmit = function( event ) {
    event.preventDefault();

    var serverURL = this.querySelector('input').value;

    webview.src = serverURL;

};
