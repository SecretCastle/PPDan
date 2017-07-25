;
(function() {
    /**
     * 设置参数
     */
    STAGE = null
    TICKER = null
    TEXT_CANVAS = null

    SCREEN_WIDTH = window.innerWidth
    SCREEN_HEIGHT = window.innerHeight


    TEXT_POSITION_X = []
    TEXT_POSITION_Y = []

    /**
     * 设置默认的配置选项
     */
    DEFAULT_OPTIONS = {
        container: document.body,
        position: 'top',
        list: []
    }


    var DAN = function(options) {
        this.options = checkOptions(options)
        this.init()
    }

    DAN.prototype.init = function() {
        initStage(this.options.position, this.options.container)
        initTicker()
        this.draw()
    }


    DAN.prototype.draw = function() {
        /**
         * 根据文本画
         */
        RandomPosition(this.options.list)
        this.options.list.forEach(function(ele, index) {
            TextObject(ele, TEXT_POSITION_X[index], TEXT_POSITION_Y[index])
        })

    }

    /**
     * 
     * @param {*检查options，设置默认值} params 
     */
    function checkOptions(options) {
        for (var i in options) {
            if (DEFAULT_OPTIONS[i]) {
                DEFAULT_OPTIONS[i] = options[i]
            }
        }
        return DEFAULT_OPTIONS
    }

    /**
     * 
     * @param {初始化舞台} position 
     */
    function initStage(position, container) {
        if (container !== document.body) {
            switch (position) {
                case 'top':

                    break;
                case 'center':

                    break;
                case 'bottom':

                    break;
            }
        } else {
            STAGE = new Hilo.Stage({
                container: document.body,
                width: SCREEN_WIDTH,
                height: SCREEN_HEIGHT
            })
        }
    }

    /**
     * initTicker
     */
    function initTicker() {
        TICKER = new Hilo.Ticker(60)
        TICKER.addTick(STAGE)
        TICKER.start()
    }


    function TextObject(txtObj, PX, PY) {
        console.log(PX, PY);
        new Hilo.Text({
            text: txtObj.name,
            color: '#f00',
            lineSpacing: 0,
            x: PX,
            y: PY
        }).addTo(STAGE)
    }


    function RandomPosition(list) {
        var X, Y
        console.log(SCREEN_WIDTH, SCREEN_HEIGHT);
        for (var i = 0; i < list.length; i++) {
            X = Math.floor(Math.random() * SCREEN_WIDTH)
            Y = Math.floor(Math.random() * (SCREEN_HEIGHT - 200))
            TEXT_POSITION_X.push(X)
            TEXT_POSITION_Y.push(Y)
        }
    }
    window.DAN = DAN
})()