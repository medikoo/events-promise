"use strict";

const EventEmitter = require("events");

class PromiseEmitter extends Promise {
	constructor(executor) {
		super(executor);
		EventEmitter.init.call(this);
	}
}

Object.assign(PromiseEmitter.prototype, EventEmitter.prototype);

module.exports = PromiseEmitter;
