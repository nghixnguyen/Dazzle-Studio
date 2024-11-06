var DS = {
	init:function () {
		$("#year").text(new Date().getFullYear());
	}
}
$(window).on('load', DS.init);