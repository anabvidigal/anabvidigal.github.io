---
layout: post
title: How to publish a simple GitHub Pages with a Jekyll template
---

Since deciding on becoming a developer professionally and migrating from a design career to programming, I remembered that [learning in public](https://www.swyx.io/learn-in-public) could be a good ally to document my discoveries and struggles along the way.

I thought that setting up a blog within GitHub pages could be a nice way to refresh my Git and GitHub skills, so I did some research and made my first attempts. By the way, I found this [cheatsheet](https://education.github.com/git-cheat-sheet-education.pdf) from GitHub that helped me remember the main commands.

This task turned out to be more difficult than I imagined, the tutorials I found worked on video, but I couldn’t figure out how to make my site go live. So, I want to share how I figured out the implementation that worked for me and could perhaps help you as well. 

## Preparing the environment
The basic setup for this includes installing Ruby and Jekyll via terminal:

## Choosing a template
There are many Jekyll themes available, the one I’m going with is Poole.

## Forking a template
First, we’re going to fork the template to our GitHub. I’m forking all branches.

Next, we need to change that forked repository to our github.io personal name. This will be your username.github.io.

### Cloning into our machine
Go ahead and copy the URL to your repository with the template. Now, on the terminal, navigate to the folder where you want to have your project, and run
`git clone yourURL`

Once that’s done, cd to your directory and ls, the files should be there.

### Editing the template
With your code editor of choice, find your project folder and start by editing the _config.yml file. Here, it’s important to change the url to your own github.io domain. Go ahead and edit your personal info as well.

Once that’s done, go to your terminal and run
`git add .`
to stage all your changes, and 
`git commit -m “Commit description”`
to commit your changes.

Now, we need to run
`bundle install`

Here, I ran into an error, telling me that my Ruby version was incompatible. This was solved by running

`bundle update`

Then, I followed the Poole instructions to install the Jekyll gem and related dependencies

`gem install jekyll jekyll-gist jekyll-sitemap jekyll-seo-tag`

Now, run it again
`bundle install`

And the terminal said the bundle was installed successfully.
Now, we have our image.

## Running Jekyll local server
To run this on a local server, do the following command on the terminal

`bundle exec jekyll serve`

Once the server is running, copy the server address from the terminal and open it on your browser. If successful, the website shows up with the edited information.

If you edit changes on your code with the server running, just update the page and your changes will appear live.

Once you’re done editing, stop the server following the terminal instructions (on my Mac, this was done with control+c). Commit and push all your changes.

## Deployment
Go to your repository Settings > Pages > Build and deployment
There, you need to change source to GitHub Actions. Next, on Jekyll, click Configure.
This is the step that slowed down my process, because I was unsure of how it would work. I just went ahead, clicked Start commit, and did it through a branch and then merged it, but I’m pretty sure you can commit directly to main.

Now, go to Settings > Pages, again, and you should see the card saying your site is live.

