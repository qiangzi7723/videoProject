import assetBgBw from '../assets/bg-bw.png';
import assetsBgRgb from '../assets/bg-rgb.png';
export default class {
    constructor() {
        this.initCanvas();
        this.createTopImage(this.appendElm);
        this.bindEvent();
        this.oldX;
        this.oldY;
    }
    bindEvent() {
        $(document).on('touchmove', (e) => {
            const x = e.targetTouches[0].pageX;
            const y = e.targetTouches[0].pageY;

            this._drawCircle(x, y, this.oldX, this.oldY, 30, 10);

            this.oldX = x;
            this.oldY = y;
        })
        $(document).on('touchend', () => {
            this.oldX = -1;
            this.oldY = -1;
        })
    }
    initCanvas() {
        this.canvas = $('.page__playing__canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    appendElm(){
    	$('.page__playing').append('<div class="page__playing__back"></div>')
    }
    createBottomImage(cb) {
        const img = new Image();
        img.src = assetsBgRgb;
        img.onload = () => {
            this._drawFullImage(img);
            cb();
        }
    }
    createTopImage(cb) {
        const img = new Image();
        img.src = assetBgBw;
        img.onload = () => {
            this._drawFullImage(img);
            this.ctx.globalCompositeOperation = "destination-out";
            cb();
        }
    }
    _drawFullImage(img) {
        this.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, this.canvas.width, this.canvas.height);
    }
    _drawCircle(x, y, ox, oy, r, dis) {

        this.ctx.beginPath();
        this.ctx.fillStyle = '#f00';
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

        if (ox >= 0 && oy >= 0) {
            var disX = x - ox;
            var disY = y - oy;
            if (Math.abs(disX) > dis) {
                var halfX = Math.floor(disX / 2);
                var halfY = Math.floor(disY / 2);
                drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
            } else if (Math.abs(disY) > dis) {
                var halfX = Math.floor(disX / 2);
                var halfY = Math.floor(disY / 2);
                drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
            }
        }
    }
}