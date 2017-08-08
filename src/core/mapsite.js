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
            this.animate()
        },
        createDomElement: function() {
            this.txt = new Hilo.Text({
                text: 'Hello World'
            })
            this.DOM = new Hilo.Container({
                children: [this.txt],
                id: 'dom_' + this.options.id,
                width: this.options.width,
                height: this.options.height,
                x: Math.floor(this.options.line_x * this.SCREEN_WIDTH),
                y: Math.floor(this.options.line_y * this.SCREEN_HEIGHT),
                background: '#f00',
                rotation: this.options.rotate,
                depth: 1
            }).addTo(Map.stage)
        },
        bindEvent: function() {
            var _ = this;
            this.DOM.on(Hilo.event.POINTER_END, function(e) {
                console.log(_.options.name);
            }, false)
        },
        animate: function() {
            Hilo.Tween.to(this.DOM, {
                y: Math.floor(this.options.line_y * this.SCREEN_HEIGHT) - 15
            }, {
                duration: 4000,
                ease: Hilo.Ease.Quad.EaseIn,
                loop: true,
                reverse: true
            })
        }
    })
})(window.Map)