import figmaContainer from './figmaFiles/figma-container.json';
import figmaStack from './figmaFiles/figma-stack.json';

const checkStackOrContainer = (figmaJson: any): 'stack' | 'container' => {
  if (!figmaJson?.Result?.nodes) return 'container';

  const nodes = figmaJson.Result.nodes;
  const firstNodeId = Object.keys(nodes)[0]; // e.g., "1:5175"
  const document = nodes[firstNodeId]?.document;

  if (!document) return 'container';

  const layoutMode = document.layoutMode;

  if (layoutMode === 'HORIZONTAL' || layoutMode === 'VERTICAL') {
    return 'stack';
  }

  return 'container';
};


console.log('Container result:', checkStackOrContainer(figmaContainer)); // "container"
console.log('Stack result:', checkStackOrContainer(figmaStack));         // "stack"
