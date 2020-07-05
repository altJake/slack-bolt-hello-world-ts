# Slack Bolt - Hello World, using TypeScript

This repo is used as the source code for the corresponding Glitch project: [https://glitch.com/edit/#!/slack-bolt-hello-world-ts](https://glitch.com/edit/#!/slack-bolt-hello-world-ts).

It is almost a one-to-one translation of the original Glitch project ([https://glitch.com/edit/#!/slack-bolt-hello-world](https://glitch.com/edit/#!/slack-bolt-hello-world)) using TypeScript, and could be used as an alternative to in the rest of this Readme and below tutorial.

Happy remixing: [https://glitch.com/edit/#!/remix/slack-bolt-hello-world-ts](https://glitch.com/edit/#!/remix/slack-bolt-hello-world-ts) 🎛 🎷🎚🎶🎧

## Tutorial

Read the tutorial at:
[https://api.slack.com/tutorials/hello-world-bolt](https://api.slack.com/tutorials/hello-world-bolt)


---

This is a simple example App built with [Slack's Bolt Framework](https://slack.dev/bolt/tutorial/getting-started) for node.js.

Our App shows a welcome message when a user opens the "app home".

### Slack API & features used in the app

* The [`app_home_opened`](https://api.slack.com/events/app_home_opened) event gets triggered when a user opens the bot's "app home" for the first time
* The app uses the Bolt's `say` method to send a welcome message to the user

### Requirements

* A Bot User must be added to your App
* Your App must be subscribed to [Events API](https://api.slack.com/events-api)
* Your app needs to be subscribed to the events mentioned in the *Events* section

### Scopes

* [`chat:write`](https://api.slack.com/scopes/chat:write)

### Events

#### Workspace events
* [`app_home_opened`](https://api.slack.com/events/app_home_opened)
