const fadeIn=(elm,cb)=>{
	elm.show();
	setTimeout(()=>{
		elm.addClass('fadeIn');
		cb && setTimeout(()=>{
			cb();
		},1000)
	},0)
}

const canvasIn=(elm,cb)=>{
	elm.show();
	setTimeout(()=>{
		elm.addClass('canvasIn');
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

const canvasOut=(elm)=>{
	setTimeout(()=>{
		elm.addClass('canvasOut');
		// 当有多个动画进行时，事件貌似有BUG
		elm.on('webkitTransitionEnd',()=>{
			elm.removeClass('canvasOut canvasIn');
			elm.hide();
			elm.off('webkitTransitionEnd');
		})
	},0)
}

export {
	fadeIn,
	fadeOut,
	canvasIn,
	canvasOut
}