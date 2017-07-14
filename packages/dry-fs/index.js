module.exports = {
  readFile: (_, callback) => callback(null, ''),
  readFileSync: () => '',
  readdir: (_, callback) => callback(null, []),
  readdirSync: () => [],
  writeFile: (_, callback) => callback(null),
  writeFileSync: () => {}
}
