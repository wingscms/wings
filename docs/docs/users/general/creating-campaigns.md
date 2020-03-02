---
id: creating-campaigns
title: Creating and managing campaigns
---

## About campaigns
Campaigns is where Wings really shines: they allow you to to create meaningful and effective ways that allow users to contribute to your cause by attending events, signing a petition or making a donation. A quick overview:

- **Signups** are simple forms that let people 'sign up', for example to receive newsletter updates.
- **Events** are geared towards getting people to visit an event. 
- **Petitions** are aimed towards letting people sign a policy proposal, letter of support or some other kind of petition. 
- **Fundraisers** will allow users to make a donation.

## Campaigns on the frontend
Campaigns can be shown on the frontend in two ways:

1. Every campaign gets its own 'slug'; most Wings web applications will make each campaign publicly accessible at this slug on the frontend, inside its respective campaign directory. For example, a petition with the slug `my-petition` will typically be found at `mywebsite.com/petitions/my-petition`. Events, signups and fundraisers will be found in `/events/`, `/signups/` and `/fundraisers/`, respectively.
2. You can also place campaign on a regular content page or article page, by using a [campaign card](publish#campaign) 

![A demo petition at [demo.wings.dev/petitions/demo-petition](https://demo.wings.dev/petitions/demo-petition)](https://screens.wings.dev/CleanShot-2020-02-23-at-21.44.08-1582490660.png)

## The Campaigns Overview 
1. Click 'Campaigns' in the Wings admin Main Menu to visit the Campaigns Overview page. 
2. On the Campaigns Overview page, you will find a list of saved campaigns; you may click a campaign's title to visit its edit page.
3. Choose 'new' to create a new campaign page (a Signup, Petition, Event or Fundraiser).

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.08.27-1582492151.png)


## Creating a campaign
Campaigns have quite a few options, but only a few are required to get started. Let's start with :

1. A title
2. An image (even that is optional)
3. An introduction
4. A couple of paragraphs of text

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.16.56-1582492658.png)

### Adding custom fields

On the 'Fields' tab, you will be able to add additional fields to the ones that are present by default (which are first & last name and email address).

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.23.40-1582493038.png)


## Signatures / Attendees / Donations
On the 'Signatures' or 'Attendees' or 'Donations' tab, you may see a list of confirmed petition signers, event attendees or fundraiser donations, and/or a 'Download' button which prompts the download of a generated .CSV file.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1100.jpeg)

## Settings
On the Settings tab, you can configure additional stuff. 

### Legal
On the Legal tab, you can set the paths or urls for the links to the pages where a user can find the terms & conditions, as well as the privacy policy:

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.36.37-1582493819.png)

### Connecting Mailchimp
Here, you can configure an optional connection with a Mailchimp List. It requires that you add a Mailchimp Api Key on the general settings page. If you provide a valid API key, you will find a list of Mailchimp lists. Upon selecting a Mailchimp list, you will be able to map campaign fields to Mailchimp list fields. 

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.34.05-1582493731.png) 

### Using Mailchimp Groups
If you setup [Mailchimp Groups](https://mailchimp.com/help/getting-started-with-groups/), these Groups will show up on this configuration page. For example, you could use a group called 'activity' with the values 'Signed petition' and 'Donated' These group values show up here, allowing you to configure Wings to add new subscribers to the group 'Signed petition' after they signed the petition:

![](https://screens.wings.dev/Screen-Recording-2020-02-23-22-42-24-1582494155.gif)


### Petition Options
Petition campaigns have a couple of special options:

1. By default, petitions display a counter that shows the number of people who have signed. You can hide this counter by ticking this box.
2. You can offset the displayed number of people who have signed by any number. 

![](https://screens.wings.dev/CleanShot-2020-02-23-at-22.37.37-1582493891.png)

## Event settings
Events have a couple of additional settings, pertaining to the event date and the location details which are displayed on the frontend as well.



