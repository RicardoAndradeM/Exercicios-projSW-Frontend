function execfoo(fooo) {
	return fooo() + fooo();
}

function fo() {
	return "oi"
}

console.log(execfoo(fo));
