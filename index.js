// Main file for the lilypond-styles gitbook plugin
'use strict';

module.exports = {
  blocks: {
      lilypond: {
        process: function(block) {
          // Call python-ly to colorize the LilyPond input
          // Return a <pre class="lilypond"> block

          var sys = require('sys')

          var spawn = require('child_process').spawnSync;

          // Call the Python script (which uses python-ly)
          var cmd = "python/colorize-lilypond";
          var run_cl = spawn(cmd, [block.body]);

          if (run_cl.stderr != null) {
            console.log(run_cl.stderr.toString())
          };
          if (run_cl.stdout != null) {
            return run_cl.stdout.toString();
          }
          else {
            return "<p><strong>LilyPond highlighting returned no result</strong></p>"
          };
        }
      }
  }
};
