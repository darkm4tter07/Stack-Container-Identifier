"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figma_container_json_1 = __importDefault(require("./figma/figma-container.json"));
const figma_stack_json_1 = __importDefault(require("./figma/figma-stack.json"));
const checkStackOrContainer = (figmaJson) => {
    var _a, _b;
    if (!((_a = figmaJson === null || figmaJson === void 0 ? void 0 : figmaJson.Result) === null || _a === void 0 ? void 0 : _a.nodes))
        return 'container';
    const nodes = figmaJson.Result.nodes;
    const firstNodeId = Object.keys(nodes)[0]; // e.g., "1:5175"
    const document = (_b = nodes[firstNodeId]) === null || _b === void 0 ? void 0 : _b.document;
    if (!document)
        return 'container';
    const layoutMode = document.layoutMode;
    if (layoutMode === 'HORIZONTAL' || layoutMode === 'VERTICAL') {
        return 'stack';
    }
    return 'container';
};
console.log('Container result:', checkStackOrContainer(figma_container_json_1.default)); // "container"
console.log('Stack result:', checkStackOrContainer(figma_stack_json_1.default)); // "stack"
//# sourceMappingURL=index.js.map