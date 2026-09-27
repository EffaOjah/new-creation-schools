const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'media');

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  // Filter out non-files just in case, and sort them so renaming is deterministic
  files = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')).sort();

  let count = 1;
  files.forEach(file => {
    const ext = path.extname(file);
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, `media-${count}${ext}`);
    fs.renameSync(oldPath, newPath);
    count++;
  });

  console.log(`Renamed ${count - 1} files.`);
});
