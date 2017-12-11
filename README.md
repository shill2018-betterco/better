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

Here is a rough list of features in decreasing order of how important we think they are to implement:

## Critical features

* [ ] Create a single-user timeline of posts that conforms to the Zeplin spec.
* [ ] The timeline must support new posts by the current user.
* [ ] New posts must appear before older posts, except in reply threads.
* [ ] The interface should be responsive; it should scale with the viewport size.
* [ ] Posts should not be empty and should gracefully support overly-long non-wrapping message text.
* [ ] Every post must have the user identifiers: name, real name, photo, and verified status
* [ ] Post metadata (real name, username, timestamp) should not wrap at mobile sizes.
* [ ] Every post must have the text of the post.
* [ ] Every post must have a relative timestamp of the time the post was published.
* [ ] The message entry text box should be visible at all times.
* [ ] New post length must be limited and must not be zero; the character counter must be functional (it must go negative when the character limit is exceeded; check Zeplin spec for more details). Links should count against the character limit.

## Important features

* [ ] The timestamp for each post should be updated in real time.
* [ ] Posts must support the like interaction: this would save the original post in the reposting user's liked posts lists; in this project, it's only used to count.
* [ ] Post interactions should appear via hover on desktop and via tap on mobile; they do not need different hover colors (use the hover color from the spec for all of these).
* [ ] Post interactions should only change their counters once.
* [ ] Posts should revert to their pre-interaction state once an interaction has been completed.
* [ ] Support at least Chrome, Firefox, and Safari.
* [ ] If your approach requires compiling Javascript, a build pipeline should be included.

## Optional features

* [ ] Posts must support the reply interaction: this creates a new post in reply to the original post; replies are visually distinct in the timeline.
* [ ] Posts must support the repost interaction: this reposts the original post once in the reposting user's timeline.
* [ ] Every post should include zero or more photo attachments that are automatically generated if an image link is detected in the post text. Note: there is no need to design any upload or cropping functionality - if an image link exists in text, it should be converted to an attachment and the image should be loaded and "cropped" via CSS as best as possible.
* [ ] Replies should be nested under the posts they are replying to. Chains of replies, i.e. threads, must be logically unlimited (i.e. there can be an unlimited number of replies to replies), but you can add visual limits to nesting if you choose.
* [ ] Keyboard integration: submit current post when the user presses the Enter key (if there's text present).

We obviously prefer it if you implement all the features, but realistically some people have very busy schedules. If your time schedule is limited and you don't have time to implement all features, that's OK. Just make sure to leave a comment so that we know, and feel free to update this checklist and put an X in the checkboxes.

## How to submit your work

* Fork this repo
* Push your changes
* Open a pull request
* Submit a .zip of your project build via the Greenhouse link

Please contact us if you have any questions.
