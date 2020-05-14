const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const snapshotPath = path.join(
  __dirname,
  '..',
  '.storybook',
  '__snapshots__',
  `${path.basename(__filename)}.snap`,
);

if (!fs.existsSync(snapshotPath)) return;
const snapshot = require(snapshotPath);
const output = Object.keys(snapshot)
  .map(
    name =>
      `${name}: ${crypto
        .createHash('md5')
        .update(snapshot[name])
        .digest('hex')}`,
  )
  .join('\n');
fs.writeFileSync(`${snapshotPath}.hash`, output);
