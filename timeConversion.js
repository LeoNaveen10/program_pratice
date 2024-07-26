function timeConversion(s) {
	// Write your code here

	const isAM = `${s[s.length - 2]}${s[s.length - 1]}` == 'PM' ? false : true;
	let  hour = `${s[0]}${s[1]}`;
	if (isAM ) {
        hour = (hour == 12) ? '00' : hour;
    	} else {
		if (hour !== '12') hour = String(parseInt(hour) + 12);
	}
	let result = hour;
    console.log(result);
	for (let i = 2; i < s.length - 2; i++) {
		result += s[i];
	}
	console.log(result);
}

timeConversion('04:59:59AM');
