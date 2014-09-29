describe("Hello", function() {
	it("say hello to receiver", function() {
		expect(sayHello('Jane')).toBe("Hello, Jane!")
	});
});