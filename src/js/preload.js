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
         createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
        createjs.Sound.alternateExtensions = ["mp3"];
        this.queue.installPlugin(createjs.Sound);
    }
    preload() {
        this.queue.loadManifest([{
            src: `${config.baseUrl}/video/yami.mp4?v=2`,
            type: createjs.Types.VIDEO
        }, {
            src: `${config.baseUrl}/audio/BGM (3).mp3?v=2`,
            id: 'bgm',
        },{
            src: `${config.baseUrl}/audio/knock.mp3?v=2`,
            id: 'knock',
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
            $bus.sound.instanceBgm=createjs.Sound.play("bgm");
            $bus.sound.instanceBgm.loop=20;
            const video=new Video();
            $(document).on('tap',()=>{
                // $bus.sound.instanceBgm.position=0;
            })
        })
    }
}