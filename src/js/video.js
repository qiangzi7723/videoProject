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
        this._addEvent([this.circle, this.bottle]);
        $bus.on('replayVideo',this.replayVideo.bind(this));
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
        if (Math.ceil(this.video.currentTime) == 62 && !$bus.status._first) {
            $bus.status._first = true;
            this.video.pause();
            this.circle.show();
            // new Canvas();
        }
    }
    _second() {
        if (Math.ceil(this.video.currentTime) == 77 && !$bus.status._second) {
            $bus.status._second = true;
            this.video.pause();
            this.bottle.show();
        }
    }
    _third() {
        if (Math.ceil(this.video.currentTime) == 88 && !$bus.status._second) {
            $bus.status._second = true;
            this.video.pause();
            this.bottle.show();
        }
    }
    jumpTo() {
        setTimeout(() => {
            this.video.currentTime = 58;
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
            // this._third();
            this.videoEnd();
        }, 500)
    }
    videoEnd() {
        if (this.video.currentTime > 131 && !$bus.status._ended) {
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
    }
    showVideo(){
          fadeIn($('.page__playing'));
    }
}