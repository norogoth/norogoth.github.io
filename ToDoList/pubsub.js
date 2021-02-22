export const pubsub = {
    events: {},
    subscribe: function(eventName, fn) {
        console.log("PUBSUB subscribe: EventName: " + eventName + "function: " + fn.name);        
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    unsubscribe: function(eventName, fn) {
        console.log("PUBSUB unsubscribed: EventName: " + eventName + "function: " + fn);        
        if (this.events[eventName]){
            this.events[eventName] = this.events[eventName].filter(f => f != fn);
        }
    },
    publish: function(eventName, data) {
        console.log(`PUBSUB: Making a broadcast about ${eventName} with ${data}`); 
        if (this.events[eventName]){
            this.events[eventName].forEach(f => {
                f(data);
            });
        }
    },
}