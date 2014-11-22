(function() {
$('html').addClass('js');
var contactForm = {

	container: $('#contact'),

	config: {
		effect: 'slideToggle',
		speed: 500
	},

	init: function(config) {
		$.extend(this.config, config);

		$('<button></button>', {
			text: 'Hire Me'
		})
			.insertAfter($('span').first())
			.on( 'click', this.show );
	},

	show: function() {
		var cf = contactForm,
			container = cf.container,
			config = cf.config;

		if ( container.is(':hidden') ) {
			contactForm.close.call(container);
			container[config.effect](config.speed);
		}
	},

	close: function() {
		var $this = $(this), // #contact
			config = contactForm.config;

		if ( $this.find('span.close').length ) return;

		$('<span class=close>X</span>')
			.prependTo(this)
			.on('click', function() {
				// this = span
				$this[config.effect](config.speed);
			})
	}
};

contactForm.init({
	// effect: 'fadeToggle',
	speed: 300
});

})();
