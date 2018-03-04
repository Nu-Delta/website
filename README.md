# Nu Delta Website

In order to get the app running, first run `npm install`. After all the dependencies have been downloaded, run `npm start`. **NOTE:** Any changes that are made to this repository are immediately viewable on the [ND Webiste](https://nudelta.mit.edu), so be sure to test locally by running `npm start` and navigating to `localhost:3000` to check that the changes you made are what you want to see.

## Adding a new class page
First, you'll want to take a look at the [.htaccess](./.htaccess) file. You'll see a number of lines that begin with `Redirect /brothers/2017`. This will allow users to access a new class page (so like nudelta.mit.edu/brothers/2017). You can just add a new line with a similar format to create a page for a new class.

Next, you'll want to create a `[classyear].json` file under `data/brothers/`. You can take a look at any of the other JSON files (like [2017.json](./data/brothers/2017.json)) for a good template to follow. The topmost keys should be the first and last name of the brother you'd like to add (or whatever they want to be shown as their name on the page if they go by a nickname). For each brother, you'll need the following keys:
* `"info"`: An array of objects all with two properties, `"infoName"` and `"info"`. This is all for the information that will go down on that specific brother's page, such as their pledge number, hometown, etc. So, if you wanted to a brother's page to only show their pledge number and hometown, you'd create an array like `[ {"infoName": "Pledge Number", "info": "8"}, {"infoName": "Hometown", "info" : "Los Angeles, CA"}]` as the value for that brother's `"info"` property.
* `familyTree`: A magic number corresponding to the appropriate family tree. I don't think we've ever documented this, but you can look at the JSON file for any class year and see what family tree a brother belongs to by looking for the family tree for their big. For example in [2017.json](./data/brothers/2017.json), Carlos's big is Calvin, his little is Fabrice, and they all have `3` as their family tree value. This is one place that we're looking to actively improve/document better.

* `jumboSrc` and `iconSrc`: The locations of the pictures that you'd like to display for each brother. `jumboSrc` corresponds to the big picture on the brother's page, while `iconSrc` corresponds to the picture displayed in the bubble bar at the bottom. You'll want to get the images as close to the square as possible for the dimension (equal width and height) because the jumbo pic is forced to 300x300px, which might distort some pictures with weird dimensions. You can usually just go to your favorite photo editing program (I used MS Paint) and crop the image accordingly. **IMPORTANT** The filenames for these are **case-sensitive** including the extension, so be sure to use the filename *exactly* as it appears in the repo.

## Family Trees
To add a brother to a family tree, you'll have to edit `views/brothers/partials/familyTrees/familyTree#.ejs` where `#` is should be replaced by whatever family tree you determined the brother is in. I believe this is still set up as a bunch of nested lists where nesting corresponds to being part of that family line (so you'll see in [familyTree3.ejs](./views/brothers/partials/familyTrees/familyTree3.ejs) that Carlos is nested under Calvin, Fabrice is nested under Carlos, Paul is nested under Fabrice, and Brent is nested under Paul).

## Brother profile pictures
The convention we had was to have a folder for each class under `images/brothers/classyear`, and then a folder for each brother which holds each of their pictures. For example, for the 2017s there is a folder in [images/brothers/2017/](./images/brothers/2017) for each brother that holds their 2 pictures. You don't have to have a folder for each brother if you don't want to and could just keep all the photos under something like `images/brothers/2021/` so long as you make the `jumboSrc` and `iconSrc` values in the `2021.json` (or other year file) point to the right places in the directory.

You'll want to go to [views/brothers/partials/brothersHeader.ejs](./views/brothers/partials/brotherHeader.ejs) and add a new link for the new class. You can either comment out or remove the line directly linking to the graduated class, which will remove that year's link from the header bar in the brothers page, but so long as you don't delete the JSON file and pictures the `/brothers/2017` page should still work.

## Message from the President
To update the information for the president, you'll need to update [views/homepage/partials/homefeed.ejs](./views/homepage/partials/homefeed.ejs). There you'll need to change the url for the president's picture and the president's name (should be under `<table id="wordPresTable">`). You can also change the quote from the president that appears in this file.
