/* gitbook-plugin-lilypond-highlight
   This plugin only exposes one item: {% lilypond %}, which takes input in the
   GNU LilyPond language and produces syntax highlighting for it.

   There is one external dependency: python-ly
   This means python-ly has to be installed through pip
   (or from https://github.com/wbsoft/python-ly), and the standalone script `ly`
   has to be accessible.
   Depending on the context it *may* be possible to run Gitbook in a context
   where the PYTHONPATH environment variable has been set.
   */
'use strict';

module.exports = {
    blocks: {
        lilypond: {
            process: function(block) {

                var sys = require('sys')
                var spawn = require('child_process').spawnSync;

                // Prepare command
                var cmd = "ly";
                var options = [];
                // TODO: conditionally insert options for "code"
                options.push("highlight");

                // Execute command, passing the content of the block through stdin
                var run_cl = spawn(cmd, [options], { input: block.body });

                // Handle result
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
