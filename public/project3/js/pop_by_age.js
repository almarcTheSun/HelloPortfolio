$.getJSON("data/populations.json", function(jsonData){
	var colData = [];

  // TODO
  // populate colData
	for(var i = 0; i < jsonData.Armenia.length; i++)
	{
		var ageStr = jsonData.Armenia[i].age.split('')
		ageStr.splice(2,0,'-');
		ageStr = ageStr.join();
		ageStr = ageStr.replace(/,/g, "");
		colData.push([ageStr, jsonData.Armenia[i].value])
	}

	chart = c3.generate({
		bindto: "#population-chart",
		size: {
			height: 450
		},	
		data: {
			columns: colData,
			type : 'pie'
		}
	});	
});
