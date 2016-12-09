"use strict";

const DOMEvents = [
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

      console.log("DOM change:", dEvt); // eslint-disable-line no-console

    });

}
