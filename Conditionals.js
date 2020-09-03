function whichSchool(age) {
	// Elementary School if age is below 13
	if (age < 13) {
		return "Elementary School";
		// Secondary School if age is between 13 and 18 (both inclusive)
	} else if (age >= 13 && age <= 18) {
		return "Secondary School";
		// Lighthouse Labs in all other cases.
	} else {
		return "Lighthouse Labs";
	}
}
console.log("I am 35. Which school should I go to?");
console.log("%c You should go to " +   whichSchool(35), 'color: #9ecdff');
console.log("\n");
console.log("I am 8. Which school should I go to?");
console.log("%c You should go to " + whichSchool(8), 'color: #f999ff');
console.log("\n");
console.log("I am 14. Which school should I go to?");
console.log("%c You should go to " + whichSchool(14), 'color: #bada55');




