const core = require('@actions/core');
const github = require('@actions/github');

try {

  const width = core.getInput('width');
  const height = core.getInput('height');
  let area = (width*height)/2;
  console.log(`the area of the triangle is ${area}.`);
  core.setOutput("area", area);
  
} catch (error) {
  core.setFailed(error.message);
}
