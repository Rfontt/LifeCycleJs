'use strict';

const { watch, promises: { readFile } } = require('fs');

class File {
    watch(event, filename) {
        console.log('this', this);
        console.log('arguments', Array.prototype.slice.call(arguments));

        this.showContent(filename);
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString());
    }
}

// watch(__filename, async (event, filename) => {
//     console.log('index.js', event);
// });

const file = new File();
// watch(__filename, file.watch)

// podemos deixar explicito qual é o contexto que a função vai ter

// o bind retorna uma função com o 'this' que setamos, ignorando o this do watch.
// watch(__filename, file.watch.bind(file));

file.watch.call({ showContent: () => console.log('call: hey sinon') }, null, __filename);
file.watch.apply({ showContent: () => console.log('call: hey sinon') }, [null, __filename]);