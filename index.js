const core = require('@actions/core');
const github = require('@actions/github');

try {

  const width = core.getInput('width');
  const height = core.getInput('height');
  let area = width*height;
  console.log(`the area of the triangle is ${area}!`);
  core.setOutput("area", area);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
