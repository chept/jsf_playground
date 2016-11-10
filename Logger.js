const Logger = (function Logger () {

  let buffer = "";

  const
    clear = function clear () {

      console.clear();

    },
    write = function write (text) {

      console.log(text);

    },
    flush = function flush () {

      write(buffer);
      buffer = "";

    },
    push = function push (text) {

      buffer += `${text}\n`;

    };

  return {
    clear,
    flush,
    push,
    write
  };

}());