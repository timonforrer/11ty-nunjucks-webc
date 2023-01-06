# 11ty-nunjucks-webc

To use this repo:

1. Run `npm install`
2. Run `npm start`
3. In your browser go to `localhost:8080`

Two pages will be generated when running the server to showcase the issue:
- `/njk/`: Here the component does not render as expected – the passed in data is `undefined`
- `/webc/`: Here the component renders correctly – the passed in data is `{"message": "Hello world!"}`
