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
On the the Translations settings of your App, you can select the Translation you have created (see below at 'Languages')

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.48.21-1606906138.png)

### Domains
On the Domains tab, you can configure a custom domain. You have to register and configure a domain name with a domain registrar and point your (sub)domain to 

If you use only a subdomain for your Wings project, create a CNAME record for your subdomain and point it to `app.wings.dev`. Then, add your custom domain in Wings.


If you use a root domain for your Wings project, you have to create two DNS records. If your domain registrar supports ALIAS records, do the following:

- create an ALIAS record for yourdomain.com (without www) and point it to `app.wings.dev`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`

If your registrar does not support ALIAS records, do the following:

- create an A record for your domain (without www) and point it to `34.76.238.51`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`

![](https://screens.wings.dev/CleanShot-2020-12-02-at-11.51.45-1606906317.png)

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
Webhooks provide a lightweight yet powerful way to send form submissions as well as information about created, updated and deleted nodes (articles, pages and campaigns) to third party services. For an introduction to webhooks, please read [What are webhooks?](https://zapier.com/blog/what-are-webhooks/), an insightful article by Zapier, a service that lets any user automate workflows, including using webhooks. 

To use webhooks, you need to use a service that can receive webhooks. 

### Test webhooks
You can use a service such as [webhook.site](https://webhook.site) to test webhooks. You will be given a webhook url you can copy:

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.08.22-1607083724.png)

The, you can paste this url in the webhooks field in your Wings settings page.
 
![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.09.43-1607083810.png)

If you then submit one of your campaign forms, you will see the submission with all related fields show up on webhook.site.

### Use Zapier to process form submissions

We will use Zapier as an example, and we will show you how to send petition submissions to [The Action Network](https://actionnetwork.org/).

First, go to Zapier.com to create a Zap, with these settings:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.53.25-1606571612.png)

First, we will configure the Zapier **trigger**, the event that sends data to Zapier, so it can do something with it.

Zapier will generate a webhook url you can copy, so you can paste this into your Wings webhooks settings:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.54.07-1606571668.png)

Then, configure a webhook in Wings settings:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.55.24-1606571756.png)

1. Go to 'Webhooks' in settings
2. Choose 'Add Webhook'
3. Give your webhook a name
4. Paste the webhook URL you were given by Zapier
5. choose which event should trigger a webhook. It is recommended to pick "confirmed.signatures" - this will fire the webhook only after a user has clicked the confirmation link in the email Wings sent to them. 
6. You may optionally add additional values here
7. Save the webhook.

Next, it is best to fill out the petition form yourself, because you will need this test data for the next step in Zapier.

If you follow the instructions in Zapier, you can test your trigger. If you have submitted and confirmed a petition form entry, Zapier should receive your information:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.59.58-1606572021.png)

Click 'continue' to setup the Action. In this case, we will first add a filter step by clicking the blue + sign, because we only want to subscribe persons who ticked the box that says they want to subscribe to the newsletter:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.03.33-1606572223.png)

Then, you will be able to configure the last step, by subscribing a person in Action Network. 

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.04.49-1606572306.png)

Of course, you can also choose to connect any of the countless services supported by Zapier. If you use the intermediary filter step, you can create some smart integrations. Here are a few ideas:

- Create a Discord notification for every donation to notify activists that someone donated (be sure to not include identifiable information!)
- Create a Trello to-do card with a due date 2 days in the future and add a colleague as a card member, instructing them to send a personal thank you note to someone who donated more than $ 250
- Use the Gmail integration to send a personalized 'thank you' email to people who signed a petition, or use the intermediary 'Delay' step by Zapier to send a followup email to people who signed your petition 24 hours after they signed

Webhooks are a very powerful tool - experiment away!

### Create a contact form with notifications via Zapier

Using webhooks, it is also possible to turn a signup campaign into a contact form that will send you an email notification.

To do this, create a Zapier zap that uses a webhook as a trigger to send an email:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.25.40-2x-1607171150.png)

Next, copy the webhook url (and click 'Continue'):

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.27.19-2x-1607171262.png)

Then, go to your Wings project App settings and create a webhook:

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.28.59-2x-1607171477.png)

1. Choose 'Add webhook'
2. Give your webhook a name
3. Paste the webhook url Zapier gave you into this field
4. Choose `submission.created` as a trigger. Alternatively, you could choose to only process form submissions after the user has confirmed it by clicking on the confirmation link in the  email Wings will send them.
5. Save the webhook.

Then, create a Signup campaign that you will use as a contact form, and fill out the campaign form as a test.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.33.38-2x-1607171634.png)

Then head back to Zapier and click 'Test trigger':

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.34.14-2x-1607171664.png)

Zapier will show you it has received the form submission. Next, we will set up a filter to **only** process zaps for this particular form – you may have other signup campaigns set up, and we want to create a notification that is only sent out if this contact form is used. We could look at the campaign title 'Contact form' but we could be a little more specific and use its ID, which is unique. You may have other forms set up in your project that you could also name 'Contact form', so this lets us be more precise and use the `submission_projectId` which we will use in a later step.

![](https://screens.wings.dev/CleanShot-2020-12-05-at-13.54.05-2x-1607172900.png) 

Click continue until you can configure the 'outbound email'. Then you will be able to configure the email notification. You can use all the information that Wings 

![](https://screens.wings.dev/CleanShot-2020-12-05-at-14.17.37-2x-1607174267.png)

After configuring the email, you should be able to activate this zap and try it out.

### Use webhooks to process content updates
You can also use webhooks to send updates about the creation, modification and deletion of nodes (pages, articles, and campaigns) to third party services. You can easily find the right event triggers in your webhooks settings.

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.12.36-1607083971.png)

## Schemas
Schemas will be typically used by developers.
