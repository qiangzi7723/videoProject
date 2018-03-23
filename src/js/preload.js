import { fadeIn } from './util.js';
import Font from './font.js';
import $bus from './bus.js';
import Video from './video.js';
import config from './config.js';

export default class {
    constructor() {
        this.init();
        this.preload();
        setTimeout(()=>{
            $bus.emit('fontAnimation');
        },200);
    }
    init() {
        this.queue = new createjs.LoadQueue(true);
        createjs.Sound.alternateExtensions = ["mp3"];
        this.queue.installPlugin(createjs.Sound);
    }
    preload() {
        this.queue.loadManifest([{
            src: `${config.baseUrl}/video/yami.mp4`,
            type: createjs.Types.VIDEO
        }, {
            src: `${config.baseUrl}/audio/BGM.mp3`,
            id: 'bgm',
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
            // createjs.Sound.play("bgm");
            const video=new Video();
        })
    }
}