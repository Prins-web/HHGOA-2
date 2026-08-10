/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/heic-convert";
exports.ids = ["vendor-chunks/heic-convert"];
exports.modules = {

/***/ "(rsc)/./node_modules/heic-convert/formats-node.js":
/*!***************************************************!*\
  !*** ./node_modules/heic-convert/formats-node.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const jpegJs = __webpack_require__(/*! jpeg-js */ \"(rsc)/./node_modules/jpeg-js/index.js\");\nconst { PNG } = __webpack_require__(/*! pngjs */ \"(rsc)/./node_modules/pngjs/lib/png.js\");\n\nmodule.exports = {};\n\nmodule.exports.JPEG = ({ data, width, height, quality }) => jpegJs.encode({ data, width, height }, Math.floor(quality * 100)).data;\n\nmodule.exports.PNG = ({ data, width, height }) => {\n  const png = new PNG({ width, height });\n  png.data = data;\n\n  return PNG.sync.write(png, {\n    width: width,\n    height: height,\n    deflateLevel: 9,\n    deflateStrategy: 3,\n    filterType: -1,\n    colorType: 6,\n    inputHasAlpha: true\n  });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2Zvcm1hdHMtbm9kZS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsc0RBQVM7QUFDaEMsUUFBUSxNQUFNLEVBQUUsbUJBQU8sQ0FBQyxvREFBTzs7QUFFL0I7O0FBRUEsbUJBQW1CLE1BQU0sOEJBQThCLHFCQUFxQixxQkFBcUI7O0FBRWpHLGtCQUFrQixNQUFNLHFCQUFxQjtBQUM3Qyx3QkFBd0IsZUFBZTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJhbWUtaW4tZ29hLy4vbm9kZV9tb2R1bGVzL2hlaWMtY29udmVydC9mb3JtYXRzLW5vZGUuanM/YzdlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqcGVnSnMgPSByZXF1aXJlKCdqcGVnLWpzJyk7XG5jb25zdCB7IFBORyB9ID0gcmVxdWlyZSgncG5nanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMuSlBFRyA9ICh7IGRhdGEsIHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfSkgPT4ganBlZ0pzLmVuY29kZSh7IGRhdGEsIHdpZHRoLCBoZWlnaHQgfSwgTWF0aC5mbG9vcihxdWFsaXR5ICogMTAwKSkuZGF0YTtcblxubW9kdWxlLmV4cG9ydHMuUE5HID0gKHsgZGF0YSwgd2lkdGgsIGhlaWdodCB9KSA9PiB7XG4gIGNvbnN0IHBuZyA9IG5ldyBQTkcoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICBwbmcuZGF0YSA9IGRhdGE7XG5cbiAgcmV0dXJuIFBORy5zeW5jLndyaXRlKHBuZywge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBkZWZsYXRlTGV2ZWw6IDksXG4gICAgZGVmbGF0ZVN0cmF0ZWd5OiAzLFxuICAgIGZpbHRlclR5cGU6IC0xLFxuICAgIGNvbG9yVHlwZTogNixcbiAgICBpbnB1dEhhc0FscGhhOiB0cnVlXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/formats-node.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/heic-convert/index.js":
/*!********************************************!*\
  !*** ./node_modules/heic-convert/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const decode = __webpack_require__(/*! heic-decode */ \"(rsc)/./node_modules/heic-decode/index.js\");\nconst formats = __webpack_require__(/*! ./formats-node.js */ \"(rsc)/./node_modules/heic-convert/formats-node.js\");\nconst { one, all } = __webpack_require__(/*! ./lib.js */ \"(rsc)/./node_modules/heic-convert/lib.js\")(decode, formats);\n\nmodule.exports = one;\nmodule.exports.all = all;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyw4REFBYTtBQUNwQyxnQkFBZ0IsbUJBQU8sQ0FBQyw0RUFBbUI7QUFDM0MsUUFBUSxXQUFXLEVBQUUsbUJBQU8sQ0FBQywwREFBVTs7QUFFdkM7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmFtZS1pbi1nb2EvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2luZGV4LmpzPzI2MzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVjb2RlID0gcmVxdWlyZSgnaGVpYy1kZWNvZGUnKTtcbmNvbnN0IGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMtbm9kZS5qcycpO1xuY29uc3QgeyBvbmUsIGFsbCB9ID0gcmVxdWlyZSgnLi9saWIuanMnKShkZWNvZGUsIGZvcm1hdHMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uZTtcbm1vZHVsZS5leHBvcnRzLmFsbCA9IGFsbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/heic-convert/lib.js":
/*!******************************************!*\
  !*** ./node_modules/heic-convert/lib.js ***!
  \******************************************/
/***/ ((module) => {

eval("module.exports = (decode, encode) => {\n  const convertImage = async ({ image, format, quality }) => {\n    return await encode[format]({\n      width: image.width,\n      height: image.height,\n      data: image.data,\n      quality\n    });\n  };\n\n  const convert = async ({ buffer, format, quality, all }) => {\n    if (!encode[format]) {\n      throw new Error(`output format needs to be one of [${Object.keys(encode)}]`);\n    }\n\n    if (!all) {\n      const image = await decode({ buffer });\n      return await convertImage({ image, format, quality });\n    }\n\n    const images = await decode.all({ buffer });\n\n    return images.map(image => {\n      return {\n        convert: async () => await convertImage({\n          image: await image.decode(),\n          format,\n          quality\n        })\n      };\n    });\n  };\n\n  return {\n    one: async ({ buffer, format, quality = 0.92 }) => await convert({ buffer, format, quality, all: false }),\n    all: async ({ buffer, format, quality = 0.92 }) => await convert({ buffer, format, quality, all: true })\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGVpYy1jb252ZXJ0L2xpYi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGdDQUFnQyx3QkFBd0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0EsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDLGtDQUFrQyx3QkFBd0I7QUFDMUQ7O0FBRUEsc0NBQXNDLFFBQVE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGtCQUFrQixnQ0FBZ0MscUJBQXFCLHFDQUFxQztBQUM1RyxrQkFBa0IsZ0NBQWdDLHFCQUFxQixvQ0FBb0M7QUFDM0c7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyYW1lLWluLWdvYS8uL25vZGVfbW9kdWxlcy9oZWljLWNvbnZlcnQvbGliLmpzPzBlZjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoZGVjb2RlLCBlbmNvZGUpID0+IHtcbiAgY29uc3QgY29udmVydEltYWdlID0gYXN5bmMgKHsgaW1hZ2UsIGZvcm1hdCwgcXVhbGl0eSB9KSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGVuY29kZVtmb3JtYXRdKHtcbiAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgZGF0YTogaW1hZ2UuZGF0YSxcbiAgICAgIHF1YWxpdHlcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0ID0gYXN5bmMgKHsgYnVmZmVyLCBmb3JtYXQsIHF1YWxpdHksIGFsbCB9KSA9PiB7XG4gICAgaWYgKCFlbmNvZGVbZm9ybWF0XSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBvdXRwdXQgZm9ybWF0IG5lZWRzIHRvIGJlIG9uZSBvZiBbJHtPYmplY3Qua2V5cyhlbmNvZGUpfV1gKTtcbiAgICB9XG5cbiAgICBpZiAoIWFsbCkge1xuICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBkZWNvZGUoeyBidWZmZXIgfSk7XG4gICAgICByZXR1cm4gYXdhaXQgY29udmVydEltYWdlKHsgaW1hZ2UsIGZvcm1hdCwgcXVhbGl0eSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBkZWNvZGUuYWxsKHsgYnVmZmVyIH0pO1xuXG4gICAgcmV0dXJuIGltYWdlcy5tYXAoaW1hZ2UgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udmVydDogYXN5bmMgKCkgPT4gYXdhaXQgY29udmVydEltYWdlKHtcbiAgICAgICAgICBpbWFnZTogYXdhaXQgaW1hZ2UuZGVjb2RlKCksXG4gICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvbmU6IGFzeW5jICh7IGJ1ZmZlciwgZm9ybWF0LCBxdWFsaXR5ID0gMC45MiB9KSA9PiBhd2FpdCBjb252ZXJ0KHsgYnVmZmVyLCBmb3JtYXQsIHF1YWxpdHksIGFsbDogZmFsc2UgfSksXG4gICAgYWxsOiBhc3luYyAoeyBidWZmZXIsIGZvcm1hdCwgcXVhbGl0eSA9IDAuOTIgfSkgPT4gYXdhaXQgY29udmVydCh7IGJ1ZmZlciwgZm9ybWF0LCBxdWFsaXR5LCBhbGw6IHRydWUgfSlcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/heic-convert/lib.js\n");

/***/ })

};
;