'use strict';

var lilypond_highlight = require('./index.js');

lilypond_highlight.blocks.lilypond.process({
    body: "\\relative c'",
    args: []
});
