Cherry Tomato
-------------

This is a basic [Meteor](https://www.meteor.com/) app that we use in our
[Meteor workshop](http://www.okgrow.com/meteor/learn/).

It's a teaching version of [Tomato](http://tomato.okgrow.com/), a team-oriented
[Pomorodo](http://en.wikipedia.org/wiki/Pomodoro_Technique) app built with
Meteor.

It will have more public commits as the workshop progresses.

Warning: we revise the history regularly so if `git pull` tells you that it's
not a fast-forward you might need to reset to the current version like  this:

```
git fetch origin master
git reset --hard FETCH_HEAD
git clean -df
```

##### Testing

This project uses tests written in [Jasmine](http://jasmine.github.io/2.0/introduction.html)
using the [Jasmine extension](https://github.com/Sanjo/meteor-jasmine)
for the [Velocity testing framework](https://github.com/meteor-velocity/velocity)

Run meteor with the following tags to get full debug information in the server console:

`DEBUG=1 JASMINE_DEBUG=1 VELOCITY_DEBUG=1 VELOCITY_DEBUG_MIRROR=1 meteor`

To remove Velocity entirely:

1. `meteor remove velocity:html-reporter sanjo:jasmine`
2. `rm -rf tests`
