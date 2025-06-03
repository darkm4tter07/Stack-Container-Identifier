# Stack vs Container Identifier
A simple TypeScript utility to determine whether a Figma component JSON represents a stack or a container by analyzing the layout properties.

## Overview
This tool inspects a Figma component's JSON structure and checks its layoutMode to classify it as either:

Stack (if layoutMode is HORIZONTAL or VERTICAL)

Container (otherwise)

It helps developers working with Figma JSON exports to programmatically distinguish between these two common layout types.

How It Works
The core logic inspects the first node's layoutMode property inside the Figma JSON:

```
const checkStackOrContainer = (figmaJson: any): 'stack' | 'container' => {
  if (!figmaJson?.Result?.nodes) return 'container';

  const nodes = figmaJson.Result.nodes;
  const firstNodeId = Object.keys(nodes)[0];
  const document = nodes[firstNodeId]?.document;

  if (!document) return 'container';

  const layoutMode = document.layoutMode;

  if (layoutMode === 'HORIZONTAL' || layoutMode === 'VERTICAL') {
    return 'stack';
  }

  return 'container';
};
```
## Usage
Import your Figma JSON files (exported from the Figma API or your saved JSON snapshots):

```
import figmaContainer from './figmaFiles/figma-container.json';
import figmaStack from './figmaFiles/figma-stack.json';
```
Call the function with the JSON object:
```
console.log('Container result:', checkStackOrContainer(figmaContainer)); 
console.log('Stack result:', checkStackOrContainer(figmaStack));         
```
