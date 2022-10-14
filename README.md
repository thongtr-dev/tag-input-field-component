# Tag Input Field React Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is my React learning project to practice React fundamental concepts, which is also inspired by the tag input field in WordPress Gutenberg editor.

## Here are what I've learned:

- Create a React project using [Create React App](https://create-react-app.dev/) with all necessary build tools out of the box.
- The most fundamentail hook in React: [`useState`](https://reactjs.org/docs/hooks-state.html).
- [Lifting state up](https://reactjs.org/docs/lifting-state-up.html).
- Array methods: map, filter and some.
- [Handling click and on-key-down events](https://reactjs.org/docs/handling-events.html).
- [Conditional (ternary) operator](https://reactjs.org/docs/conditional-rendering.html).
- Immutability concept with spread(...) syntax.
- Use [gh-pages](https://github.com/gitname/react-gh-pages) to deploy React App to GitHub Pages for demo.

## Test the component [here](https://thongtr-dev.github.io/tag-input-field-component/).

## Instructions

- Click the Tags button to expand/collapse the tag input field.
- Click the input field, type anything you like, prefer a real tag for a blog post.
- Press Enter to register the tag.
- If you enter the same tag twice, the app will ignore it and the input field will be set back to empty.
- If the input field is in focus and empty and there are tags, press Backspace to delete the most current tag you added.
- You can click the 'X' icon on each tag token to delete it from the tags.
