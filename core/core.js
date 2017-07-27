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
            TextObject(ele, TEXT_POSITION_X[index] - 10, TEXT_POSITION_Y[index], index)
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
        TICKER.addTick(Hilo.Tween)
        TICKER.start()
    }


    function TextObject(txtObj, PX, PY) {
        var _this = Hilo.Tween
        _this.to(new Hilo.Text({
            text: txtObj.name,
            color: '#f00',
            lineSpacing: 0,
            font: '30px Aril',
            x: -PX,
            y: PY
        }).addTo(STAGE), {
            x: SCREEN_WIDTH
        }, {
            time: 10000,
            loop: true,
            onComplete: function() {
                console.log(_this);

            }
        })
    }


    function RandomPosition(list) {
        var X, Y
        for (var i = 0; i < list.length; i++) {
            X = Math.floor(Math.random() * SCREEN_WIDTH)
            Y = Math.floor(Math.random() * (SCREEN_HEIGHT - 200))
            TEXT_POSITION_X.push(X)
            TEXT_POSITION_Y.push(Y)
        }
    }



    window.DAN = DAN
})()