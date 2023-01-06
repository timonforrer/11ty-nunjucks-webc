const { EleventyRenderPlugin } = require('@11ty/eleventy');
const WebC = require('@11ty/eleventy-plugin-webc');

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} config 
 */

module.exports = function(config) {

  config.addPlugin(EleventyRenderPlugin);

  config.addPlugin(WebC, {
    components: '_includes/components/*.webc'
  });
}
