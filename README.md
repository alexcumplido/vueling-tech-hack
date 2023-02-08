# Vueling Tech Hack | Front End Challenge ⚛

This is a response to the [Nuwe challenge](hhttps://nuwe.io/dev/competitions/vueling-tech-hack/unsplash-viewer-app-frontend) required to participate in the February Vueling Tech Hack 2023. The goal is to build an Unsplash viewer app starting from this [Figma](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW?node-id=4:78) design. Visualize the [deployed project here](https://vueling-tech-hack.vercel.app/).

**Quality test**

[![CodeFactor](https://www.codefactor.io/repository/github/alexcumplido/vueling-tech-hack/badge)](https://www.codefactor.io/repository/github/alexcumplido/vueling-tech-hack)

## Requirements 🎯

1. Integrate the [Unsplash API](https://github.com/unsplash/unsplash-js#unsplash)
2. Create a masonry layout as a gallery
3. Implement a button that fetches new images from the Unsplash API
4. Deploy the project

Extra improvements allowed:

5. Add effects
6. Modify the design system
7. Use [Codefactor](https://www.codefactor.io/) or [Sonarsource](https://www.sonarsource.com/) for a quality test

## Usage 📝

The user can visualize a masonry grid layout and interact with them. If the user clicks the button new images from Unsplash will be fetched and rendered.

The project structure is organized in component folders, each one including .jsx and .css files. The styles folder contains the overall styles.

## Components 🧬

- Loader
- Button
- CardPhoto
- GridSection

The project followed a [Component Driven UI](https://www.componentdriven.org/) development methodology creating components from the bottom up and then combining them into complex ones.

This challenge required to layout of the gallery and the images as a masonry grid. I implemented a CSS native approach to increasing browser-compatibility. This approach is straightforward and easy to implement and maintain compared to other libraries with similar effects.

```css
.gallery {
  columns: 3 350px;
  column-gap: 1em;
}
```

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git@github.com:alexcumplido/vueling-tech-hack.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm run dev
    yarn dev
```

## Stack ⚒️

- HTML5
- CSS3
- JavaScript
- React
- Vite

As a build tool, I used it because of its fast configuration and also because creating a development environment from the ground up is a great opportunity to realize what dependencies and scripts the project will require.

## Visuals 👀

![Demo view](./src/assets/unsplashDemo.gif)

## Roadmap

- Migration from JavaScript to TypeScript

## Contributing 🙌

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and subit a pull request with a description

## Contact 📫

alexcubou@gmail.com

[https://www.linkedin.com/in/alexandrecb/](https://www.linkedin.com/in/alexandrecb/)

## Acknowledgements 🙏

[Josh Comeau custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
