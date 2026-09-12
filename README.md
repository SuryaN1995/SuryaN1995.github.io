<h1 align="center"> Software Developer Master Portfolio 🔥 </h1> 
<h3 align="center"> A clean, beautiful, responsive, and 100% customizable portfolio <br /> template for Software Developers! </h3>

:star: Star me on GitHub — it helps!

# Sections 📚

✔️ Summary and About me\
✔️ Skills \
✔️ Experience\
✔️ Certifications 🏆\
✔️ Blogs\
✔️ Education\
✔️ Contact me

To view a live example, **[click here](https://suryan1995.github.io/)**

# Run locally 📋

The site is a Create React App project. Use **Node 24** locally so it matches CI. `react-scripts` 3 needs OpenSSL's legacy provider on modern Node; `npm start` and `npm run build` already pass `--openssl-legacy-provider`.

```bash
git clone https://github.com/SuryaN1995/SuryaN1995.github.io.git
cd SuryaN1995.github.io
npm ci
npm start
```

`npm ci` installs from `package-lock.json`. Use `npm install` only when you intend to change dependencies.

The app runs at `http://localhost:3000`. Compiled output goes to `build/` and is gitignored; do not commit it.

# Customize it to make your own portfolio ✏️

In this project, there are basically 4 things that you need to change to customize this to anyone else's portfolio: **package.json**, **Personal Information**, **Github Information** and **Splash Logo**.

### package.json

Open this file, which is in the main cloned directory, choose any "name" and change "homepage " to `https://<your-github-username>.github.io`. Do not forget the `https://`, otherwise fonts will not load.

### Personal Information

You will find `src/portfolio.js` file which contains the complete information about the user. The file looks something like below:

```javascript
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```

You can change the personal information, experience, education, social media, certifications, blog information, contact information etc. in `src/portfolio.js` to directly reflect them in portfolio website.

### How to change the icons on homepage under what i do section?

1. This section pulls data from `skills` in portfolio.js file.
2. Visit this website: https://icon-sets.iconify.design/
3. Search for the skill you are looking to add.
4. Select the icon of your choice.
5. Copy the text beside **Selected Icon** and replace it with `fontAwesomeClassName` of that particular softwareSkill.

#### How to use custom images instead of Iconify Icons?

1. Add a valid image file into the `public/skills` folder
2. Insert the image name into the `imageSrc` attribute of the particular softwareSkill
3. Remove the `fontAwesomeClassName` property or leave it empty because it takes precedence over `imageSrc`
4. Add custom styling to the `img` using the `style` Property

### Github Information

You will find `git_data_fetcher.mjs` file in the main directory of the repository. This file is used to fetch the data (Pull requests, Issues, Organizations, Pinned projects etc.) from your github.

In the project you will see a `env.example` file, create a new file named `.env` and copy contents of `env.example` into it. In that file, you will see the following environment variables

```javascript
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

You can get a github token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). Give all permissions while generating token. Add your github username and the token generated in `GITHUB_USERNAME` and `GITHUB_TOKEN` variables in the .env file.

Now, you need to run following command. (Make sure you executed `npm install` before this)

**Warning:** Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

```node
node git_data_fetcher.mjs
```

This will fetch all the data from your github and it will automatically replace my data with yours.
Whenever you want to update the github related information on the website you need to run this command.

### Splash Logo

Note here that if you click [my portfolio](https://suryan1995.github.io), you can see animating the logo at the beginning. I have designed that logo in [`Figma`](https://www.figma.com/) and then animated it using css.
Therefore, this part of portfolio is not customizable. But don't worry we have a solution to this problem. You have below two alternatives:

- If you want to design your own logo, then you can design it using `Figma` or `Adobe XD` or `Adobe Illustrator` or `Inkscape`. If you want to animate it, you can refer to `./src/components/Loader` directory which contains `js` and `css` files which animates the logo
- If you don't want Splash screen or you don't know how to design logo, then this option is for you

  - You can open `src/portfolio.js` file and at the top of this file you will see `settings` component as below:
    ```javascript
    // Website related settings
    const settings = {
      isSplash: true,
    };
    ```
  - Change `isSplash` from `true` to `false`
  - Now, if you see your website using `npm start`, it will directly open `home` rather than animating logo `splash` screen
  - If you design your logo in future, then edit the files in `./src/components/Loader` and then revert `isSplash` to `true` in `src/portfolio.js`.

## Other

- You need to change the website title and other descriptions in `public/index.html`
- You can define your own favicon in `public/icons` directory. If you don't have a favicon, you can generate favicons from [Favicon Generator](https://www.favicon-generator.org/) and [Favicon IO](https://favicon.io/)
- You can also edit your website preview (known as description image). Run your site locally, take a screenshot and replace with `public/icons/desc.png`. Note that your screenshot should be 1280x640 for better preview.

# Choose Theme 🌈

- You can take a look at `src/theme.js` file where all available themes are mentioned with their respective color codes
- You can define new theme similarly as other themes and you can assign name of that new defined theme to `themesList`
- That's it. You just need to change the theme name and the code will take care of everything else
- Run `npm start` to check if everything is ok.

# Deployment 📦

GitHub Pages serves this site from the **`pages` branch**. Source lives on **`main`**. The compiled `build/` folder is not tracked.

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): it installs with `npm ci`, builds, and publishes `build/` to `pages`. You can also start that workflow from the Actions tab (`workflow_dispatch`).

```bash
git push origin main
```

Watch the **Deploy** workflow. When it is green, the live site is at [suryan1995.github.io](https://suryan1995.github.io/). GitHub Pages in this repo is set to the `pages` branch.

To publish a local build without waiting for CI:

```bash
npm run deploy
```

That still builds first (`predeploy`), then uses `gh-pages` to push `build/` to `pages`. Prefer the GitHub Action for day-to-day deploys so the published site is not whatever happened to be in a working directory.

# Technologies used 🛠️

- [React](https://reactjs.org/)
- [graphql](https://graphql.org/)
- [apollo-boost](https://www.apollographql.com/docs/react/get-started/)
- [baseui](https://github.com/uber/baseweb)
- [react-reveal](https://www.react-reveal.com/)
- [styled-components](https://styled-components.com/)

# References 👏🏻

- Some Design and Implementation Ideas are taken from [Saad Pasta's Portfolio Project](https://github.com/saadpasta/developerFolio).
- The Logo of MasterPortfolio is inspired from [prettier-logo](https://github.com/prettier/prettier-logo) for [prettier](https://github.com/prettier/prettier) designed by @ianstormtaylor.
