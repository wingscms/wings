---
title: Webhooks
---

Webhooks provide a lightweight yet powerful way to send form submissions as well as information about created, updated and deleted nodes (articles, pages and campaigns) to third party services. For an introduction to webhooks, please read [What are webhooks?](https://zapier.com/blog/what-are-webhooks/), an insightful article by Zapier, a service that lets any user automate workflows, including using webhooks. 

To use webhooks, you need to use a service that can receive webhooks, such as Zapier. **Note**: you wil need at least a Zapier Starter plan that costs $ 19,99 / € 16,94 per month. Alternatively, you could use Wings's Mailchimp integration or Wings's CSV downloads option.


## Test webhooks
You can use a service such as [webhook.site](https://webhook.site) to test webhooks. You will be given a webhook url you can copy:

![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.08.22-1607083724.png)

The, you can paste this url in the webhooks field in your Wings settings page.
 
![](https://screens.wings.dev/CleanShot-2020-12-04-at-13.09.43-1607083810.png)

If you then submit one of your campaign forms, you will see the submission with all related fields show up on webhook.site.

## Use Zapier to process form submissions

We will use Zapier as an example, and we will show you how to send petition submissions to [The Action Network](https://actionnetwork.org/).

### 1. Setup a 'catch webhook' trigger in Zapier

First, go to Zapier.com to create a Zap, with these settings:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.53.25-1606571612.png)

First, we will configure the Zapier **trigger**, the event that sends data to Zapier, so it can do something with it.

Zapier will generate a webhook url you can copy, to paste into your Wings webhooks settings:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.54.07-1606571668.png)

### 2. Set up the webhook in Wings

Now that Zapier has provided us with a webhook – the secure URL where it wants to receive form submissions – we have to tell Wings that certain form submissions should be sent to that location. **Note**: you will continue configuring our Zapier 'zap' in just a bit, so it is best to leave your Zapier browser tab open and visit your Wings project in a different tab or window.

So, go to the Settings page in your Wings project and configure a webhook: 

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.55.24-1606571756.png)

1. Go to 'Webhooks' in settings
2. Choose 'Add Webhook'
3. Give your webhook a name
4. Paste the webhook URL you were given by Zapier
5. choose which event should trigger a webhook. It is recommended to pick "confirmed.signatures" - this will fire the webhook only after a user has clicked the confirmation link in the email Wings sent to them. 
6. You may optionally add additional values here
7. Save the webhook.

### 3. Submit a form
Before we continue configuring the webhook setup in Zapier 
Next, we need to fill out a campaign form, to fire off the webhook we just configured, so that Zapier will receive a test submission which is necessary to complete the Zapier configuration.

![](https://screens.wings.dev/CleanShot-2021-01-17-at-21.02.19-2x-ANnYCapD3sFwUd6meXHb1ErRX0ruCpBIkLt15xGRxmv6mu0VcFKk1YIvfltXEiKNsFglFZ6OW2q9gmF03fILKogoOVtU88hcK67R.png)

### 4. Continue configuring your Zap

If you follow the instructions in Zapier, you can test your trigger. If you have submitted and confirmed a petition form entry, Zapier should receive your information:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-14.59.58-1606572021.png)

Click 'continue' to setup the Action. 

### 5. Optional intermediary step: extract custom fields
If you have added custom fields to your Wings campaign and you want to process the user information that was provided by filling out these fields, you need to add an additional step, because all custom fields information is wrapped up in a single object. Think of custom fields as a number of boxes that are first put together in a single big cardboard box that needs to be unpacked first.

To do this, add a 'Formatter' action:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.06.05-2x-4397XCM64WbgogVmD2gJfnk6gWboCLy83RW5hpwr4sPWoHdftGyGa0aZFAFfUylxnHKIavLmXL7CQt17aK70EtPNYmAjiXU1vTEW.png)

Then, pick 'Utilities' (and click 'Continue'):

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.07.19-2x-CHh5hU8RiXqIxIxwLReC2AYpuDUVrEN77cjfAXXO4ne8b48JttdepGCmfhbHEwpblOeBRfHUj79VE3sE7fCtxfdGm0NTMIERwvrc.png)

