/*
jQuery WriteStop 1.0
http://github.com/sitexw/WriteStop
*/

(function($) {
	$.event.special.writestop = {
		bindType: 'keyup',
		delegateType: 'keyup',
		handle: function(event) {
			var $this = $(this);
			if(typeof event.data != 'number') {
				event.data = 800;
			}
			if(typeof event.handleObj.handler._writestop != 'number') {
				event.handleObj.handler._writestop = 0;
			} else {
				event.handleObj.handler._writestop++;
			}
			setTimeout(function(_this, handler, writestop) {
				if(handler._writestop == writestop) {
					handler.apply(_this);
				}
			}, event.data, this, event.handleObj.handler, event.handleObj.handler._writestop);
		}
	};
})(jQuery);
