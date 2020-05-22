const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const snapshotPath = path.join(
  __dirname,
  '..',
  '.storybook',
  '__snapshots__',
  `Snapshots.test.js.snap`,
);

if (!fs.existsSync(snapshotPath)) {
  console.log('snapshot file not found');
  process.exit(1);
}
const snapshot = require(snapshotPath);
const output = Object.keys(snapshot)
  .map(
    name =>
      `${name}: ${crypto
        .createHash('md5')
        .update(snapshot[name])
        .digest('hex')}`,
  )
  .concat([''])
  .join('\n');
fs.writeFileSync(`${snapshotPath}.hash`, output);
