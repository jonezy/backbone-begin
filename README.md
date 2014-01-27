# Backbone Begin
*Note*: This project is heavily influenced, and borrows parts from the
backbone boilerplate project.  There are some things I didn't like about
the architecture which wouldn't make sense to ask them to change, so I
started my own.

## Getting started ##

The easiest way to get started is to install Git and clone the
repository:

``` bash
# Using Git, fetch only the latest commits.  You won't  need the full history for your project.
git clone --depth 1 https://github.com:jonezy/backbone-begin

# Move the repository to your own project name.
mv backbone-next my-project

# Remove backbone-next git folders.
cd my-project && rm -rf .git
```

You will need to download and install [Node.js](http://nodejs.org/) if you want
to use the commands in the following sections.

## Updating dependencies ##

Third party packages may update independently from this main repo, so it's a good idea to update after fetching.

``` bash
# Install global dependencies.  Depending on your user account you may need to
# gain elevated privileges using something like `sudo`.
npm install -g grunt-cli bower

# Install NPM dependencies.
npm install

# Install Bower dependencies.
bower install
```

## Build process ##

The build process consists of numerous Grunt plugin tasks that work together
to optimize your application.

``` bash
# To run the build process, run the default Grunt task.
grunt

# Run a build and test the now optimized assets.
grunt default server:release
```
