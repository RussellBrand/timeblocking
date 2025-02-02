Below are the steps to convert your simple HTML example into a Vite-powered application. We'll create a new Vite project, move your inline script into a separate module file, and run the app using Vite’s development server.

---

## 1. Create a New Vite Project

Open your terminal and run the following command to scaffold a new Vite project. In this example, we’ll use the **vanilla JavaScript** template:

```bash
npm create vite@latest my-vite-app -- --template vanilla
```

This command creates a new folder called `my-vite-app` with the basic Vite setup.

> **Note:** If you use Yarn or PNPM, the commands are similar:
>
> **Yarn:**
> ```bash
> yarn create vite my-vite-app --template vanilla
> ```
>
> **PNPM:**
> ```bash
> pnpm create vite my-vite-app -- --template vanilla
> ```

---

## 2. Navigate into Your Project and Install Dependencies

Change into the project directory and install the dependencies:

```bash
cd my-vite-app
npm install
```

---

## 3. Update the Project Files

### **a. Modify `index.html`**

Open the `index.html` file in the root of your project and replace its content with the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Event Order Example</title>
  </head>
  <body>
    <button id="myButton">Click Me</button>
    
    <!-- Import the main JavaScript file as an ES module -->
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

This file includes your button and a module script that will load our JavaScript code from the `src` directory.

---

### **b. Create/Update `src/main.js`**

Create (or update) the `src/main.js` file with the following content:

```js
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function (event) {
  console.log('click fired');
});

myButton.addEventListener('mousedown', function (event) {
  console.log('mousedown fired');
  // Avoid calling event.preventDefault() here if you want the click event to fire.
});
```

This file moves your inline JavaScript code into a dedicated module that Vite can import and hot-reload.

---

## 4. Run the Development Server

Start Vite’s development server by running:

```bash
npm run dev
```

After the server starts, open your browser and navigate to the URL provided in the terminal (typically [http://localhost:5173](http://localhost:5173)). You should see your button, and clicking it (or pressing it with mousedown) will log the corresponding messages in the browser’s console.

---

## 5. Project Structure Overview

After these changes, your project structure should look like this:

```
my-vite-app/
├── index.html
├── package.json
├── vite.config.js        // (if created by the template; can be omitted if not needed)
└── src/
    └── main.js
```

That’s it! You’ve successfully converted your plain HTML example into a Vite application. Happy coding!
