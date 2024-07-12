## How to setup Tailwind CSS

Step 0: Only for vs code, Run the following:
```
 npm init -y

```
Step 1: Run the following commands

```

npm install -D tailwindcss
npx tailwindcss init

```
Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"]

```
Step 3: Create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
step 4: Include the src/output.css file to your html
Step 5: Run the following command:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

```
Step 6: 
Add ```
"build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch" 
```
this command to package.json file under script

Step 7: Run the command,

```
npm run build

```