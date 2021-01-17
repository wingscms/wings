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

### Domains: pointing a domain to Wings
On the Domains tab, you can configure a custom domain. You have to register and configure a domain name with a domain registrar and point your (sub)domain to Wings.

1. If you only want to use a subdomain of an existing domain for your Wings project - for example: `action.mywebsite.com`, create a CNAME record for your subdomain and point it to `app.wings.dev`. 
2. If you want to use a root domain for your Wings project (for example: `mywingswebsite.com`), you have to create a DNS record for the main domain as well as for the `www` subdomain, so that your website will be accessible *with and without* the `www` part. Before you do this, it is wise – but not strictly necessary – to set the TTL for your domain to a low value, at least 24 hours before you plan change your DNS servers and point your domain to Wings. (This means that DNS servers will check for updated settings for this domain more often – for example, every minute instead of once per day – so that a DNS change will be executed more quickly and easily.) Next, you will have to create two DNS records. 

2A: If your domain registrar supports ALIAS records (for example: DNSimple), do the following:

- create an ALIAS record for yourdomain.com (without www) and point it to `app.wings.dev`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`

2B: If your registrar does not support ALIAS records (if you are unsure, you can safely assume your register does not support it), do the following:

- create an A record for your domain (without www) and point it to `34.76.238.51`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`.


### Domains: configuring your domain in Wings

After you made sure your domain points to Wings, you still have to configure your domain in your Wings project. **Note**: it is best to wait until the DNS changes have propagated, and your domain actually points to Wings. 

Go to Settings -> Apps -> Domains and click 'edit domains':

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.00.12-2x-XL84VSnTuhE9xqUZjTpyYFLRdCcmRaX5U5dRFQ8I1ZBdHaUyMWeDHVmTbcM0eLScdBAU1yAFpb7wAkB4c5B5wv79YjVSxaG6RTTg.png)

Then, you can set your primary domain. If you use a root domain instead of a subdomain, for example `mycoolwingswebsite.com`, you have to choose if the www-version or the non-www-version should be the primary domain. The other one will be redirected to this primary domain, as configured in the next step.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.02.20-2x-BPGwnXBJen2fXdlLTgtFLeet0A55bPYPUpzbCJ57gCPgFZ8pSFEcsULgwHCPLjE45A4iAw5YqUFjbUb1iouy3pSq2I0VryaK84Xf.png)

After clicking 'Next', you can configure the secondary domain. This is optional and probably only necessary if you use a new domain for your website. If you chose the 'www'-version of your domain in the previous step, such as `www.mycoolwingswebsite.com`, you should fill out the non-www-version here – **or vice versa**. 

Make sure to tick the checkbox that says the secondary domain should redirect to the primary domain, and click 'Finish'.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.05.42-2x-H0VRyjrEBBBSekBZNHuRk8EiW6aiKUTIMt3979d2luwUwaAs3rZ1fW4X1632zhEoD1HBOT7QkemsqBp522fF3UXtMZdCTQeRaunE.png)

Then, you can check if the settings are OK, and **don't forget to save**:

![](https://screens.wings.dev/CleanShot-2021-01-17-at-17.06.39-2x-iGO4apZeTh5bzxOfnl4qwIv7hAviHdsKZ3in1WKYZfbMSvFDqWdMSDaETu55gq2fsDoeF9YpyDishXA5voqBS4ixtuDQ3N7exD48.png)

Next up, you can visit your domain in a browser and wait till the Wings website shows up. A couple of notes:

- The new domain will only work if your domain points to Wings and DNS changes have propagated (meaning: servers on the internet will be redirected to the Wings server if they visit your domain name);
- After saving your settings, Wings will automatically set a free Let's Encrypt certificate so all pages will be served over https. This will take a couple of minutes. Just wait a bit and refresh your browser.
- If your domain does not work after an hour or so, it is likely that your domain was not propagated yet and the Let's Encrypt certificate was not installed successfully. Simply visit your Domains settings again and re-enter your custom domain and hit 'save' again. Wings will retry and it should work. 


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

See [/docs/users/general/webhooks](webhooks) for a separate documentation page about Webhooks

## Schemas
Schemas will be typically used by developers.
