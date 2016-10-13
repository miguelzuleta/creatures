function func2(){
	for (var i = 0, count = 0; i < arguments.length; i++) {
		count += arguments[i];
	}
	console.log('func2: ' + count);
}
func2(5,6,7,8,9);