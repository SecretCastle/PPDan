;
(function() {
    /**
     * 
     * @param {*} options 
     * 创建DAN
     */
    var DAN = function(options) {
        this.options = options
        this.W_Width = window.innerWidth
        this.W_Height = window.innerHeight
        this.startDan()
    }

    /**
     * 初始化
     */
    DAN.prototype.startDan = function() {
        this.initCanvas()
        this.initDAN()
    }

    /**
     * 初始化canvas
     */
    DAN.prototype.initCanvas = function() {
        this.canvas = document.getElementById(this.options.dom)
        this.CTX = this.canvas.getContext("2d")
        this.canvas.setAttribute('width', this.W_Width)
        switch (this.options.position) {
            case 'top':
                this.canvas.style.top = '0'
                this.canvas.setAttribute('height', '400px')
                break;
            case 'center':
                this.canvas.style.top = '50%'
                this.canvas.setAttribute('height', '400px')
                this.canvas.style.marginTop = '-200px'
                break;
            case 'bottom':
                this.canvas.style.bottom = '0'
                this.canvas.setAttribute('height', '400px')
                break;
            case 'fullscreen':
                this.canvas.setAttribute('height', this.W_Height)
                break;
        }

        this.CTX.strokeStyle = '#fff'

        //保存当前环境
        this.CTX.save()
    }

    /**
     * 初始化弹幕
     */
    DAN.prototype.initDAN = function() {
        var _ = this;
        var INITX = [],
            INITY = [],
            PX
        this.options.list.forEach(function(ele) {
            PX = _.randomPosition()
            INITX.push(PX.initX)
            INITY.push(PX.initY)
        })

        /**
         * 弹幕
         */
        setInterval(function() {
            _.CTX.clearRect(0, 0, _.canvas.width, _.canvas.height)
            _.CTX.save()
            for (var i = 0; i < _.options.list.length; i++) {
                INITX[i] -= 0.2 * 10
                _.createText(INITX[i], INITY[i], _.options.list[i])
                if (INITX[i] < -100) {
                    INITX[i] = _.canvas.width
                }
            }
            _.CTX.restore()
        }, 50)

    }


    /**
     * 初始化弹幕位置
     */
    DAN.prototype.createText = function(x, y, ele, index) {
        this.CTX.lineWidth = 1;
        this.CTX.font = "28px"
        this.CTX.fillText(ele.info, x, y)
    }


    DAN.prototype.randomPosition = function() {
        var initX,
            initY
        switch (this.options.position) {
            case "top":
                initX = Math.round(Math.random() * (this.W_Width - 100))
                initY = Math.round(Math.random() * 380)
                break;
            case "center":
                initX = Math.round(Math.random() * ((this.W_Width - 100) / 2 - 200))
                initY = Math.round(Math.random() * 380)
                break;
            case "bottom":
                initX = Math.round(Math.random() * (this.W_Height - 380))
                initY = Math.round(Math.random() * 380)
                break;
            case "fullscreen":
                initX = Math.round(Math.random() * (this.W_Width - 100))
                initY = Math.round(Math.random() * this.W_Height)
                break;
        }
        return {
            initX: initX,
            initY: initY
        }
    }
    window.DAN = DAN
})()