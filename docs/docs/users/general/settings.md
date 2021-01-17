---
title: Settings
---

When you click `Settings`, you’ll find the the following settings pages. We will go over them one by one.

![](https://screens.wings.dev/CleanShot-2020-09-07-at-13.34.00-1599478452.png)

## Apps
Most Wings projects have one frontend application – a _website_ – but it is possible to have multiple frontend apps: separate websites that share the same Wings project, or a mobile app or smart speaker application, for example.

### General app settings
On the General page, you can configure these settings: 

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.49.47-1606906227.png)


1. **Theme**: you can select the theme for your site. A theme is a collection of style settings, such as colours and fonts; they can be configured at Settings -> Themes.
2. **Main Menu**: select which menu (which can be managed on the Settings -> Menu tab) is to be used as a main navigation menu on your website.
3. **Homepage**: choose which node (page, article or campaign) should serve as the home page of your website. **Note**: the node that is selected here will no longer be found at its usual path & slug.

**Tip**: If you want to experiment with a theme, create a new theme first, then create a new app, and configure the app to use your new theme.

### Translation settings
On the the Translations settings of your App, you can select the Translation you have created (see the separate [webhooks page](/docs/users/general/webhooks) for more information).

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.48.21-1606906138.png)

### Domains settings
See [here](/docs/users/general/domains) for a separate documentation page about domains.

### Scripts
It is easy to add custom scripts to your application. For example, you could add a Google Tag Manager script.

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.52.51-1606906389.png)

1. Visit the 'Scripts' tab for your app
2. Click 'Edit scripts'.

Then, you can easily add the scripts:

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.54.25-1606906541.png)

1. Give your script a name.
2. Paste the script here. It should start with `<script>` and end with `</script>`.
3. Choose a location.
4. Add additional scripts if you need.
5. Click Finish
6. And save your new settings.

## Themes
On the Themes page, you can configure your themes. **Note**: when you edit the theme that is currently set to be active on your site, you will immediately change the presentation of your website. 

![](https://screens.wings.dev/CleanShot-2020-09-07-at-13.50.20-1599479432.png)

## Menus
You can configure menus here. Click `Add Menu Item` to add an item and type its title and path. **Note**: you do not need to enter the entire url; you can use relative paths. For example, for a page with the slug '`our-team`', you can enter the path `/our-team` (with a `/` at the start). Remember that articles, signups, fundraisers, events and petitions should be linked with a path that includes their node type. A fundraiser with the slug `save-the-day` has a path called `/fundraisers/save-the-day`. The same goes for `/articles/`, `/petitions/`, `/events/` and `/signups/`, respectively.

![](https://screens.wings.dev/Screen-Recording-2020-02-23-17-36-31-1582475796.gif)

## Languages
See the separate [Languages](/docs/users/general/webhooks) page for more information.

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

### Configuring the confirmation emails
All campaigns only record a user's information after they have clicked a confirmation link in the email that is sent by Wings. Note: all campaigns of a certain campaign type get the same email. In other words: petition signers will receive the same petition confirmation email regardless of the petition being signed.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1108.jpeg)

1. Visit Settings -> Emails to configure the emails.
2. Set the 'From' name.
3. Choose which campaign type you want to configure the emails for.
4. Write an email subject line.
5. Here, you can drag content blocks from the right to the left, in order to add them to your email.

### 2. Notification or Thank You emails
Alternatively, you can configure the email as a simple 'thank you' email with perhaps a followup call to action link.

## Webhooks

See [here](/docs/users/general/webhooks) for a separate documentation page about Webhooks

## Schemas
Schemas will be typically used by developers.
