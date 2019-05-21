![freeCodeCamp.org Social Banner](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)
[![Build Status](https://travis-ci.org/freeCodeCamp/news-theme.svg?branch=master)](https://travis-ci.org/freeCodeCamp/news-theme)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)

# news-theme

The [Ghost](http://github.com/tryghost/ghost/) for [freeCodeCamp.org News](https://www.freecodecamp.org/news).

## First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented our default theme pretty heavily so that it should be fairly easy to work out what's going on just by reading the code and the comments. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

## Development

Get Ghost installed locally.

```bash
npm install -g ghost
mkdir ghost-local-site
cd ghost-local-site
```

Currently freeCodeCamp uses Ghost version `2.9.0`

```bash
ghost install <version> local
ghost start
```

Follow additional instructions on [Ghost's official documentation](https://docs.ghost.org) if are not familiar with its interface.

Now you can clone this project in your theme directory:

```bash
cd content/theme/
git clone https://github.com/freeCodeCamp/news-theme.git
```

The theme styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
npm run install
npm run develop
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
npm run zip
```

## PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- Variables - Simple pure CSS variables
- [Color Function](https://github.com/postcss/postcss-color-function)

## SVG Icons

The theme uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

## Copyright & License

Copyright (c) 2019 freeCodeCamp.org - Released under the [MIT license](LICENSE.md).
