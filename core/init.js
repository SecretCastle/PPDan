(function(params) {
    var MapSite = window.Map = {
        SCREEN_WIDTH: 720,
        SCREEN_HEIGHT: 1180,
        SCREEN_SCALE: 0.5,
        stage: null,
        bg: null,
        TICKER: null,
        config: {},
        /**
         * 初始化
         */
        init: function(config) {
            this.config = config
            this.initStage()
            this.initTrcker()
            this.initBg()
            this.initSite()
        },
        /**
         * 建立stage
         */
        initStage: function() {
            this.stage = window.Map.stage = new Hilo.Stage({
                renderType: 'canvas',
                width: this.SCREEN_WIDTH,
                height: this.SCREEN_HEIGHT,
                scaleX: this.SCREEN_SCALE,
                scaleY: this.SCREEN_SCALE
            })
            document.body.appendChild(this.stage.canvas)
            this.stage.enableDOMEvent([Hilo.event.POINTER_START, Hilo.event.POINTER_MOVE, Hilo.event.POINTER_END], true);
        },
        /**
         * 建立ticker
         */
        initTrcker: function(params) {
            this.TICKER = new Hilo.Ticker(60)
            this.TICKER.addTick(this.stage)
            this.TICKER.addTick(Hilo.Tween)
            this.TICKER.start()
        },
        /**
         * 建立背景
         */
        initBg: function(params) {
            this.bg = new Hilo.Bitmap({
                image: './core/assets/bg.png',
                rect: [0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT],
                x: 0,
                y: 0
            }).addTo(this.stage)
        },
        /**
         * 动态建立site
         */
        initSite: function() {
            this.config.site.forEach(function(ele) {
                new Map.site(ele, this.SCREEN_WIDTH, this.SCREEN_HEIGHT)
            }, this);
        }
    }

    window.MapSite = MapSite
})()