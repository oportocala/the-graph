I don't care about cleanup but if I did this is what i would do to graph-node:

1. componentize - sub-elements:
  - /node
  - InPorts
  - OutPorts
  - Heading
  - Content

2. Coffee / ES6
3. Webpack / other loaders
4. Update React version
5. cleanup render function
   - TheGraph.factories, .node, .node.config
   - multiple var declarations

6. JSX
   NOTE: browserify is already part of the Gruntfile, [need grunt-react](https://www.npmjs.com/package/grunt-react) and add to transforms for JSX
   coffeefy is already there