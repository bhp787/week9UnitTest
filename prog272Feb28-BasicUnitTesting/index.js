/**
 * @author Benjamin Pitcher
 */

function square(a){
	return a * a;
};

function multiply(a, b) {
	return a * b;
};

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

test("test01", function() {
	ok(true, true);
});

test("testSquare", function(){
	var expected = 25;
	var actual = square(5);
	equal(actual, expected);
});

test("testMultiply", function() {
	var expected = 24;
	var actual = multiply(3,8);
	equal(actual, expected);
	
});

test("testAdd", function() {
	var expected = 11;
	var actual = add(3,8);
	equal(actual, expected);
	
});

test("testSubtract", function() {
	var expected = -5;
	var actual = subtract(3,8);
	equal(actual, expected);
	
});