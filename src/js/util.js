const fadeIn=(elm,cb)=>{
	elm.show();
	setTimeout(()=>{
		elm.addClass('fadeIn');
		cb && setTimeout(()=>{
			cb();
		},1000)
	},0)
}

const fadeOut=(elm)=>{
	setTimeout(()=>{
		elm.addClass('fadeOut');
		// 当有多个动画进行时，事件貌似有BUG
		elm.on('webkitTransitionEnd',()=>{
			elm.removeClass('fadeOut fadeIn');
			elm.hide();
			elm.off('webkitTransitionEnd');
		})
	},0)
}

export {
	fadeIn,
	fadeOut
}