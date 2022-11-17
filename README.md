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
