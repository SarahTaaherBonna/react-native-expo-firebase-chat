// module.exports = {
//   resolver: {
//     sourceExts: ["jsx", "js", "ts", "tsx", "json", "wasm"], //add here
//   },
// };
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [assetExts, "txt", "xml", "png", "jpg"],
      sourceExts: [...sourceExts, "txt", "xml", "png", "jpg"],
    },
  };
})();
