---
title: Domains
---

To launch a website, you will want to serve your site on a custom domain.

## About domains
Before you can set up your custom domain in Wings, you have to register and configure a domain name with a domain registrar, and use a DNS management service. In many cases, this is the same service, but it is possible to use different services for A) domain registration and B) managing DNS records. You need to log in to your DNS management point your (sub)domain to Wings.

The `...app.wings.dev` is a temporary url on a `app.wings.dev` subdomain that you can use to preview a public version of your website until it is time to launch your website. This temporary url is set up in such a way that search engines are discouraged to index it (it will not show up in search engines like Google, but we cannot guarantee it). 

More importantly, this temporary domain is chosen randomly and can only be known to the people you choose to share it with. So feel free to share it with partners and coworkers, just stress that this is a temporary preview url, and don't share it publicly.

Note: even after you add a custom domain, this temporary domain will continue to work. This does not affect the performance of your website in any way.

First, decide if you want to use a subdomain of an existing domain ( `action.mywebsite.com`) or use a 'root' or 'apex' domain, **both with and without** `www`.). 


## 1. Using a subdomain
If you only want to use a subdomain of an existing domain for your Wings project - for example: `action.mywebsite.com`, create a CNAME record for your subdomain and point it to `app.wings.dev`. 

**Note**: if you use a subdomain, skip step 2 below and go directly to [the step after that](docs/users/general/domains#configure-your-domain-in-wings).

## 2. Using an apex domain 
If you want to use an apex domain (a 'root' domain without a subdomain or with the `www` subdomain, for example: `mycoolwingswebsite.com` / `www.mycoolwingswebsite.com` ), you have to create a DNS record for the apex domain as well as for the `www` subdomain, so that your website will be accessible *with and without* the `www` part. Follow the steps below to do this.

### 2A) Set the TTL
Before you do this, it is wise – but not strictly necessary – to set the TTL for your domain to a low value, at least 24 hours before you plan change your DNS servers and point your domain to Wings. (This means that DNS servers will check for updated settings for this domain more often – for example, every minute instead of once per day – so that a DNS change will be executed more quickly and easily.) Next, you will have to create two DNS records. 

### 2B) Create the DNS records

If your domain registrar supports ALIAS records (for example: DNSimple), do the following:

- create an ALIAS record for yourdomain.com (without www) and point it to `app.wings.dev`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`

If your registrar does not support ALIAS records (this includes DNSimple and Namecheap; if you are unsure, you can safely assume your register does not support it), do the following:

- create an A record for your domain (without www) and point it to `34.76.238.51`
- create a CNAME record for www.yourdomain.com and point it to `yourdomain.com`.


## Configure your domain in Wings

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

Next up, you can visit your domain in a browser and wait till the Wings website shows up. 

## Some notes on domains

A couple of notes:

- The new domain will only work if your domain points to Wings and DNS changes have propagated (meaning: servers on the internet will be redirected to the Wings server if they visit your domain name);
- After saving your settings, Wings will automatically set a free Let's Encrypt certificate so all pages will be served over https. This will take a couple of minutes. Just wait a bit and refresh your browser.
- If your domain does not work after an hour or so, it is likely that your domain was not propagated yet and the Let's Encrypt certificate was not installed successfully. Simply visit your Domains settings again and re-enter your custom domain and hit 'save' again. Wings will retry and it should work. 
