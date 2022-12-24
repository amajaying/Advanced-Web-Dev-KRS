To start React app:
1. type the following code in terminal and press enter
`npx create-react-app appnamehere`

2. then change the directory to the app-folder 
`cd appnamehere`
3. then 
`npm start`


Now install Tailwind CSS:
`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

now goto tailwind.config.js and inside content put this string:
`"./src/**/*.{js,jsx,ts,tsx}",`


paste:
`@tailwind base;`
`@tailwind components;`
`@tailwind utilities;`

this inside /src/index.css file


in React we use jsx and in jsx class is written as "className"

we can either save the file as `app.jsx` or just change the javacript format to `JavaScript React` in the task bar of VsCode.