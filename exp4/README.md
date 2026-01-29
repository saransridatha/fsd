# Experiment-4 — State Management

Learning outcomes:

1. Understand local state in React using `useState` and component-level updates.
2. Use React Context API to create a simple global state provider and consumer.
3. Implement a reducer-based global store pattern with `useReducer` and Context.
4. Compare local state, Context API, and reducer-based global state approaches.
5. Wire providers into the app entry point and verify components consume shared state.

Files of interest:

- `src/components/CounterLocalState.jsx`
- `src/components/context/CounterGlobalContextAPI.jsx`
- `src/components/CounterGlobalContextParent.jsx`
- `src/store/CounterReducer.jsx`
- `src/store/Store.jsx`
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
