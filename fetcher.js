const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
    return;
  }
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.log(`Error: ${error}`);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});
