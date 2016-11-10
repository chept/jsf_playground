const Logger = (function() {
  const write = function(text) {
    console.log(text);
  }
  const clear = function() {
    console.clear();
  }
  return {
    clear,
    write
  }
})();