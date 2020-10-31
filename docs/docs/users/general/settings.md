---
title: Settings
---

When you click `Settings`, you’ll find the the following settings pages. We will go over them one by one.

![](https://screens.wings.dev/CleanShot-2020-09-07-at-13.34.00-1599478452.png)

## Apps
Most Wings projects have one frontend application – a _website_ – but it is possible to have multiple frontend apps: separate websites that share the same Wings project, or a mobile app or smart speaker application, for example.

### General app settings
On the General page, you can configure these ssettings 

![](https://screens.wings.dev/CleanShot-2020-10-31-at-11.03.41-2x-1604138699.png)

1. **Theme**: you can select the theme for your site. A theme is a collection of style settings, such as colours and fonts; they can be configured at Settings -> Themes.
2. **Main Menu**: select which menu (which can be managed on the Settings -> Menu tab) is to be used as a main navigation menu on your website.
3. **Homepage**: choose which node (page, article or campaign) should serve as the home page of your website. **Note**: the node that is selected here will no longer be found at its usual path & slug.

**Tip**: If you want to experiment with a theme, create a new theme first, then create a new app, and configure the app to use your new theme.

### Translation settings
On the the Translations settings of your App, you can select the Translation you have created (see below at 'Languages')

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.59.26-2x-1604138403.png)

### Domains
On the Domains tab, you can configure a custom domain. You have to register and configure a domain name with a domain registrar and point your (sub)domain to 

If you use only a subdomain for your Wings project, create a CNAME record for your subdomain and point it to `app.wings.dev`. Then, add your custom domain in Wings.


If you use a root domain for your Wings project, you have to create two DNS records. If your domain registrar supports ALIAS records, do the following:

- create an ALIAS record for yourdomain.com (without www) and point it to app.wings.dev. 
- reate a CNAME record for www.yourdomain.com and point it to yourdomain.com. 

If your registrar does not support ALIAS records, do the following:

- create an A record for your domain (without www) and point it to `34.76.238.51`
- create a CNAME record for www.yourdomain.com and point it to yourdomain.com


![](https://screens.wings.dev/CleanShot-2020-10-31-at-11.07.57-2x-1604138897.png)

## Themes
On the Themes page, you can configure your themes. **Note**: when you edit the theme that is currently set to be active on your site, you will immediately change the presentation of your website. 

![](https://screens.wings.dev/CleanShot-2020-09-07-at-13.50.20-1599479432.png)

## Menus
You can configure menus here. Click `Add Menu Item` to add an item and type its title and path. **Note**: you do not need to enter the entire url; you can use relative paths. For example, for a page with the slug '`our-team`', you can enter the path `/our-team` (with a `/` at the start). Remember that articles, signups, fundraisers, events and petitions should be linked with a path that includes their node type. A fundraiser with the slug `save-the-day` has a path called `/fundraisers/save-the-day`. The same goes for `/articles/`, `/petitions/`, `/events/` and `/signups/`, respectively.

![](https://screens.wings.dev/Screen-Recording-2020-02-23-17-36-31-1582475796.gif)

## Languages (and custom copy)
You can set a primary language here, as well as other languages you would like to use.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.44.29-2x-1604137489.png)

### Project-wide translations for strings
There are quite a few copy strings set by default, such ass "... has been donated to this fundraiser" on fundraiser pages. However, you can configure your own default project-wide copy strings, and even override these if you want to use specific copy for individual campaigns. 

Go to Languages -> Translations to create a 'translation' for a language:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.58.32-2x-1604138327.png)

Then, go to the Translations settings of your App, and select the Translation you just created:

![](https://screens.wings.dev/CleanShot-2020-10-31-at-10.59.26-2x-1604138403.png)

### Copy overrides for specific campaigns
Visit the 'Copy' tab for a campaign to override the default strings.

![](https://screens.wings.dev/CleanShot-2020-10-31-at-11.01.13-2x-1604138508.png)


### How to use multiple languages

If you want to use multiple languages, first add them on this settings page. 

Do you want to publish the secondary (or tertiary) language pages separate from the primary language pages? In that case, just publish them and link to them separately from other pages or link to them in the main menu. **Note**: pages in other languages than the one set as the primary language, get the language code added as a url parameter. For example, the article you see below, will get the path `/articles/demo-article?lang=nl`.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.43.42-1582476248.png)  

Do you want to publish the same page in multiple languages? Then, simply publish the same page/article/campaign in a different language, but **use the same slug as the one published in the primary language** In the example above, there is also an English article with the slug `/demo-article`, which you can see at [demo.wings.dev/articles/demo-article](https://demo.wings.dev/articles/demo-article). 

As you might expect, the Dutch version can be found at [demo.wings.dev/articles/articles/demo-article?lang=nl](https://demo.wings.dev/articles/demo-article?lang=nl). 

## Commerce
At the Commerce Settings page, you can set up payment integrations for payment processors Stripe or Mollie. If you use Stripe, you should fill out your Public Key and Secret. In case of Mollie, just fill out your API key. Your Fundraiser campaigns should work automatically. Tip: fill out your test credentials at first so you can test the payment flow without making actual payments, and change these to your live credentials after publishing your website.

Note: you can also set a Currency on a separate tab.

![](https://screens.wings.dev/CleanShot-2020-03-13-at-09.11.43-1584087129.png)

## Integrations
On the Integrations page, you will be able to set up integrations with third party services such as Mailchimp. Create an API key in your Mailchimp account and enter it here

![](https://screens.wings.dev/CleanShot-2020-02-23-at-17.54.20-1582476872.png)

## Emails
At the Emails settings page, you can configure the confirmation/notification emails that will be sent to anyone who submits a campaign form. There are two primary use cases.

### 1. Confirmation emails

You can include a button or text link with a confirmation link. If a user clicks this link, they will be sent to a 'confirmed' campaign page [such as this one](https://demo.wings.dev/petitions/demo-petition/confirmed). Additionally, their submission will be recorded as being 'confirmed'.

![](https://screens.wings.dev/CleanShot-2020-02-23-at-18.04.09-1582477476.png)

This confirmation flow is useful to verify that a user's submission contains a valid email address, and that you have obtained permission to use their personal information. 

Another advantage of this flow is that the 'confirmed' page contains call to action links that let a user share the campaign with their friends.

## Configuring the confirmation emails
All campaigns only record a user's information after they have clicked a confirmation link in the email that is sent by Wings. Note: all campaigns of a certain campaign type get the same email. In other words: petition signers will receive the same petition confirmation email regardless of the petition being signed.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1108.jpeg)

1. Visit Settings -> Emails to configure the emails.
2. Set the 'From' name.
3. Choose which campaign type you want to configure the emails for.
4. Write an email subject line.
5. Here, you can drag content blocks from the right to the left, in order to add them to your email.

### 2. Notification or Thank You emails
Alternatively, you can configure the email as a simple 'thank you' email with perhaps a followup call to action link.

## Schemas
Schemas will be typically used by developers.