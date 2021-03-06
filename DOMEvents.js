"use strict";

const DOMEvents = [
  "DOMActivate",
  "DOMAttrModified",
  "DOMCharacterDataModified",
  "DOMNodeInserted",
  "DOMNodeInsertedIntoDocument",
  "DOMNodeRemoved",
  "DOMNodeRemovedFromDocument",
  "DOMSubtreeModified",
  "DOMFocusIn",
  "DOMFocusOut"
];

for (const dEvt of DOMEvents) {

  document.addEventListener(dEvt,
    () => {

      console.info("DOMEvent: ", dEvt); // eslint-disable-line no-console

    });

}
