import $bus from './bus.js';
import { fadeIn, fadeOut } from './util.js';
import Canvas from './canvas.js';

export default class {
    constructor() {
        this.video = $('#video')[0];
        this.render();
        this.play();
        // this.jumpTo();
        this.bindEvent();
    }
    bindEvent() {
        this.circle = $('.page__playing__circle');
        this.bottle = $('.page__playing__bottle');
        this.knock = $('.page__playing__knock');
        this._addEvent([this.circle, this.bottle,this.knock]);
        $bus.on('replayVideo',this.replayVideo.bind(this));
        $bus.on('videoPlay',()=>{
            this.video.play();
        })
    }
    _addEvent(elms) {
        elms.forEach((elm) => {
            elm.on('tap', () => {
                this.video.play();
                elm.hide();
            })
        })
    }

    _first() {
        if (this.video.currentTime >= 58.8 && this.video.currentTime<=65 && !$bus.status._first) {
            $bus.status._first = true;
            this.video.pause();
            $bus.emit('showSwipe');
        }
    }
    _second() {
        if (this.video.currentTime >= 70.5 && this.video.currentTime <= 75 && !$bus.status._second) {
            $bus.status._second = true;
            this.video.pause();
            this.bottle.show();
        }
    }
    _third() {
        if (this.video.currentTime >= 81.6 && this.video.currentTime <= 85 && !$bus.status._third) {
            $bus.status._third = true;
            this.video.pause();
            this.knock.show();
        }
    }
    jumpTo() {
        setTimeout(() => {
            this.video.currentTime = 55;
        }, 1000)
    }
    play() {
        this.video.play();
    }
    render() {
        setInterval(() => {
            // console.log(this.video.currentTime);
            this._first();
            this._second();
            this._third();
            this.videoEnd();
        }, 100)
    }
    videoEnd() {
        if (this.video.currentTime > 127 && !$bus.status._ended) {
            $bus.status._ended = true;
            fadeOut($('.page__playing'));
            $bus.emit('fontEndAnimation');
        }
    }
    replayVideo(){
    	$bus.status._first=false;
    	$bus.status._second=false;
    	$bus.status._third=false;
    	$bus.status._ended=false;
    	this.video.currentTime=0;
    	this.video.play();
    	this.showVideo();
        $bus.emit('reRender');
    }
    showVideo(){
          fadeIn($('.page__playing'));
    }
}