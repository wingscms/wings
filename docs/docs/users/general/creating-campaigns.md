---
id: creating-campaigns
title: Creating and managing campaigns
---

## About campaigns
Campaigns is where Wings really shines: they allow you to to create meaningful and effective ways that allow users to contribute to your cause by attending events, signing a petition or making a donation. A quick overview:

- Signups are simple forms that let people 'sign up', for example to receive newsletter updates.
- Events are geared towards getting people to visit an event. 
- Petitions are aimed towards letting people sign a policy proposal, letter of support or some other kind of petition.
- Fundraisers will allow users to make a monetary donation.

## Campaigns on the frontend
Campaigns can be shown on the frontend in two ways:

1. Every campaign gets its own 'slug'; most Wings web applications will make each campaign publicly accessible at this slug on the frontend, inside its respective campaign directory. For example, a petition with the slug `my-petition` will typically be found at `mywebsite.com/petitions/my-petition`. Events and fundraisers will be found in `/events/` and `/fundraisers/`, respectively.

![A demo petition at [demo.wings.dev/petitions/demo-petition](https://demo.wings.dev/petitions/demo-petition)](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1087.png)

2. You can also place campaign on a regular content page or article page, by using a 'campaign card'.

## The Campaigns Overview 
1. Click 'Campaigns' in the Wings admin Main Menu to visit the Campaigns Overview page. 
2. On the Campaigns Overview page, you will find a list of saved campaigns (click a campaign's title to visit its edit page) and 3) the option to create a new campaign page. Clicking the 'new' button will prompt you to choose a campaign type (Signup, Petition, Event or Fundraiser).
 
![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1137.jpeg)

## Editing a campaign
When you create a new campaign or edit an existing one, you will find yourself on the campaign edit screen as shown below.

### Main campaign settings

![The editing screen of a petition](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1090.jpeg)

1. **General** is the tab page that is visible by default, and which is shown in the screenshot above. This is where you edit most of the (editorial) content of the campaign.
2. **Platforms** is the tab page where you  edit meta data which allows you to configure how Google and social media platforms index and display your page.
3. **Meta** is a tab page which may be used to configure additional project-specific settings. The web developer responsible for your web project may ask you to use this.
4. **Apps**: In specific use cases, this tab page is where you configure custom settings pertaining to how (a) web application(s) displays the campaign content. 
5. Publish / Save / Delete: this is where you publish a new campaign, save changes or delete one.
6. This is where you add or edit campaign header image.
7. The title of your campaign.
8. The slug of your campaign. Please use online lowercase characters and dashes between words. The slug is the last part of the url of the page where your campaign will be found, although it will by default be placed in a campaign type's directory (`/petitions/`, `/fundraisers/` and `/events/`, respectively). The petition displayed above wil be found at /petitions/demo-petition`.
9. The language set for this campaign.
10. The **info** tab is the tab visible by default. It is where you add an introduction paragraph (14) and the content for your campaign (15).
11. **Fields** is where you add and configure additional fields, such as text, checkbox or dropdown select fields.
12. (Petititons only Signatures is where you will find confirmed signatures, which can also be downloaded as a .csv file.
13. Settings is where you can configure additional settings, including Mailchimp integration.
14. This is the introduction paragraph.
15. This is where you edit the campaign's content.

### Editing a campaign's fields
All campaigns by default show fields for email address and first & last name (fundraiser campaigns have a couple more). However, you can add custom fields to any campaign as well.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1098.jpeg)

1. Click the 'Fields' tab to configure the fields settings.
2. Click 'Add' to add a field.
3. Click this dropdown button to choose the field type. A 'text field' allows users to type custom text; a 'checkbox' lets them check a box, and a 'select field' lets users choose from a dropown list of multipe options that are defined by you, the editor.
4. If you have chosen a 'select field', you can add the options which will be added to the dropdown list by clicking the indented 'add' button.
5. You can move the position of fields upward and downward using these arrows. Additionally, you can remove fields.

## Signatures / Attendees / Donations
On the 'Signatures' or 'Attendees' or 'Donations' tab, you may see a list of confirmed petition signers, event attendees or fundraiser donations, and/or a 'Download' button which prompts the download of a generated .CSV file.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1100.jpeg)

## Settings
At Settings, you can configure an optional connection with a Mailchimp List. It requires that you add a Mailchimp Api Key on the general settings page. If you provide a valid API key, you will find a list of Mailchimp lists. Upon selecting a Mailchimp list, you will be able to map campaign fields to Mailchimp list fields. 

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1141.jpeg)
be the default settings for social media as well; if you want to have Facebook / Twitter / WhatsApp have different values, you can set these as well - but this is optional. 

On the Legal tab, you can set the paths or urls for the links to the pages where a user can find the terms & conditions:

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1142.jpeg)

## Event settings
Events have a couple of additional settings, pertaining to the event date and the location details which are displayed on the frontend as well.

## Configuring the confirmation emails
All campaigns only record a user's information after they have clicked a confirmation link in the email that is sent by Wings. Note: all campaigns of a certain campaign type get the same email. In other words: petition signers will receive the same petition confirmation email regardless of the petition being signed.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1108.jpeg)

1. Visit Settings -> Emails to configure the emails.
2. Set the 'From' name.
3. Choose which campaign type you want to configure the emails for.
4. Write an email subject line.
5. Here, you can drag content blocks from the right to the left, in order to add them to your email.

![](https://bureaubolster.s3-eu-west-1.amazonaws.com/IMG_1110.jpeg)

1. When you click on a content field, you can edit it. 
2. On the right side, you will find various ways to edit the layout and design of your content field.
3. If you click inside a text field, you will find a layout toolbar. The 'Personalize' is important: it lets you add the dynamic placeholders for First Name, Last Name and the confirmation link: `{{firstName}}`, `{{lastName}}` and `{{confirmationLink}}` respectively. These placeholder will be transformed into the signer's first and last name and a unique confirmation link that, when clicked, will take the user to the 'Confirmed' landing page and will make sure their submission is valid. 



