function teste(a){
	return function (b,c,d,f) {
		return a(d,f)+b + a(d,f)+c;
	}
}
b = function (d,f) {
	return d +f;
}
a = teste(b);
console.log(a(2,3,1,2))
