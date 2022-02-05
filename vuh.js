class Vuh {
    _data_name = {}
    _el_id = ""

    validateKey(key) {
        return true
    }

    constructor() {

        for (key in arguments[0].data) {
            if (validateKey(key)) {
                Vuh.prototype[key] = arguments[0].data[key]
            }
        }


    }

    extraEl() {
        console.log(arguments[0])
        this._el_id = this.extraSelector(arguments[0].el)
        console.log(this._el_id)
    }

    extraData() {
        
    }

    replaceContent(content) {
    }

    extraSelector(selector) {
        if (selector[0] === "#") {
            return selector.substring(1)
        }
    }
}


this.Vuh = Vuh
