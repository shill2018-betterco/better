# Microblog

This is an incomplete implementation of a Twitter-like single-user microblog timeline.

Please implement the spec (design and product) using these instructions.

## Resources

* [Zeplin spec](https://zpl.io/Tycej) - use this as the design reference; request an invite first
* [Roboto font](https://fonts.google.com/specimen/Roboto)
* [Material Icons](http://google.github.io/material-design-icons/)
* [Better logo](better-icon.svg)

## Technical requirements

* The stub data (i.e. the posts and users) in `index.html` should not be modified, but can be moved to a separate file. Everything else can be changed as necessary.
* There is no need for persistence (database or otherwise) - feel free to only use the client-side data.
* Feel free to use any libraries/frameworks you like (or no libraries/frameworks at all).
* Please provide pre-built ("dist") artifacts with your pull request - it should be possible for a non-engineer to simply open `index.html` and review your work. You can use a basic HTTP server as a way to serve the project, but it should **not** be required.
* Avoid requiring running a server if possible. It's not necessary to mock out an API.
* Please do not rewrite the Git history - keep the original Git commit and add new commits.
* Browser support can be limited to "evergreen" browsers (Chrome, Firefox, Edge)

## Spec

* Create a single-user timeline of posts.
* The timeline must support new posts by the current user.
* New posts must appear before older posts, except in reply threads.
* Posts should not be empty and should gracefully support overly-long non-wrapping message text.
* Every post must have the following elements:
  * User identifiers: name, real name, photo, and verified status
  * Text of the post
  * A relative timestamp of the time the post was published; this should be updated in real time
  * Zero or more photo attachments that are automatically generated if an image link is detected in the post text
    * There is no need to design any upload or cropping functionality - if an image link exists in text, it should be converted to an attachment and the image should be loaded and "cropped" via CSS as best as possible
* New post length must be limited and must not be zero; the character counter must be functional (it must go negative when the character limit is exceeded; check Zeplin spec for more details). Links should count against the character limit.
* Posts must support the following interactions:
  * Reply: this creates a new post in reply to the original post; replies are visually distinct in the timeline
  * Repost: this reposts the original post once in the reposting user's timeline
  * Like: this would save the original post in the reposting user's liked posts lists; in this project, it's only used to count
  likes
* Post interactions should only change their counters once.
* Post interactions should appear via hover on desktop and via tap on mobile; they do not need different hover colors (use the hover color from the spec for all of these).
* Posts should revert to their pre-interaction state once an interaction has been completed.
* The interface should be responsive; it should scale with the viewport size.
* The message entry text box should be visible at all times.
* Replies should be nested under the posts they are replying to. Chains of replies, i.e. threads, must be logically unlimited (i.e. there can be an unlimited number of replies to replies), but you can add visual limits to nesting if you choose.
* Post metadata (real name, username, timestamp) should not wrap at mobile sizes.

## Checklist

We obviously prefer it if you implement all the features, but realistically some people have very busy schedules. If your time schedule is limited and you don't have time to implement all features, that's OK. Just make sure to leave a comment so that we know. Just to give you an idea of what features we think are most important, here is a rough list of items in decreasing order of priority:

*Critical features*

1. [ ] Basic layout: make the look and feel conform to the Zeplin spec.
1. [ ] Responsiveness: make the layout behave well on mobile.
1. [ ] The input field on the bottom should have a character counter, should be disabled if >140 characters, and should stay at the bottom of the screen at all times.

*Important*

1. [ ] Support for favorites (hover over a post and "star" it)
1. [ ] Build pipeline: needed if you're using a framework such as React/Vue/etc and you need to compile the source code.
1. [ ] Support for "evergreen" browers: Firefox and Safari

*Optional*

1. [ ] Support for retweets and replies
1. [ ] Keyboard integration: submit current post on enter in the input field (if there's text present).


## How to submit your work

* Fork this repo
* Push your changes
* Open a pull request

Please contact us if you have any questions.
