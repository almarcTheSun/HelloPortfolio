$.getJSON("data/bitcoin.11-17.json", function(allJSON){
	console.log(allJSON)
	xDateArray = ["x"], lowArray = ["low"], highArray = ["high"], volumeArray = ["volume"];
	
	// TODO
	// populate xDateArray, lowArray, highArray
	for (var i = 0; i < allJSON.dataset.data.length; i++)
	{
		
		if(i % 7 == 0 && parseInt(allJSON.dataset.data[i][0]) > 2014)
		{
		xDateArray.push(allJSON.dataset.data[i][0]);
		lowArray.push(allJSON.dataset.data[i][3]);
		highArray.push(allJSON.dataset.data[i][2]);
		volumeArray.push(allJSON.dataset.data[i][6]);
		}
	}

	var chart = c3.generate({
		bindto: "#bitcoin-chart",
		data: {
			x: 'x',
			xFormat: '%Y-%m-%d',
			columns: [
				xDateArray,
				highArray,
				lowArray,
				volumeArray
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
});