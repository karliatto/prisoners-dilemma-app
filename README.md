This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Before committing code

To make sure we all follow the same rules for quotes vs. double quotes, ending semi-colon vs. no ending semi-colon, etc. we use `eslint` and `prettier` to make the code more consistent (e.g. resulting in easier code reviews).

Before committing your code, run

```
npm run lint
```

and if there are still some errors or warnings which have not been automagically fixed, try to understand the issue, or bring it up in the comment of your Pull Request.

You also want to run

```
npm run test
```

to execute the tests and make sure nothing was broken.
