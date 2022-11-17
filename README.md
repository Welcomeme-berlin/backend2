# Table of contents

1. [Introduction](#introduction)
2. [Some paragraph](#paragraph1)
   1. [Sub paragraph](#subparagraph1)
3. [Another paragraph](#paragraph2)

## This is the introduction <a name="introduction"></a>

Some introduction text, formatted in heading 2 style

## Some paragraph <a name="paragraph1"></a>

The first paragraph text

### Sub paragraph <a name="subparagraph1"></a>

This is a sub paragraph, formatted in heading 3 style

## Another paragraph <a name="paragraph2"></a>

The second paragraph text

### Running the Development Server

- clone the repository to your local machine with `git clone (url)``
- Open the cloned folder in your favorite IDE, preferrably VScode.
- From directory where you have cloned the project run `npm install`to download all of the dependencies
- Run `npm run dev`to launch the development server on the designated port 3001 on localhost

### Database design approach

Because we wanted to retain flexibility and scale at the same time, mongodb was our choice database for the following reasons:

- Supports a non-uniform schema design and implementation approach for documents in a collection
- The data in a given document field can be different from those in another document field, even within the same collection
- It supports automatic scaling. Our database can easily change to accommodate the emerging business needs for our client without having prolonged downtimes
- Easy implementation

In our case, we made the decision to store the id's of the apartments created by the user in the user document. Like you would find in the book-author embedded relationship below.

![My Image](images/one.png)

In the above image, books represent our apartments while authors represent our users who create apartment listngs and also rent them. In essence, every apartment must have been added by a user who reserves the right to delete and update the details of such listings.
