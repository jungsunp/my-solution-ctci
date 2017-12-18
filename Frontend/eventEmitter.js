

// https://www.glassdoor.com/Interview/Write-an-emitter-class-emitter-new-Emitter-1-Support-subscribing-to-events-sub-emitter-subscribe-eve-QTN_1793084.htm

/*
emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
*/

function Emitter() {
  this.events = new Map();
}

function Subscription(event, callback, key, emitter) {
  this.event = event;
  this.callback = callback;
  this.key = key;
  this.emitter = emitter;
}

Emitter.prototype.subscribe = function (event, callback) {
  if (!this.events.has(event)) {
    this.events.set(event, []);
  }
  const subs = new Subscription(
    event,
    callback,
    this.events.get(event).length,
    this
  );
  this.events.get(event).push(subs);
};

Emitter.prototype.emit = function (event) {
  if (!this.events.has(event)) return;
  const args = Array.prototype.slice.call(arguments, 1);
  this.events.get(event).forEach(subs => {
    subs.callback.apply(subs, args);
  });
};

Subscription.prototype.release = function () {
  if (!this.emitter.events.has(this.event)) return;
  this.emitter.events.get(this.event).splice(this.key, 1);
};
