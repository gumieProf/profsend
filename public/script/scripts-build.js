﻿/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/script/app.js":
/*!******************************!*\
  !*** ./public/script/app.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./public/script/main.js\");\n/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download */ \"./public/script/download.js\");\n/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\n\n\n\n(0,_main__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_download__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://profsend/./public/script/app.js?");

/***/ }),

/***/ "./public/script/download.js":
/*!***********************************!*\
  !*** ./public/script/download.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ download)\n/* harmony export */ });\n/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\nfunction download() {\n  $(function () {\n    $(\"#download\").click(function () {\n      var name = $(\"#name\").val();\n      $(\"#name, #id, #age, #coment\").on(\"keyup\", function () {\n        var name = $(\"#name\").val();\n      });\n\n      if (name == null || name == \"\") {\n        alert(\"名前が抜けています。\");\n      } else {\n        let canvas = document.getElementById(\"prof\");\n\n        let link = document.createElement(\"a\");\n        link.href = canvas.toDataURL(\"image/png\");\n        link.download = \"prof.png\";\n        link.click();\n      }\n      return false;\n    });\n    $(\"#windl\").click(function () {\n      var dlcanv = document.createElement(\"canvas\");\n      dlcanv.width = 1920;\n      dlcanv.height = 1080;\n      setTimeout(() => {\n        var o = \"50px\";\n        var id = $(\"#id\").val();\n        var age = $(\"#age\").val();\n        var coment = $(\"#coment\").val();\n        var sns = $(\"#snsText\").val();\n        var name = $(\"#name\").val();\n        var prof = dlcanv;\n        var m = prof.getContext(\"2d\");\n        var e = document.getElementById(\"file\");\n        var color = $(\"#colors\").val();\n\n        var text = $(\"#textColor\").val();\n\n        var comentif = coment == null || typeof coment == \"undefined\" ||\n          coment == \"\";\n        var snsif = sns == null || typeof sns == \"undefined\" || sns == \"\";\n        var ageif = age == null || typeof age == \"undefined\" || age == \"\";\n\n        if (comentif && snsif && ageif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id;\n        } else if (comentif && snsif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\n AGE: \\t\" + age;\n        } else if (ageif && snsif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\nCOMMENT: \\t\" + age;\n        } else if (ageif && comentif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\nSNS: \\t\" + sns;\n        } else if (ageif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\nCOMMENT: \\t\" +\n            coment +\n            \"\\nSNS: \\t\" +\n            sns;\n        } else if (comentif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nSNS: \\t\" +\n            sns;\n        } else if (snsif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nCOMMENT: \\t\" +\n            coment;\n        } else {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nCOMMENT: \\t\" +\n            coment +\n            \"\\nSNS: \\t\" +\n            sns;\n        }\n\n        m.clearRect(0, 0, prof.width + 100, prof.height + 100);\n        m.beginPath();\n        m.fillStyle = \"\" + color;\n        m.fillRect(0, 0, prof.width + 100, prof.height + 100);\n        m.fillStyle = \"\" + text;\n        m.rect(15, 15, prof.width - 30, prof.height - 30);\n        m.lineWidth = 8;\n        m.stroke();\n        var fontSize = 50; // フォントサイズ\n        m.strokeStyle = text\n\n        var lineHeight = 1.5; // 行の高さ (フォントサイズに対する倍率)\n        var x = 30; // 水平位置\n        var y = 30; // 垂直位置\n        m.font = \"bold \" + o + \" Noto Sans JP\";\n        for (var lines = e.split(\"\\n\"), i = 0, l = lines.length; l > i; i++) {\n          var line = lines[i];\n          var addY = fontSize;\n\n          // 2行目以降の水平位置は行数とlineHeightを考慮する\n          if (i) addY += fontSize * lineHeight * i;\n\n          m.fillText(line, x + 0, y + addY);\n          var a = new Image();\n          (a.src = \"\" + pic), m.drawImage(a, prof.width - 50, prof.height - 50, 30, 30);\n        }\n        let link = document.createElement(\"a\");\n        link.href = prof.toDataURL(\"image/png\");\n        link.download = \"prof-window.png\";\n        link.click();\n      }, 50);\n      return false;\n    });\n    $(\"#smtdl\").click(function () {\n      var dlcanv = document.createElement(\"canvas\");\n      dlcanv.width = 1080;\n      dlcanv.height = 1920;\n      setTimeout(() => {\n        var o = \"45px\";\n        var id = $(\"#id\").val();\n        var age = $(\"#age\").val();\n        var coment = $(\"#coment\").val();\n        var sns = $(\"#snsText\").val();\n        var name = $(\"#name\").val();\n        var prof = dlcanv;\n        var m = prof.getContext(\"2d\");\n        var e = document.getElementById(\"file\");\n        var color = $(\"#colors\").val();\n\n        var text = $(\"#textColor\").val();\n\n        var comentif = coment == null || typeof coment == \"undefined\" ||\n          coment == \"\";\n        var snsif = sns == null || typeof sns == \"undefined\" || sns == \"\";\n        var ageif = age == null || typeof age == \"undefined\" || age == \"\";\n\n        if (comentif && snsif && ageif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id;\n        } else if (comentif && snsif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\n AGE: \\t\" + age;\n        } else if (ageif && snsif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\nCOMMENT: \\t\" + age;\n        } else if (ageif && comentif) {\n          var e = \"NAME:\\t\" + name + \"\\nID: \\t\" + id + \"\\nSNS: \\t\" + sns;\n        } else if (ageif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\nCOMMENT: \\t\" +\n            coment +\n            \"\\nSNS: \\t\" +\n            sns;\n        } else if (comentif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nSNS: \\t\" +\n            sns;\n        } else if (snsif) {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nCOMMENT: \\t\" +\n            coment;\n        } else {\n          var e = \"NAME:\\t\" +\n            name +\n            \"\\nID: \\t\" +\n            id +\n            \"\\n AGE: \\t\" +\n            age +\n            \"\\nCOMMENT: \\t\" +\n            coment +\n            \"\\nSNS: \\t\" +\n            sns;\n        }\n\n        m.clearRect(0, 0, prof.width + 100, prof.height + 100);\n        m.beginPath();\n        m.fillStyle = \"\" + color;\n        m.fillRect(0, 0, prof.width + 100, prof.height + 100);\n        m.fillStyle = \"\" + text;\n        m.rect(15, 15, prof.width - 30, prof.height - 30);\n        m.lineWidth = 8;\n        m.strokeStyle = text\n        m.stroke();\n        var fontSize = 45; // フォントサイズ\n        var lineHeight = 1.5; // 行の高さ (フォントサイズに対する倍率)\n        var x = 30; // 水平位置\n        var y = 30; // 垂直位置\n        m.font = \"bold \" + o + \" Noto Sans JP\";\n        for (var lines = e.split(\"\\n\"), i = 0, l = lines.length; l > i; i++) {\n          var line = lines[i];\n          var addY = fontSize;\n\n          // 2行目以降の水平位置は行数とlineHeightを考慮する\n          if (i) addY += fontSize * lineHeight * i;\n\n          m.fillText(line, x + 0, y + addY);\n          var a = new Image();\n          (a.src = \"\" + pic), m.drawImage(a, prof.width - 50, prof.height - 50, 30, 30);\n        }\n        let link = document.createElement(\"a\");\n        link.href = prof.toDataURL(\"image/png\");\n        link.download = \"prof-smart.png\";\n        link.click();\n      }, 50);\n      return false;\n    });\n\n  });\n}\n\n\n//# sourceURL=webpack://profsend/./public/script/download.js?");

/***/ }),

/***/ "./public/script/main.js":
/*!*******************************!*\
  !*** ./public/script/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ main)\n/* harmony export */ });\n﻿/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\nfunction main() {\n  $(function () {\n    $(\"#prof\").hide();\n    var o = \"50px\",\n      prof = document.getElementById(\"prof\"),\n      m = prof.getContext(\"2d\"),\n      picHeight,\n      picWidth,\n      file = document.getElementById(\"file\"),\n      e;\n    if (\n      localStorage.getItem(\"autosync\") === true ||\n      localStorage.getItem(\"autosync\") === null\n    ) {\n      $(\".switch__label\").prop(\"checked\", true);\n      localStorage.setItem(\"autosync\", true);\n    }\n    function setData() {\n      if (localStorage.getItem(\"profData\")) {\n        var object = localStorage.getItem(\"profData\");\n      }\n      var newObj = {};\n      if (object) {\n        var data = JSON.stringify(object);\n        var titleName = new Function(\"data.title\" + i)();\n        var valueName = new Function(\"data.value\" + i)();\n        var newTitleName = new Function(\"newObj.title\" + i)();\n        var newValueName = new Function(\"newObj.value\" + i)();\n        $(\".editList\").empty();\n        for (let i = 1; i < data.length; i++) {\n          $(\".editList\").append('<li class=\"editText' + i + '\"></li>');\n          var title = $(\".editText\" + i).append(\n            '<input type=\"text\" class=\"title' + i + '\"/>'\n          );\n          $(\".editText\" + i).append(\n            '<a href=\"#\" class=\"deleteBtn\"><i class=\"far fa-times-circle\"></i></a>'\n          );\n          var value = $(\".editText\" + i).append(\n            '<input type=\"text\" class=\"value' + i + '\"/>'\n          );\n          title.val(titleName);\n          value.val(valueName);\n        }\n        if ($(\".switch__label\").prop(\"checked\")) {\n          for (let i = 1; i <= data.length; i++) {\n            if ($(\".editText\" + i)) {\n              newTitleName = $(\"title\" + i).val();\n              newValueName = $(\"value\" + i).val();\n            }\n          }\n          localStorage.setItem(\"profdata\", newObj);\n        }\n      }\n    }\n    setTimeout(function () {\n      $(\"#background-pic\").hide();\n      $(\"#scanFile\").hide();\n      $(\".datas\").hide();\n\n      $(\"#data1Btn,.subData1\").click(function () {\n        $(\".datas\").hide();\n        $(\"#data1\").fadeIn();\n        $(\".dataBtn\").hide();\n        return false;\n      });\n      $(\"#data2Btn,.subData2\").click(function () {\n        $(\".datas\").hide();\n\n        $(\"#data2\").fadeIn();\n        $(\".dataBtn\").hide();\n\n        return false;\n      });\n      $(\"#data3Btn,.subData3\").click(function () {\n        $(\".datas\").hide();\n\n        $(\"#data3\").fadeIn();\n        $(\".dataBtn\").hide();\n\n        return false;\n      });\n      $(\".back\").click(function () {\n        $(\".datas\").hide();\n        $(\".dataBtn\").show();\n        return false;\n      });\n      $(\".envls\").click(function () {\n        var img = $(this).find(\"img\");\n        var imgWidth = img.attr(\"width\");\n        var imgHeight = img.attr(\"width\");\n        var imgsrc = img.attr(\"src\");\n        pic = imgsrc;\n        picHeight = imgHeight;\n        picWidth = imgWidth;\n        i();\n        return false;\n      });\n\n      var prof = document.getElementById(\"prof\");\n      var m = prof.getContext(\"2d\");\n      new Image().src = \"\" + pic;\n      var i = function () {\n        setData();\n        setTimeout(function () {\n          for (let i = 1; i <= $(\".editlist li\").length; i++) {\n            if (i == 1) {\n              if ($(\"editText\" + i)) {\n                e = e + $(\".title\" + i).val() + \"\\t\" + $(\".value\" + i).val();\n              } else if (i === 10) {\n                e = e + $(\".title\" + i).val() + \"\\t\" + $(\".value\" + i).val();\n              } else {\n                e =\n                  e +\n                  \"\\n\" +\n                  $(\".title\" + i).val() +\n                  \"\\t\" +\n                  $(\".value\" + i).val();\n              }\n            }\n          }\n\n          m.clearRect(0, 0, prof.width + 100, prof.height + 100);\n          m.beginPath();\n          m.fillStyle = \"\" + color;\n          m.fillRect(0, 0, prof.width + 100, prof.height + 100);\n          m.fillStyle = \"\" + text;\n          m.rect(15, 15, prof.width - 30, prof.height - 30);\n          m.lineWidth = 8;\n          m.strokeStyle = text;\n          m.stroke();\n          var fontSize = 100; // フォントサイズ\n          var lineHeight = 0.5; // 行の高さ (フォントサイズに対する倍率)\n          var x = 50; // 水平位置\n          var y = 50; // 垂直位置\n          m.font = \"bold \" + o + \" Noto Sans JP\";\n          for (var lines = e.split(\"\\n\"), i = 0, l = lines.length; l > i; i++) {\n            var line = lines[i];\n            var addY = fontSize;\n\n            // 2行目以降の水平位置は行数とlineHeightを考慮する\n            if (i) addY += fontSize * lineHeight * i;\n\n            m.fillText(line, x + 0, y + addY);\n            var a = new Image();\n            (a.src = \"\" + pic),\n              m.drawImage(\n                a,\n                prof.width - 150,\n                prof.height - 150,\n                picWidth,\n                picHeight\n              );\n          }\n          var imgT = document.getElementById(\"preview\");\n          imgT.src = prof.toDataURL();\n        }, 50);\n      };\n      window.i = i;\n      m.fillStyle = \"\" + color;\n      m.fillRect(0, 0, 450, 300);\n      m.fillStyle = \"\" + text;\n      m.rect(15, 15, 370, 170);\n      m.lineWidth = 8;\n      m.stroke();\n      $(\"#name\").val(), $(\"#id\").val(), $(\"#age\").val(), $(\"#coment\").val();\n      $(\"#snsText\").val();\n      i();\n      $(\".profelem,#coment\").on({\n        keydown: i,\n        chenge: i,\n      });\n      $(document).on(\n        {\n          keydown: i,\n          chenge: i,\n        },\n        \".profelem,#coment\"\n      );\n      $(\"#colors\").change(function () {\n        (color = $(this).val()), i();\n      }),\n        $(\"#textColor\").change(function () {\n          (text = $(this).val()), i();\n        }),\n        i();\n    }),\n      file.addEventListener(\"change\", function (e) {\n        var t = file.target.files[0];\n        if (t.type.match(\"image.*\")) {\n          var n = new FileReader();\n          (n.onload = function () {\n            (pic = n.result), i();\n          }),\n            n.readAsDataURL(t);\n        } else alert(\"画像を選択してください\");\n      });\n    $(\"#cookieClear\").click(function () {\n      localStorage.setItem(\"profdata\", null);\n      return false;\n    });\n    $(\".addBtn\").click(function () {\n      var nam = $(\".editlist > li\").length() + 1;\n      var elem =\n        '<li class=\"editText' +\n        nam +\n        '\">' +\n        '<input type=\"text\" class=\"title' +\n        nam +\n        '\" value=\"名前\" /><a' +\n        'href=\"#\"' +\n        'class=\"deleteBtn\"' +\n        '><input type=\"text\" class=\"value' +\n        nam +\n        '\" /><i' +\n        'class=\"far fa-times-circle\"' +\n        \"></i></a></li>\";\n      $(\".editlist\").append(elem);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://profsend/./public/script/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/script/app.js");
/******/ 	
/******/ })()
;