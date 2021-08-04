window.onload = function () {
	setInterval(updateTime, 1000)
};

function updateTime() 
{
	const format = number => `${ +!(number < 10) && '' }${number}`;
	
	let date = new Date();
	
	document.querySelector("#hour")  .innerHTML = format( date.getHours()   );
	document.querySelector("#minute").innerHTML = format( date.getMinutes() );
	document.querySelector("#second").innerHTML = format( date.getSeconds() );

	
    var d = new Date();
    var day = d.getDate();
    var locale = "en-us";
    var month = d.toLocaleString(locale, { month: "long" });
    var year = d.getFullYear();
    document.querySelector("#date").innerHTML = day + '/' + month + '/' + year+' ,';
	;
	
	const week = [
		"Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
	];
	
	document.querySelector("#day").innerHTML = week[ date.getDay() ];
}