import { fadeIn } from './util.js';
import Font from './font.js';
import $bus from './bus.js';
import Video from './video.js';
import Canvas from './canvas.js';
import config from './config.js';

export default class {
    constructor() {
        this.init();
        this.preload();
        setTimeout(()=>{
            $bus.emit('fontAnimation');
            const canvas=new Canvas();
        },200);
    }
    init() {
        this.queue = new createjs.LoadQueue(true);
    }
    preload() {
        this.queue.loadManifest([{
            src: `${config.baseUrl}/video/yami.mp4?v=3`,
            type: createjs.Types.VIDEO
        }]);

        const fileLoadHandle = (e) => {
            if (e.item.type == createjs.Types.VIDEO) {
                // 说明是视频
                $('#video').attr('src', e.result.src);
            }
        }

        const completeHandle = () => {
            this._button();
        }

        const progressHandle = (e) => {
            $('.page__loading__progress').html(`${(e.progress*100).toFixed(0)}%`)
        }

        this.queue.on('fileload', fileLoadHandle);
        this.queue.on('complete', completeHandle);
        this.queue.on('progress', progressHandle);
    }
    _button() {
        $('.page__loading__progress').hide();
        fadeIn($('.page__loading__button'),()=>{
            $('.page__loading__button').addClass('page__loading__button--flash');
        });
        $('.page__loading__button').on('tap', () => {
            $('.page__playing').show();
            fadeIn($('.page__playing'),()=>{
                $('.page__loading').hide();
                $('.page__ending').show();
            });
            const video=new Video();
        })
    }
}