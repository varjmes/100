# ext

A package that gets you the extension of a file.

```bash
ext eggs.js
# Returns '.js'

ext james.php.txt
# Returns '.txt'

ext eggs.js test.txt absolute.unit
# Returns ['.js', '.txt', '.unit']
```

## Todo

- [x] Test setup
- [ ] Core functionality: file in, extension out
- [ ] Works with multiple files
- [ ] Works as a locally installed package
- [ ] Works as a command line tool (global and npx)
- [ ] Typescript?
