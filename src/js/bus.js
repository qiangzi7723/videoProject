export default {
	status:{
		_first:false,
		_second:false,
		_third:false,
		_ended:false
	},
	on(type,fn){
		$(document).on(type,fn);
	},
	emit(type){
		$(document).trigger(type);
	}
}