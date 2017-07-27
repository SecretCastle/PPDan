(function(map) {
    var Site = map.site = Hilo.Class.create({
        constructor: function(options, screenX, screenY) {
            this.options = options
            this.SCREEN_WIDTH = screenX
            this.SCREEN_HEIGHT = screenY
            this.createSite()
        },

        createSite: function() {
            this.createDomElement()
            this.bindEvent()
        },
        createDomElement: function() {
            this.DOM = new Hilo.DOMElement({
                element: Hilo.createElement('div', {
                    style: {
                        backgroundColor: '#fff',
                        position: 'absolute',
                        borderRadius: '15px',
                        border: '1px solid #000',
                        opacity: '0.5'
                    },

                }),
                id: 'dom_' + this.options.id,
                width: this.options.width / 2,
                height: this.options.height / 2,
                x: Math.floor(this.options.line_x * this.SCREEN_WIDTH / 2),
                y: Math.floor(this.options.line_y * this.SCREEN_HEIGHT / 2),
                rotation: this.options.rotate,
                depth: 1
            }).addTo(Map.stage)
        },
        bindEvent: function() {
            this.DOM.on(Hilo.event.POINTER_END, function(e) {
                console.log('haha');
            }, false)
        }
    })
})(window.Map)