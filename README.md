Potential paint points

- Click event and next page fetch
- Masonry Grid
- Bonus: skeleton

# Jump2Digital 2022 | Frontend ⚛

This is a response to the [Nuwe challenge](https://nuwe.io/dev/challenges/jump2digital2022-frontend) required to participate in the Jump2Digital hackathon 2022 edition. The goal is to build a modular price-card component starting from this [Figma](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW?node-id=4:194) design. Visualize the [deployed project here](https://jump2-digital.vercel.app/).

**Quality test**

[![CodeFactor](https://www.codefactor.io/repository/github/alexcumplido/jump2digital/badge)](https://www.codefactor.io/repository/github/alexcumplido/jump2digital)

## Requirements 🎯

1. Build a modular-card price component
2. Implement a dialog asking for an email
3. View the optimal layout depending on the device
4. Deploy the project

Extra improvements allowed:

5. Implement animations
6. Modify the design system
7. Use [Codefactor](https://www.codefactor.io/) or [Sonarsource](https://www.sonarsource.com/) for a quality test

## Usage 📝

The user can visualize a modular price cards and interact clicking a button that will prompt a modal asking for an email.

Project structure is organized in component folders, each one including .jsx and .css files. The styles folder contains global css like custom variables, a reset stylesheet and utility classes.

Data.js file contains data required to be rendered by the components so hardcoding it is mainly avoided.

## Components 🧬

The project followed a [Component Driven UI](https://www.componentdriven.org/) development methodology creating components from the bottom up and then combining them into complex ones.

The modal component is implemented using [React portals](https://reactjs.org/docs/portals.html). Portals let you render a children into a DOM node outside of the DOM hierarchy from its parent component.

- Button
- Input
- List
- Form
- Modal
- Card
- Cardsection

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/jump2Digital.git
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

As a build tool I used [Vite](https://vitejs.dev/) because of its fast configuration and also because creating a development environment from the ground up is a great oportunity to realize what dependencies and scripts the project will require.

## Visuals 👀

![Demo view](./src/assets/jump2Digital.gif)

## Roadmap

- Migration from JavaScript to TypeScript
- Use Sass for the CSS

## Contributing 🙌

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and subit a pull request with a description

## Contact info 📫

Alexandre Cumplido Bou

[Linkedin](https://www.linkedin.com/in/alexandrecb/)

[Portfolio](https://alexcumplido.github.io/portfolio/)

## Acknowledgements 🙏

[Josh Comeau custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
