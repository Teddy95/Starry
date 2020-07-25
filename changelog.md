# Changelog

### Version 5.1.0 - 25.07.2020

- You can use the `on` method now to attach callback function to Starry events.

### Version 5.0.0 - 25.07.2020

- `name` and `icons` are no longer required configurations.
- Default value of `multiRating` configuration is now `true`.
- `getCurrentRating()` method now returns `0` instead of `beginWith` value, if there is no user rating yet.

### Version 4.0.1 - 23.07.2020

- Documentation updates

### Version 4.0.0-beta - 22.07.2020

- New options
- New code
- New npm module

### Version 3.1.3 - 22.08.2017

[Starry v3.1.3 Documentation](https://teddy95.github.io/Starry/v3.1.3)

- New default star icons

### Version 3.1.2 - 25.04.2016

- New option `starSize`.

### Version 3.1.1 - 25.04.2016

- fixed issue [#2](https://github.com/Teddy95/Starry/issues/2).

### Version 3.1.0 - 18.04.2016

- Create differently star ratings in each html document.

### Version 3.0.0 - 18.04.2016

- Specify any number of stars greater than 2.
- Use star icons greater or smaller than 32px × 32px.

### Version 2.1.0 - 19.08.2014

- Add function starry.update(settings)
- starry.setRating(rating) function has been modified.
- Star graphic `star_grey.png` has been updated.

### Version 2.0.0 - 12.08.2014

- Fixed tooltip bug
- Add function starry.destroy()
- Add function starry.rebuild(settings)
- Add function starry.getRating()
- Add function starry.setRating(rating)

### Version 1.4.0 - 11.08.2014

- Now you can specify any number of stars. (Old: 3, 5, 6, 8 or 10; New: 1 - n)

### Version 1.3.0 - 10.08.2014

- Include functions: check jQuery and check tipsy
- Now Starry create the tooltips automatically, if you have included tipsy.

### Version 1.2.0 - 05.06.2014

- Delete userId option
- Delete file option
- Add success option
