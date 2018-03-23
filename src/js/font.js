export default class {
    constructor(config) {
        this.config = config;
        this.container = config.parent;
        this.children = [];
        this.createFont();
        this.configStyle();
    }
    createFont() {
        const elm = $('<span class="common-font"></span>');
        for (let i = 0; i < this.config.json.length; i++) {
            const e = elm.clone();
            e.css({
                'background-image': `url(${this.config.fontBaseUrl}/font-${i}.png)`
            })
            this.container.append(e);
            this.children.push(e);
        }
    }
    configStyle() {
        const config = this.config.json;
        for (let i = 0; i < config.length; i++) {
            let c = config[i];
            c=this._trSize(c);
            this.children[i].css({
                width: c.w,
                height: c.h,
                left:c.l,
                top:c.t
            })
        }
    }
    addAnimation() {
        setTimeout(() => {
            const children = this.container.children();
            for (let i = 0; i < this.config.json.length; i++) {
                $(children[i]).on('webkitTransitionEnd', () => {
                    $(children[i + 1]).addClass('common-font-show');
                })
                if(i==this.config.json.length-1){
                    // 说明是最后一个文字的出现
                    $(children[i]).on('webkitTransitionEnd', () => {
                        this.config.cb && this.config.cb();
                })
                }
            }
            $(children[0]).addClass('common-font-show');
        }, 0)
    }
    _trSize(config) {
    	return{
    		w:this._trRem(config.w),
    		h:this._trRem(config.h),
    		l:this._trRem(config.l),
    		t:this._trRem(config.t),
    	}
    }
    _trRem(v){
    	return v/200+'rem';
    }
    _trVh(){

    }
}