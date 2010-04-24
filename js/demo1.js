var testFlux = $('test').get('flux', {duration: 1000, transition:Fx.Transitions.Expo.easeIn, onComplete:function(e){ e.highlight('#9FE6FF') }});

$('play_pause').addEvent('click', function() {
	
	var test = $('test'),
		coords = test.getCoordinates('test_box');
		
	if(coords.left > 3 && coords.left < 372) {
		this.toggleClass('pause');
		test.get('flux').toggle();
	}
	else{
		this.addClass('pause')
		test.flux({
			'top':[ ((coords.top - 2 == 370) ? 0 : 370), {duration: 1500, transition:'bounce:out'} ],
			'left':[ ((coords.left - 2 == 370) ? 0 : 370), {duration: 3000, transition:'cubic:out', onStart:function(e){ e.highlight('#53EF4A') }}]
		}).get('flux').chain(function(el){
			console.log('Aweee shittt, chaining works like a champ!');
			this.removeClass('pause');
		}, this);
	}

});

$('stop').addEvent('click', function() {
	var test = $('test'),
		coords = test.getCoordinates('test_box');
	
	test.get('flux').cancel();
	(coords.left - 2 >= 186 && coords.left - 2 >= 186) ? test.setStyles({'top':370,'left':370}) : test.setStyles({'top':0, 'left':0});
	
});