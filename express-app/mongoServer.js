const exec = require('child_process').exec;

exec('mongo marlyc', (err, stdout, stderr) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(stdout);
});
