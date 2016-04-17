
const key = require('keyboardjs')

const {
    accelerateX,
    accelerateY
} = require('./actions/player')

module.exports = (dispatch) => {
    const X = (val) => () => dispatch(accelerateX(val))
    const Y = (val) => () => dispatch(accelerateY(val))
    key.bind('up',    Y(-1), Y(0))
    key.bind('down',  Y( 1), Y(0))
    key.bind('left',  X(-1), X(0))
    key.bind('right', X( 1), X(0))
}
