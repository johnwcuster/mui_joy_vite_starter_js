<a name="readme-top"></a>
# mui_joy_vite_starter_js
Project boilerplate for MUI's Joy component library for React and their Material Icons library.
- **This repo is not affiliated with MUI, Vite, or Google.** It's just a personal project to reduce the friction from scratchpad to prototype.
- *This repo uses Javascript, not Typescript.*

<!-- ABOUT THE PROJECT -->
## About The Project
The pupose of this project is to speed up initial app setup for project structure, layout, typography and theming, especially hooking up bits and bobs of fiddly time suckers. For example: 
- Configuration, build steps, etc.
- Adding links to fonts & icons
- How and where to structure theming and style customizations
- Getting past a blank sheet of paper with layout

This project is mostly clone of another [material ui example](https://github.com/mui/material-ui/tree/master/examples/material-ui-vite)  repo, which is referenced by MUI in their [getting started templates](https://mui.com/material-ui/getting-started/example-projects/).  Like the reference reop, this project uses [Vite.js](https://github.com/vitejs/vite), as an alterantive to the depreciated `npx create-react-app my-app` still used in tutorials.   

Unlike the reference repo, this project uses a different MUI component library, [Joy UI](https://mui.com/joy-ui/getting-started/), which was in beta at the time this repo was published. The default style engine for Joy UI is [Emotion](https://emotion.sh/docs/introduction), which is the same as MUI's [Material UI](https://mui.com/material-ui/getting-started/) library. 

Additionally, this project scaffolds 2 exmaples of how to get started with icons, a common early-stage hunting and gathering exercise. In addition to importing icons from MUI's [Material Icon Library](https://mui.com/material-ui/material-icons/), this proejct also shows how to use `<svg>` elements with the [createSvgIcon utility](https://mui.com/material-ui/icons/#createsvgicon) in from MUI's Material UI.  An alterantive approach for integrating third party icon libraries is also covered in [MUI's documentation[(https://mui.com/joy-ui/integrations/icon-libraries/#third-party-icons), but not included in this project. Icons for these examples are taken from Google's [Material Symbols and Icons](https://fonts.google.com/icons) library for Google Fonts. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to use

1. Download or clone this repo.
2. Navigate to your local directory
3. Install and run:
```bash
npm install
npm run dev
```
4. Visit MUI's [Joy UI documentation](https://mui.com/joy-ui/getting-started/) for examples and code snippets to customize and extend this boilerplate.


## What's in this starter template?
Examples of: 
1. Layout components, [Grid](https://mui.com/joy-ui/react-grid/) and [Stack](https://mui.com/joy-ui/react-stack/)
2. Containers (or "Surfaces"), [Card]() and [Sheet]()
3. [Typography](https://mui.com/joy-ui/react-typography/) customization using component attributes
4. Working with icons
5. An approach to [theming](https://mui.com/joy-ui/customization/approaches/) utilizization of [CSS Baseline](https://mui.com/joy-ui/react-css-baseline/)

### What components are _not_ included?
1. Inputs (aside from [Buttons](https://mui.com/joy-ui/react-button/))
2. Data display (aside from [Tooltip](https://mui.com/joy-ui/react-tooltip/))
3. Navigation
4. Feedback

These components are well-documented in [MUI's Joy UI documentation](https://mui.com/joy-ui/getting-started/).  In general, aside from wrapping icons buttons in tooltips, this boilerplate does not incorporate interactivity (things like [tabs](https://mui.com/joy-ui/react-tabs/) or [accordions](https://mui.com/joy-ui/react-accordion/) ) or those components that tie more directly into application state management such as form inputs or routing such as navigation.  The folder and file structure is purposefully non-comprehensive.


### Structure
1. `package.json` added dependencies: `@mui/joy`, `@mui/icons-material`. `@mui/material`, `@emotion/react`, `@emotion/styled` and `react-dom` are still included as peer dependencies. .json and may be used for some components. The "Joy" component library is currently in beta at the time this repo was published.
2. Theming is implemented differently.  `main.jsx`` uses `<CssVarsProvider theme={theme}>` instead of `<ThemeProvider theme={theme}>`, which is imported from a separate `theme.js` file. A basic light/dark customization is included, and the theme detects light and dark mode based on the users's system settings.
3. There is a "components" folder already added, with 2 files inside, `Controller.jsx`, which just returns a JSX partial with its children.  This controller is the top level element returned by `App.jsx`.  It's intended as a wrapper to hold shared state. 
4. The second file in the components folder, `IconLibrary.jsx` imports a subset (about 50) of the 2,000 icons in the [MUI Material Icon library](https://mui.com/material-ui/material-icons/), and it supplements it with a couple SVG icons from Google's [Material Symbols and Icons](https://fonts.google.com/icons) library for Google Fonts. 

### Built With
* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [MUI](https://mui.com/)
* [Emotion CSS-in-JS](https://emotion.sh/docs/introduction)
* [Material Symbols](https://fonts.google.com/icons)

<!-- CONTRIBUTING -->
### Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>