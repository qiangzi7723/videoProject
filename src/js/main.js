import '../css/main.scss';

import rem from './rem.js';
import Font from './font.js';
import vconsole from 'vconsole';
import a from '../../lib/preload.min.js';
import b from '../../lib/soundjs.min.js';
import Preload from './preload.js';
import $bus from './bus.js';
import config from './config.js';
import configJson from '../config/font.json';
import { fadeIn, fadeOut } from './util.js';

$bus.font = new Font({
    fontBaseUrl: `${config.baseUrl}/assets/font-loading`,
    parent: $('.page__loading__font'),
    json: configJson.loading
});
$bus.on('fontAnimation', () => {
    $bus.font.addAnimation();
})

$bus.fontEnd = new Font({
    fontBaseUrl: `${config.baseUrl}/assets/font-ending`,
    parent: $('.page__ending__font'),
    json: configJson.ending,
    cb: () => {
        $('.page__ending__button').show();
        setTimeout(() => {
            fadeIn($('.page__ending__button'));
        }, 0)
    }
});
$bus.on('fontEndAnimation', () => {
    $bus.fontEnd.addAnimation();
})

$('.page__ending__share').on('tap', () => {
    $('.page__share').addClass('fadeInDown');
})

$('.page__share').on('tap', () => {
    $('.page__share').removeClass('fadeInDown');
})

$('.page__ending__again').on('tap',()=>{
	// 重新观看视频
	$bus.emit('replayVideo');
})

// new vconsole();
new Preload();
