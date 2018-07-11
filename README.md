# Brickworks

## By [David Warrington](https://davidwarrington.co.uk)

A highly configurable verbose SASS/CSS grid system. Want a grid system with descriptive class names? Want to generate multiple grid systems with ease? Want to see how many lines of CSS you can print for the fun of it? This is the grid system for you!

## Installation

1. Download the repository.
2. Import `src/main.scss` from this project into your SASS build.
    * If you want to use the default grid system that this project provides (not recommended), then take the CSS from `dist/main.css` and use that in your project.

## Configuration

This project is intended to be highly configurable out of the box.

To start with, take a look at the settings files.

### `00-settings/_grid.scss`

This is the main configuration file.

* `$grids` is a list of grid for this project to generate. By default it generates 1, 2, 3, 4, 5, 6, 8, 10 & 12 column grids. This could easily be more than you need. Or, you could want to generate more. Just change the list as necessary.

* `$grid-gutter` determines the space between each column.

* `$down` & `$up` can be changed if you want to translate `up` and `down` into other languages, for example.

* `$tiny`, `$small`, `$small-up`, etc. are variables used to determine the names for class prefixes, or translate them, similarly to `$down` and `$up`.

* `$container-widths` is a list of breakpoints and sizes to use as the max widths for the container class.

* `$media-width-*` classes are used to determine values to use for media queries.

* `$breakpoints` is a list of breakpoint definitions to be used by media queries.

* `$breakpoint-has-widths` is a list that can be used to quickly enable or disable breakpoints.

### `00-settings/_definitions.scss`

This file just contains a list of numbers in the following format: `9 nine ninth ninths`.

These number definitions are used to generate column names. By default the list contains definitions for numbers 1 through 30.

Each definition must follow the following format:
1. `8` - A number.
2. `eight` - The name of the number.
3. `eighth` - The name of the number when used as a denominator/divisor.
4. `eighths` - The plural of the previous.

If you wish to generate a grid more than 30 columns wide, you must add the definitions yourself.

### `00-settings/_optional.scss`

* `$generate-normalize` - Disable this to stop including Normalize.css. This is recommended if you are not using this grid system as the base of your project.

* `$generate-utilities` - Generates responsive `.show` and `.hide` classes, along with a `.visually-hidden` class.

## Using the Framework

1. 
    To get started using the framework to lay out your web pages, you need to wrap your content inside a `.container`. By default the `.container` class will centre your content along the x-axis and has a max width of `1400px` at large screen sizes.

    If you need a container that spans the full width of the page, use the `.container--flush` class. This doesn't have a max width at any size.

2.
    Each grid needs to be wrapped inside a `.grid` class (often called `.row` in other frameworks). This allows the columns to wrap onto new lines if they exceed the maximum width of the grid.

3.
    Finally, you can start using your responsive classes. To begin with you can start giving your columns classes such as `.three-quarters`, but for responsive control, you can use classes such as `.large--one-half`, `.medium-down--two-thirds` or `.small-up--one-whole`.

* **Note:** If you want to nest grids inside one another, you can do so without using another container class.

## Tools

### Functions

1. `first($list)` - a SASS function that returns the first item in a list.
2. `last($list)` - a SASS function that returns the last item in a list.

### Mixins

1. `media-query($breakpoint)` - can be used with the previously defined breakpoints to create media queries in your own SASS.

## To Do

1. Improve output efficiency, such as grouping/extending of overlapping grid classes.
2. Improve documentation

## Notes

This framework was inspired by both Bootstrap and the Timber framework. I wanted a flexbox based grid system for my own personal projects, but didn't like the bloat that it feels like it comes with, nor the col-breakpoint-num naming convention. The Timber framework on the other hand contained a more verbose class naming system, however isn't/wasn't flexbox based. Brickworks is an attempt to combine and improve these systems.