## Purk-Web

### Getting Started
Clone the repo by running `git clone https://github.com/appelic-purk/purk-web.git`

Ensure that you have installed `Node`. If you don't have it installed, you can download it [here](https://www.npmjs.com/get-npm).

After you have finished cloning the repo, install all of the dependencies `npm install`

Create a `development.env` and `production.env` file in the root directory
  * Inside `production.env` add `PUBLIC_URL="/purk-web"` and leave the `development.env` file empty.

Create a file `Firebase.js` inside `src/` and add the following content. 

```javascript
import * as firebase from "firebase";

let config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
```
Msg Tim for the correct credentials or navigate to Firebase.google.com and add the project settings yourself. *You will need to be added as an editor to the Firebase project* in order to access the console so msg Tim for this as well.

Run `npm start` to run the app in `development`.

### Contributing

1. Making changes is as simple as stage your modified files `git add <filename>`
2. Write a **helpful** commit message. See (here)[https://chris.beams.io/posts/git-commit/] for commit message conventions. `git commit`
3. Before pushing, make sure you're on the right branch. If you're pushing for the first time, `git push --set-upstream origin master`. Afterwards, you can just run `git push` to push to master.
4. For now, we won't be utilizing pull requests. Just push to master as long as you don't have any code-breaking changes.

### Deploying the Site

To deploy the site, make sure you have configured your `development.env` and `production.env` files. If you have configured these files and have ensured that your changes are not app-breaking, run `npm run deploy`

After a few minutes, navigate to `https://appelic-purk.github.io/purk-web/` to see your changes.

### Tools
* Material UI for most UI features