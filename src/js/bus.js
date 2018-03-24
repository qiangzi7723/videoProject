export default {
	status:{
		_first:false,
		_second:false,
		_third:false,
		_ended:false,
		_canSwipe:false,
		_firstTouch:false,
		_hideDone:false
	},
	sound:{},
	on(type,fn){
		$(document).on(type,fn);
	},
	emit(type){
		$(document).trigger(type);
	}
}