Then, choose 'Line-item to text':

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.08.35-2x-tou89PqOeFDFKGpzKQcqkGGLdEfptWcuwNRS10twNn8H3LtF9C0kTEi2xvibHl97BVZeW9XB6YUcdRYAFHU3HVqNeK7M4tQiNOMZ.png)

Then, we have to choose the 'Input'. Click on 'Enter text or insert data' to open a drop-down where you will see all elements of the form submission – you may have to click '**show all options**'. 

You will see one element that has **all custom fields labels** (in this case: a 'phone number' field and a checkbox label that asks if the user wants to be added to a WhatsApp Group). In the next element, both values that belong to the corresponding labels are added together (the phone number and the 'answer' to the question. This was a checkbox field, so the value will be either 'true' or 'false'). **Select the element that contains the custom field values**.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.09.40-2x-vdkKHMy5FoIlG5L0azD32dc4Ex8Jzgp8X2lNeU4ecuf8ndj4u4185xFv6Jh4kaPTOGBwDAXjcEb4PVw238CIGG9YHIfZ18o0WR0A.png)

The 'separator' field can be left blank - the default setting works. Then, we can 'Test & Review':

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.16.26-2x-K9IU05sONllLRj6S7N0fgDDFUBD1HmuhDXjUatSfFsPB0t0pfzjH7NAHq9AehI9KSN53t4ZAUhfP3rn5CkvHt44Hh4nmCiVJkSCq.png)

Then, you will see that this step will split up the custom field values into separate values that you can use in subsequent steps.

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.17.24-2x-nJjL6AZ0dMLg6vcx2dqbFDeRZUeF9ZTFFDVL423c3poTSfF7Lc2Ed0ZNH5oJOD8cJ3OjcsgYzoJUCnkS4HbFSg1trYHtmmj8Tjir.png).

### 6. Optional intermediary step: Filter
Often, you may not want to send **all** form submissions to a third party service. For instance, Wings Petition / Event / Donation forms have a tick box that asks users whether they want to stay updated. In this case, you will only want to send those users who opt in to a service like The Action Network or an email marketing service.

So, let's look at how to add a filter step by clicking the blue + sign, because we only want to subscribe persons who ticked the box that says they want to subscribe to the newsletter:

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.03.33-1606572223.png)

Alternatively, you can also filter based on a checkbox that was added as a custom field. In the previous step, we saw that we also had a checkbox that asks the user if they want to be added to a WhatsApp group. If you only want to filter based on whether they ticked that box, you can find this value in the 'Utilities' step we added. See the image:

![](https://screens.wings.dev/CleanShot-2021-01-16-at-14.20.19-2x-2b8lQlopvE5Du92bZxrSsFLzKdp5UyFbm26MmMG7gEKKrXtvcypcypnAdR6ZBuXwuz1jyagBzBGfr5CWIcNAWBDnoLrFgoLq33cE.png)

1. Click 'Only continue if...' to see a dropdown list of steps you can select 
2. Select the the Utilities step where we split up the custom fields
3. Select the correct element that returns 'true' or 'false'.

If you click 'continue', you will be able to configure the last step.

### 7. Send the data to a third party service

The last step of a Zapier sequence is sending the data off to a third party service. In this example, we are sending the user submission to The Action Network. 

![](https://screens.wings.dev/CleanShot-2020-11-28-at-15.04.49-1606572306.png)

Of course, you can also choose to connect any of the countless services supported by Zapier. If you use the intermediary filter step, you can create some smart integrations. Here are a few ideas:

- Create a Discord notification for every donation to notify activists that someone donated (be sure to not include identifiable information!)
- Create a Trello to-do card with a due date 2 days in the future and add a colleague as a card member, instructing them to send a personal thank you note to someone who donated more than $ 250
- Use the Gmail integration to send a personalized 'thank you' email to people who signed a petition, or use the intermediary 'Delay' step by Zapier to send a followup email to people who signed your petition 24 hours after they signed

Webhooks are a very powerful tool - experiment away!

## Create a contact form with notifications via Zapier

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
