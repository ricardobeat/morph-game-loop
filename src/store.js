
class Store {

    constructor (reducer) {
        this.state = reducer({}, {})
        this.reduce = reducer
        this.dispatch = this.dispatch.bind(this)
    }

    dispatch (action) {
        if (typeof action === 'function') action = action()
        this.state = this.reduce(this.state, action)
        this.onchange && this.onchange(this.state)
    }

}

module.exports = Store
