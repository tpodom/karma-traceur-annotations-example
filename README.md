karma-traceur-test
==================
Example project utilizing karma and traceur-compiler to write and test ES6 style JavaScript with annotations and types extensions enabled.

This project uses an experimental version of traceur-compiler.  There are two changes required to enable annotations support in other projects:

Modify your package.json and the following dependency <code>"traceur": "tpodom/traceur-compiler#annotations-0.0.1"</code>

```javascript
"devDependencies": {
  "karma": "~0.10",
  "karma-traceur-preprocessor": "~0.1",
  "traceur": "tpodom/traceur-compiler#annotations-0.0.1"
}
```

Modify your karma.conf.js and add  <code>annotations: true</code> to the traceurPreprocessor options.

```javascript
traceurPreprocessor: {
  options: {
    sourceMap: true,
    types: true,
    annotations: true
  }
}
````

To run:

```bash
npm install
karma start
```
