"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(navbar)/creator/my-course/[id]/page",{

/***/ "(app-pages-browser)/./src/services/video.ts":
/*!*******************************!*\
  !*** ./src/services/video.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCourseVideo: function() { return /* binding */ deleteCourseVideo; },\n/* harmony export */   fetchRenderVideoCreator: function() { return /* binding */ fetchRenderVideoCreator; },\n/* harmony export */   fetchRenderVideoLearner: function() { return /* binding */ fetchRenderVideoLearner; },\n/* harmony export */   uploadVideo: function() { return /* binding */ uploadVideo; }\n/* harmony export */ });\n/* harmony import */ var _sessions_my_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/sessions/my-auth */ \"(app-pages-browser)/./src/sessions/my-auth.ts\");\n\nconst backendUrl = \"http://localhost:5000\";\nasync function uploadVideo(file, title, description, courseId) {\n    const formData = new FormData();\n    formData.append(\"video\", file);\n    formData.append(\"description\", description);\n    formData.append(\"title\", title);\n    console.log(formData.values);\n    try {\n        const response = await fetch(\"\".concat(backendUrl, \"/api/upload/\").concat(courseId), {\n            method: \"POST\",\n            headers: {\n                Authorization: \"Bearer \".concat((0,_sessions_my_auth__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n            },\n            body: formData\n        });\n        if (response.ok) {\n            alert(\"File uploaded successfully!\");\n            return await response.json();\n        } else {\n            const errorData = await response.json();\n            console.error(\"Error uploading file:\", errorData);\n            alert(\"File upload failed. Please try again.\");\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error uploading file:\", error);\n        alert(\"File upload failed. Please try again.\");\n        return null;\n    }\n}\nasync function deleteCourseVideo(id) {\n    try {\n        const response = await fetch(\"\".concat(backendUrl, \"/api/delete-video/\").concat(id), {\n            method: \"DELETE\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat((0,_sessions_my_auth__WEBPACK_IMPORTED_MODULE_0__.getToken)())\n            }\n        });\n        if (!response.ok) {\n            throw new Error(\"HTTP error! Status: \".concat(response.status));\n        }\n        return await response.json();\n    } catch (error) {\n        console.error(\"Error:\", error);\n        return null; // Return null or handle the error appropriately\n    }\n}\nasync function fetchRenderVideoLearner(video) {\n    if (!video) {\n        return \"\";\n    }\n    try {\n        // Make a GET request to your backend API to fetch the video\n        const response = await fetch(\"\".concat(backendUrl, \"/api/video/learner/\").concat(video._id), {\n            headers: {\n                Authorization: \"Bearer \".concat((0,_sessions_my_auth__WEBPACK_IMPORTED_MODULE_0__.getToken)()) // Include the bearer token in the request header\n            }\n        });\n        if (!response.ok) {\n            console.error(\"Failed to fetch video: \".concat(response.status, \" \").concat(response.statusText));\n            return \"\";\n        }\n        // Convert the video data to blob\n        console.log(response);\n        const videoBlob = await response.blob();\n        // Create a blob URL from the video data received from the server\n        const videoUrl = URL.createObjectURL(videoBlob);\n        return videoUrl;\n    // Set the video URL to play the video\n    } catch (error) {\n        console.error(\"Error fetching video:\", error);\n        return \"\";\n    }\n}\nasync function fetchRenderVideoCreator(video) {\n    if (!video) {\n        return \"\";\n    }\n    try {\n        // Make a GET request to your backend API to fetch the video\n        const response = await fetch(\"\".concat(backendUrl, \"/api/video/creator/\").concat(video._id), {\n            headers: {\n                Authorization: \"Bearer \".concat((0,_sessions_my_auth__WEBPACK_IMPORTED_MODULE_0__.getToken)()) // Include the bearer token in the request header\n            }\n        });\n        if (!response.ok) {\n            console.error(\"Failed to fetch video: \".concat(response.status, \" \").concat(response.statusText));\n            return \"\";\n        }\n        // Convert the video data to blob\n        console.log(response);\n        const videoBlob = await response.blob();\n        // Create a blob URL from the video data received from the server\n        const videoUrl = URL.createObjectURL(videoBlob);\n        return videoUrl;\n    // Set the video URL to play the video\n    } catch (error) {\n        console.error(\"Error fetching video:\", error);\n        return \"\";\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy92aWRlby50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM4QztBQUU5QyxNQUFNQyxhQUFhQyx1QkFBbUM7QUFHL0MsZUFBZUcsWUFDbEJDLElBQVUsRUFDVkMsS0FBYSxFQUNiQyxXQUFtQixFQUNuQkMsUUFBZTtJQUVmLE1BQU1DLFdBQVcsSUFBSUM7SUFDckJELFNBQVNFLE1BQU0sQ0FBQyxTQUFTTjtJQUN6QkksU0FBU0UsTUFBTSxDQUFDLGVBQWVKO0lBQy9CRSxTQUFTRSxNQUFNLENBQUMsU0FBU0w7SUFDekJNLFFBQVFDLEdBQUcsQ0FBQ0osU0FBU0ssTUFBTTtJQUUzQixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQTRCUixPQUF6QlIsWUFBVyxnQkFBdUIsT0FBVFEsV0FBWTtZQUNuRVMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQQyxlQUFlLFVBQXFCLE9BQVhwQiwyREFBUUE7WUFDbkM7WUFDQXFCLE1BQU1YO1FBQ1I7UUFFQSxJQUFJTSxTQUFTTSxFQUFFLEVBQUU7WUFDZkMsTUFBTTtZQUNOLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUM1QixPQUFPO1lBQ0wsTUFBTUMsWUFBWSxNQUFNVCxTQUFTUSxJQUFJO1lBQ3JDWCxRQUFRYSxLQUFLLENBQUMseUJBQXlCRDtZQUN2Q0YsTUFBTTtZQUNOLE9BQU87UUFDVDtJQUNGLEVBQUUsT0FBT0csT0FBTztRQUNkYixRQUFRYSxLQUFLLENBQUMseUJBQXlCQTtRQUN2Q0gsTUFBTTtRQUNOLE9BQU87SUFDVDtBQUNGO0FBR08sZUFBZUksa0JBQWtCQyxFQUFTO0lBQy9DLElBQUk7UUFDRixNQUFNWixXQUFXLE1BQU1DLE1BQU0sR0FBa0NXLE9BQS9CM0IsWUFBVyxzQkFBdUIsT0FBSDJCLEtBQU07WUFDbkVWLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxlQUFlLFVBQXFCLE9BQVhwQiwyREFBUUE7WUFDbkM7UUFDRjtRQUVBLElBQUksQ0FBQ2dCLFNBQVNNLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlPLE1BQU0sdUJBQXVDLE9BQWhCYixTQUFTYyxNQUFNO1FBQ3hEO1FBRUEsT0FBTyxNQUFNZCxTQUFTUSxJQUFJO0lBQzVCLEVBQUUsT0FBT0UsT0FBTztRQUNkYixRQUFRYSxLQUFLLENBQUMsVUFBVUE7UUFDeEIsT0FBTyxNQUFNLGdEQUFnRDtJQUMvRDtBQUNGO0FBR08sZUFBZUssd0JBQXdCQyxLQUFzQjtJQUNsRSxJQUFHLENBQUNBLE9BQU07UUFDUixPQUFPO0lBQ1Q7SUFDQSxJQUFJO1FBRUYsNERBQTREO1FBQzVELE1BQU1oQixXQUFXLE1BQU1DLE1BQU0sR0FBbUNlLE9BQWhDL0IsWUFBVyx1QkFBK0IsT0FBVitCLE1BQU1DLEdBQUcsR0FBSTtZQUMzRWQsU0FBUztnQkFDUEMsZUFBZSxVQUFxQixPQUFYcEIsMkRBQVFBLElBQUssaURBQWlEO1lBQ3pGO1FBQ0Y7UUFFQSxJQUFJLENBQUNnQixTQUFTTSxFQUFFLEVBQUU7WUFDaEJULFFBQVFhLEtBQUssQ0FBQywwQkFBNkNWLE9BQW5CQSxTQUFTYyxNQUFNLEVBQUMsS0FBdUIsT0FBcEJkLFNBQVNrQixVQUFVO1lBQzlFLE9BQU87UUFDVDtRQUVBLGlDQUFpQztRQUNqQ3JCLFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWixNQUFNbUIsWUFBWSxNQUFNbkIsU0FBU29CLElBQUk7UUFFckMsaUVBQWlFO1FBQ2pFLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQ0o7UUFDckMsT0FBT0U7SUFDUCxzQ0FBc0M7SUFFeEMsRUFBRSxPQUFPWCxPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU87SUFDVDtBQUNGO0FBRU8sZUFBZWMsd0JBQXdCUixLQUFzQjtJQUNsRSxJQUFHLENBQUNBLE9BQU07UUFDUixPQUFPO0lBQ1Q7SUFDQSxJQUFJO1FBRUYsNERBQTREO1FBQzVELE1BQU1oQixXQUFXLE1BQU1DLE1BQU0sR0FBbUNlLE9BQWhDL0IsWUFBVyx1QkFBK0IsT0FBVitCLE1BQU1DLEdBQUcsR0FBSTtZQUMzRWQsU0FBUztnQkFDUEMsZUFBZSxVQUFxQixPQUFYcEIsMkRBQVFBLElBQUssaURBQWlEO1lBQ3pGO1FBQ0Y7UUFFQSxJQUFJLENBQUNnQixTQUFTTSxFQUFFLEVBQUU7WUFDaEJULFFBQVFhLEtBQUssQ0FBQywwQkFBNkNWLE9BQW5CQSxTQUFTYyxNQUFNLEVBQUMsS0FBdUIsT0FBcEJkLFNBQVNrQixVQUFVO1lBQzlFLE9BQU87UUFDVDtRQUVBLGlDQUFpQztRQUNqQ3JCLFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWixNQUFNbUIsWUFBWSxNQUFNbkIsU0FBU29CLElBQUk7UUFFckMsaUVBQWlFO1FBQ2pFLE1BQU1DLFdBQVdDLElBQUlDLGVBQWUsQ0FBQ0o7UUFDckMsT0FBT0U7SUFDUCxzQ0FBc0M7SUFFeEMsRUFBRSxPQUFPWCxPQUFPO1FBQ2RiLFFBQVFhLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZXJ2aWNlcy92aWRlby50cz85YWJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvdXJzZVByb3BzLENvdXJzZVZpZGVvIH0gZnJvbSBcIkAvdHlwZXMvY291cnNlXCI7XG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJAL3Nlc3Npb25zL215LWF1dGhcIjtcblxuY29uc3QgYmFja2VuZFVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBQ0tFTkRfVVJMO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRWaWRlbyhcbiAgICBmaWxlOiBGaWxlLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBjb3Vyc2VJZDpzdHJpbmcsXG4gICkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidmlkZW9cIiwgZmlsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24pO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YS52YWx1ZXMpO1xuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS9hcGkvdXBsb2FkLyR7Y291cnNlSWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IC8vIERvbid0IHVzZSBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBhbGVydChcIkZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwbG9hZGluZyBmaWxlOlwiLCBlcnJvckRhdGEpO1xuICAgICAgICBhbGVydChcIkZpbGUgdXBsb2FkIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBsb2FkaW5nIGZpbGU6XCIsIGVycm9yKTtcbiAgICAgIGFsZXJ0KFwiRmlsZSB1cGxvYWQgZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBcbiAgXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDb3Vyc2VWaWRlbyhpZDpzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS9hcGkvZGVsZXRlLXZpZGVvLyR7aWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gIFxuICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgb3IgaGFuZGxlIHRoZSBlcnJvciBhcHByb3ByaWF0ZWx5XG4gICAgfVxuICB9XG4gIFxuICBcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVuZGVyVmlkZW9MZWFybmVyKHZpZGVvOkNvdXJzZVZpZGVvfG51bGwpe1xuICAgIGlmKCF2aWRlbyl7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICBcbiAgICAgIC8vIE1ha2UgYSBHRVQgcmVxdWVzdCB0byB5b3VyIGJhY2tlbmQgQVBJIHRvIGZldGNoIHRoZSB2aWRlb1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS9hcGkvdmlkZW8vbGVhcm5lci8ke3ZpZGVvLl9pZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gIC8vIEluY2x1ZGUgdGhlIGJlYXJlciB0b2tlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXJcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIHZpZGVvOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBDb252ZXJ0IHRoZSB2aWRlbyBkYXRhIHRvIGJsb2JcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHZpZGVvQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgYmxvYiBVUkwgZnJvbSB0aGUgdmlkZW8gZGF0YSByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIGNvbnN0IHZpZGVvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2aWRlb0Jsb2IpO1xuICAgICAgcmV0dXJuIHZpZGVvVXJsO1xuICAgICAgLy8gU2V0IHRoZSB2aWRlbyBVUkwgdG8gcGxheSB0aGUgdmlkZW9cbiAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZpZGVvOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfTtcbiAgXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlbmRlclZpZGVvQ3JlYXRvcih2aWRlbzpDb3Vyc2VWaWRlb3xudWxsKXtcbiAgICBpZighdmlkZW8pe1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHRyeSB7XG4gICBcbiAgICAgIC8vIE1ha2UgYSBHRVQgcmVxdWVzdCB0byB5b3VyIGJhY2tlbmQgQVBJIHRvIGZldGNoIHRoZSB2aWRlb1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtiYWNrZW5kVXJsfS9hcGkvdmlkZW8vY3JlYXRvci8ke3ZpZGVvLl9pZH1gLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gIC8vIEluY2x1ZGUgdGhlIGJlYXJlciB0b2tlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXJcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIGZldGNoIHZpZGVvOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgXG4gICAgICAvLyBDb252ZXJ0IHRoZSB2aWRlbyBkYXRhIHRvIGJsb2JcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIGNvbnN0IHZpZGVvQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcbiAgICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgYmxvYiBVUkwgZnJvbSB0aGUgdmlkZW8gZGF0YSByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIGNvbnN0IHZpZGVvVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2aWRlb0Jsb2IpO1xuICAgICAgcmV0dXJuIHZpZGVvVXJsO1xuICAgICAgLy8gU2V0IHRoZSB2aWRlbyBVUkwgdG8gcGxheSB0aGUgdmlkZW9cbiAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHZpZGVvOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfTtcbiAgIl0sIm5hbWVzIjpbImdldFRva2VuIiwiYmFja2VuZFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsInVwbG9hZFZpZGVvIiwiZmlsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb3Vyc2VJZCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIm9rIiwiYWxlcnQiLCJqc29uIiwiZXJyb3JEYXRhIiwiZXJyb3IiLCJkZWxldGVDb3Vyc2VWaWRlbyIsImlkIiwiRXJyb3IiLCJzdGF0dXMiLCJmZXRjaFJlbmRlclZpZGVvTGVhcm5lciIsInZpZGVvIiwiX2lkIiwic3RhdHVzVGV4dCIsInZpZGVvQmxvYiIsImJsb2IiLCJ2aWRlb1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZldGNoUmVuZGVyVmlkZW9DcmVhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/video.ts\n"));

/***/ })

});