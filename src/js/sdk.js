export default {

    wxSignPackage: null,

    getWxSignPackage(callback) {
    	const self=this;
        $.ajax({
            url: `https://m.yamibuy.com/api/weixin/config?url=${location.href.split('#')[0]}`,
            dataType: 'json',
            type: 'GET',
            success: function(result) {
                var msg = result.config;
                self.wxSignPackage = msg;
                if (callback) callback(msg);
            },
            error: function(xhr, errorType, error) {
                // self.error("返回结果: ", xhr, errorType);
            }
        });
    },
    configWx() {
        console.log(this.wxSignPackage);
        if (!this.wxSignPackage.app_id || !this.wxSignPackage.timestamp || !this.wxSignPackage.noncestr || !this.wxSignPackage.signature) {
            return false;
        } else {
            /* 微信接口 */
            wx.config({
                debug: false,
                appId: this.wxSignPackage.app_id,
                timestamp: this.wxSignPackage.timestamp,
                nonceStr: this.wxSignPackage.noncestr,
                signature: this.wxSignPackage.signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems',
                    // 录音相关
                    'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'onVoicePlayEnd', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice'
                ]
            });
        }
        return this;
    },
    setWxShare(callback, type, name, style) {

        // 配置分享信息
        wx.ready(function() {
            // 在这里调用 API
            //分享朋友圈
            wx.onMenuShareTimeline({
                title: '天冷了，心可不能冷。', // 分享标题
                link: location.href, // 分享链接
                imgUrl: 'https://static.cdn.24haowan.com/img/1131/1131151021346913178.png', // 分享图标
                success: function() {
                    if (callback) callback();
                },
                cancel: function() {}
            });

            //分享朋友
            wx.onMenuShareAppMessage({
                title: '天冷了，心可不能冷。', // 分享标题
                desc: '送给家人的温度告白', // 分享描述
                link: location.href, // 分享链接
                imgUrl: 'https://static.cdn.24haowan.com/img/1131/1131151021346913178.png', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function() {
                    if (callback) callback();
                },
                cancel: function() {}
            });
        })
    },
}