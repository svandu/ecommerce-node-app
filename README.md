# Table of content

1. [Day 1](#day-1)
2. [Day 2](#day-2)

## Day 1

- Create a new repository in github.
- Open command line in folder where you want to create project.
- Write command 
```powershell
    npm create vite@latest
```
- Aswering the all the questions:
```powershell
    √ Project name: ... ecommerce-node-app
    √ Select a framework: » React
    √ Select a variant: » JavaScript
```
- Change your directory and install all the packages.
```powershell
    cd ecommerce-node-app
    npm install
```
- Start the server
```powershell
    npm run dev
```
- Remove all the unnecessary files and codes from `index.css`, `App.jsx`, `App.css`
- Remove image from assets `react.svg`

## Day 2 

- Create component for navigation bar 
- Install sass library in the terminal 
```powershell
    npm install sass
```
- Create `index.jsx` and `navbar.scss` in NavigationBar component
- Write code of jsx for navigation bar in `index.jsx` and sass code in `navbar.scss`
- Set the path of NavigationBar component in `App.jsx`
- Create file for svg icon in src --> assets --> `SearchIcon.svg`, `CartIcon.svg`, `UserIcon.svg`
- Install svg into react component
```powershell
    npm i vite-plugin-svgr
```
- Add the plugin inside the `vite.config.js`
```js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import svgr from "vite-plugin-svgr";

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [svgr(), react()],
    })
```
- Import the SVG file in react components
```jsx
    import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
    import { ReactComponent as CartIcon } from "../../assets/CartIcon.svg";
    import { ReactComponent as UserIcon } from "../../assets/UserIcon.svg";
```
- Call the component in the jsx as `<SearchIcon />`, `<CartIcon />`, `<UserICon />`