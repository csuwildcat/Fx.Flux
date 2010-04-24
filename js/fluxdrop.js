flux.start({
			'width': [ 10, {duration: 1000} ],
			'height': [ 50, {duration: 1000} ],
			'margin-left': [ -5, {duration: 1000} ],
			'top': [ 350, {duration: 1400, transition:'quad:in'} ]
			
		}).chain(function(){
			flux.start({
				'width': 50,
				'height': 10,
				'margin-left': -25,
				'top': 390
			})
		}, this).chain(function(){
			flux.start({
				'width': [ 30, {duration: 500} ],
				'height': [ 30, {duration: 500} ],
				'margin-left': [ -15, {duration: 500} ],
				'top':[ 250, {duration: 800, transition:'quad:out'} ]
			})
		}, this).chain(function(){
			flux.start({
				'width': [ 20, {duration: 300} ],
				'height': [ 40, {duration: 300} ],
				'margin-left': [ -10, {duration: 300} ],
				'top':[ 360, {duration: 500, transition:'quad:in'} ]
			})
		}, this).chain(function(){
			flux.start({
				'width': 40,
				'height': 20,
				'margin-left': -20,
				'top': 380
			})
		}, this).chain(function(){
			flux.start({
				'width': [ 30, {duration: 200} ],
				'height':  [ 30, {duration: 200} ],
				'margin-left': [ -15, {duration: 200} ],
				'top':[330, {duration: 350, transition:'circ:out'} ]
			})
		}, this).chain(function(){
			flux.start({
				'top':[ 370, {duration: 400, transition:'bounce:out'} ]
			})
		}, this);