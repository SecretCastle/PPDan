(function(map) {
    var Site = map.site = Hilo.Class.create({
        constructor: function(options) {
            this.options = options
            this.createSite()
        },

        createSite: function() {
            console.log(this.options);
        },
        createDomElement: function() {

        }
    })
})(window.Map)