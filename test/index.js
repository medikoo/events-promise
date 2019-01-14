"use strict";

const { assert }     = require("chai")
    , PromiseEmitter = require("../");

describe("(main)", () => {
	it(
		"Should create promise",
		() =>
			new PromiseEmitter(resolve =>
				resolve("foo").then(result => assert.equal(result, "foo"))
			)
	);
	it("Should create an emitter", () => {
		const promiseEmitter = new PromiseEmitter(resolve => resolve("result"));
		let eventData;
		promiseEmitter.addListener("elo", event => { eventData = event; });
		return promiseEmitter.then(result => {
			assert.equal(result, "result");
			promiseEmitter.emit("elo", "bar");
			assert.equal(eventData, "bar");
		});
	});
});
