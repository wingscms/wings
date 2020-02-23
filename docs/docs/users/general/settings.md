---
title: Settings
---

When you click `Settings`, you’ll find the the following settings pages. We will go over them one by one.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.29.48-1582475407.png)

## Apps
Most Wings projects have one frontend application – a _website_ – but it is possible to have multiple frontend apps: separate websites that share the same Wings project, or a mobile app or smart speaker application, for example. Regular users will only use the following settings:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.32.39-1582475603.png)

- **Main Menu**: select which menu (which can be managed on the Settings -> Menu tab) is to be used as a main navigation menu on your website.
- **Homepage**: choose which node (page, article or campaign) should serve as the home page of your website. **Note**: the node that is selected here will no longer be found at its usual path & slug.

## Menus
You can configure menus here. Click `Add Menu Item` to add an item and type its title and path. **Note**: you do not need to enter the entire url; you can use relative paths. For example, for a page with the slug '`our-team`', you can enter the path `/our-team` (with a `/` at the start). Remember that articles, signups, fundraisers, events and petitions should be linked with a path that includes their node type. A fundraiser with the slug `save-the-day` has a path called `/fundraisers/save-the-day`. The same goes for `/articles/`, `/petitions/`, `/events/` and `/signups/`, respectively.

![](https://screens.wings.dev/Screen-Recording-2020-02-23-17-36-31-1582475796.gif)

## Languages
![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.42.29-1582476165.png)

You can set a primary language here, as well as other languages you would like to use.

### How to use multiple languages

If you want to use multiple languages, first add them on this settings page. 

Do you want to publish the secondary (or tertiary) language pages separate from the primary language pages? In that case, just publish them and link to them separately from other pages or link to them in the main menu. **Note**: pages in other languages than the one set as the primary language, get the language code added to their path. For example, the article you see below, will get the path `/nl/articles/demo-article`.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.43.42-1582476248.png)  

Do you want to publish the same page in multiple languages? Then, simply publish the same page/article/campaign in a different language, but **use the same slug as the one published in the primary language** In the example above, there is also an English article with the slug `/demo-article`, which you can see at [demo.wings.dev/articles/demo-article](https://demo.wings.dev/articles/demo-article). As you can see, it displays a language switcher that lets you visit the same page in a different language:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.50.39-1582476652.png)

As you might expect, the Dutch version can be found at [demo.wings.dev/articles/nl/articles/demo-article](https://demo.wings.dev/nl/articles/demo-article). 

## Commerce
At the Commerce Settings page, you can set up payment integrations, starting with Stripe. Enter your Public Key and Secret, and your Fundraiser campaigns should work automatically. Note: you can also set a Currency on a separate tab.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.52.44-1582476775.png)

## Integrations
On the Integrations page, you will be able to set up integrations with third party services such as Mailchimp. Create an API key in your Mailchimp account and enter it here

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.53.57-1582476844.png)

## Emails
At the Emails settings page, you can configure the confirmation/notification emails that will be sent to anyone who submits a campaign form. There are two primary use cases.

### Confirmation emails

You can include a button or text link with a confirmation link. If a user clicks this link, they will be sent to a 'confirmed' campaign page [such as this one](https://demo.wings.dev/petitions/demo-petition/confirmed). Additionally, their submission will be recorded as being 'confirmed'.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-18.04.09-1582477476.png)

This confirmation flow is useful to verify that a user's submission contains a valid email address, and that you have obtained permission to use their personal information. 

Another advantage of this flow is that the 'confirmed' page contains call to action links that let a user share the campaign with their friends.

### Notification or Thank You emails
Alternatively, you can configure the email as a simple 'thank you' email with perhaps a followup call to action link.

## Schemas
Schemas will be typically used by developers.