import assetBgBw from '../assets/bg-bw.png';
import assetsBgRgb from '../assets/bg-rgb.png';
import drawImageProp from './canvas-image-cover.js';
import $bus from './bus.js';
import { canvasIn,canvasOut } from './util.js';

export default class {
    constructor() {
        this.initCanvas();
        this.createTopImage();
        this.bindEvent();
        this.oldX;
        this.oldY;
    }
    bindEvent() {
        $(document).on('touchmove', (e) => {
            e.preventDefault();
            if (!$bus.status._canSwipe) return;
            const x = e.targetTouches[0].pageX;
            const y = e.targetTouches[0].pageY;
            this._drawCircle(x, y, this.oldX, this.oldY, 30, 10);
            this._open(()=>{
                if($bus.status._hideDone) return;
                $bus.status._hideDone=true;
                $bus.emit('lockSwipe');
                $bus.emit('hideSwipe');
                $bus.emit('videoPlay');
            });
            this.oldX = x;
            this.oldY = y;
            if(!$bus.status._firstTouch){
                $bus.status._firstTouch=true;
                setTimeout(()=>{
                    if($bus.status._hideDone) return;
                    $bus.status._hideDone=true;
                    $bus.emit('lockSwipe');
                    $bus.emit('hideSwipe');
                    $bus.emit('videoPlay');
                },4000)
            }
        })
        $(document).on('touchend', () => {
            this.oldX = -1;
            this.oldY = -1;
        })
        $bus.on('openSwipe', () => {
            $bus.status._canSwipe = true;
        })
        $bus.on('lockSwipe', () => {
            $bus.status._canSwipe = false;
        })
        $bus.on('showSwipe', () => {
            canvasIn($('.page__playing__back'));
            canvasIn($('.page__playing__canvas'));
            $bus.emit('openSwipe');
        })
        $bus.on('hideSwipe',()=>{
            canvasOut($('.page__playing__back'));
            canvasOut($('.page__playing__canvas'));
        })
        $bus.on('reRender',()=>{
            this.ctx.globalCompositeOperation = "source-over";
            drawImageProp(this.ctx, this.img);
            this.ctx.globalCompositeOperation = "destination-out";
        })
    }
    initCanvas() {
        this.canvas = $('.page__playing__canvas')[0];
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    showBack() {
        $('.page__playing__back').show();
    }
    hideBack() {
        $('.page__playing__back').hide();
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
        this.img = new Image();
        this.img.src = assetBgBw;
        this.img.onload = () => {
            // this._drawFullImage(img);
            drawImageProp(this.ctx, this.img);
            this.ctx.globalCompositeOperation = "destination-out";
            cb && cb();
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
                this._drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                this._drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
            } else if (Math.abs(disY) > dis) {
                var halfX = Math.floor(disX / 2);
                var halfY = Math.floor(disY / 2);
                this._drawCircle(x - halfX, y - halfY, ox, oy, r, dis);
                this._drawCircle(x, y, ox + halfX, oy + halfY, r, dis);
            }
        }
    }
    _open (cb) {
        var imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        var dataLength = imgData.data.length;
        var num = 0;
        for (var i = 0; i < dataLength; i++) {
            if (imgData.data[i] == 0) {
                num++;
            }
        }
        if (num >= dataLength * 0.735) {
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            cb();
        }
    }
}