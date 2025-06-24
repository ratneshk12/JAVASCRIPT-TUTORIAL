// The change in the state of an object is know as event
// Events are fired  to notifvy code of intresting changes that may affect code execution

// mouse events (click , double click etc)
// keyboard events (keypress , MediaKeyStatusMap, keydown)
// form events(submit etc)
// print events & many more

/**
 * it is a special object that has details about the event
 * all event handler have acess to the event object properties method
 * 
 * node.event = (e) => {
 * //handle here
 *  }
 * 
 * e.target, e.type, e.clientX ,e.clientY
 * 
 * Event Listeners*
 * 
 *node.addEventListener(event, callback)
 node.removeEventListener(event, callback)
 
 */