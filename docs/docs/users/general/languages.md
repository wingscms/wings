---
title: Languages
---

You can set a primary language here, as well as other languages you would like to use.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.44.29-2x-1604137489.png)

## Project-wide translations for strings
There are quite a few copy strings set by default, such ass "... has been donated to this fundraiser" on fundraiser pages. However, you can configure your own default project-wide copy strings, and even override these if you want to use specific copy for individual campaigns. 

Go to Languages -> Translations to create a 'translation' for a language:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.58.32-2x-1604138327.png)

Then, go to the Translations settings of your App, and select the Translation you just created:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.59.26-2x-1604138403.png)

## Copy overrides for specific campaigns
Visit the 'Copy' tab for a campaign to override the default strings.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-11.01.13-2x-1604138508.png)


## How to use multiple languages

If you want to use multiple languages, first add them on this settings page. 

Do you want to publish the secondary (or tertiary) language pages separate from the primary language pages? In that case, just publish them and link to them separately from other pages or link to them in the main menu. **Note**: pages in other languages than the one set as the primary language, get the language code added as a url parameter. For example, the article you see below, will get the path `/articles/demo-article?lang=nl`.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.43.42-1582476248.png)  

Do you want to publish the same page in multiple languages? Then, simply publish the same page/article/campaign in a different language, but **use the same slug as the one published in the primary language** In the example above, there is also an English article with the slug `/demo-article`, which you can see at [demo.wings.dev/articles/demo-article](https://demo.wings.dev/articles/demo-article). 

As you might expect, the Dutch version can be found at [demo.wings.dev/articles/articles/demo-article?lang=nl](https://demo.wings.dev/articles/demo-article?lang=nl). 