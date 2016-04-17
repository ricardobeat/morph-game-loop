/* jshint esversion: 6 */
var morph = require('morphdom');
var Store = require('./store');
var updatePlayer = require('./reducers/player');
var reducer = function (state, action) { return ({
    player: updatePlayer(state.player, action)
}); };
var App = function (state) {
    return ("<div>\n        " + Player(state.player) + "\n    </div>").trim();
};
var Player = function (player) {
    var styles = "\n        transform: translateX(" + player.x + "px) translateY(" + player.y + "px);\n        -webkit-filter:\n            drop-shadow(" + -player.speedX * 0.7 + "px " + -player.speedY * 0.7 + "px 0px #f33)\n            drop-shadow(" + -player.speedX * 1.3 + "px " + -player.speedY * 1.3 + "px 0px #f33)\n            hue-rotate(" + Math.floor((player.speedX + player.speedY) * 5) + "deg);\n            ;\n    ";
    return "<div class=\"player\" style=\"" + styles + "\"></div>";
};
var root = document.querySelector('#app');
global.store = new Store(reducer);
var render = function (state) { return morph(root, App(state)); };
global.bounds = root.getBoundingClientRect();
var loop = function () {
    requestAnimationFrame(loop);
    render(store.state);
    store.dispatch({ type: 'STEP' });
};
require('./input-events')(store.dispatch);
loop();
