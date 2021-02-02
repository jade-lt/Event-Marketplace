# Event-Marketplace

A working full-stack CRUD app for event planning/services/hire businesses, to keep track of inventory and current pricing, along with info on their own suppliers/cost to the business for each product. 

The app includes log in/sign up functionality with encrypted passwords:
![Image of Login page](https://github.com/jade-lt/Event-Marketplace/blob/main/images%20for%20read%20me/login-new.png)

![Image of rego page](https://github.com/jade-lt/Event-Marketplace/blob/main/images%20for%20read%20me/rego%20page.png)

Once logged in the user is taken to the dashboard which shows current listings and a form to either add a new listing or update/delete an existing one:

![Image of dashboard 1](https://github.com/jade-lt/Event-Marketplace/blob/main/images%20for%20read%20me/dashboard-new-0.png)
![Image of dashboard 2](https://github.com/jade-lt/Event-Marketplace/blob/main/images%20for%20read%20me/dashboard-new-2.png)

The remaining issues with the app:

The dashboard shows the full list of items that have been saved to the database - not items saved by that particular user.

When an item has been added, updated or deleted I would like the dashboard to be automatically refreshed, however to see new items or changes, the user needs to refresh the page which takes them back to the login page.

Future plans:

I plan to add the option for each product/service to have a public-facing listing with availability calendars that are bookable in real time by clients, and a messaging platform between businesses and clients.

Install instructions:

Once cloned, start a terminal for both the client and server folders and run the "npm install" command in both to ensure you have the necessary dependencies. Then run the "npm start" command in both to start the servers. Open a browser and enter http://localhost:1234/ and this should open the app to the login page.