# Table of contents

1. [Introduction](#introduction)
2. [Requirements/tools](#requirement)
   1. [Dependencies](#dependencies)
3. [Get this server running on your local machine](#start)
   1. [Signup for a MongoDB Atlas account](#register)
   2. [Create a .env file](#env)
   3. [Making server requests](#server)
4. [Database design approach](#design)
   1. [Constraints and Rules](#rules)
   2. [Embeded Design Approach for Mongo](#embed)

## Intro: The why and what of this project<a name="introduction"></a>

On a grand scale, our ambition was to provide users with a digital platform that enabled them to list apartments, rent apartments, and manage these apartments using a single interface.
The application code that you find here provides a custom API that grants our client side access to a NoSQL document database running on mongoDB Atlas.

The rest of this README is intended to guide you on how you can clone and run this server on your local machine.
A production version is currently hosted on Heroku.

Its important to mention that this is a continuing project, and as such, we are constantly recreating this codebase inorder to consistently serve the needs of our client front. This agile approach was one of the motivations for why we decided to look into document databases.

## Requirements/tools <a name="requirement"></a>

- All you need is a working laptop/desktop with access to the internet.
- A mongoDB Atlas account (follow the steps [here](#register) to get a free account)

### Dependencies for running Dev Server <a name="dependencies"></a>

- Eslint (for code linting.)
- Jest and supertest (for testing)
- cors (for cross resource referencing)
- dotenv (for managing environmental configuration)
- express
- mongoose
- nodemon

## Get this server running on your local machine <a name="start"></a>

#### Running the Development Server

1. clone the repository to your local machine with `git clone (url)`- you can do this from your home directory or ~ cd/home/Desktop
2. Open the cloned folder in your favorite IDE, preferrably VScode - ~ cd/home/Desktop/backend2
3. Run `npm install` to install all of the dependencies as listed under the dependency section above

##### Signup for a MongoDB Atlas account <a name="register"></a>

4. Go to `https://www.mongodb.com/atlas/database`and signup for a free Atlas account- you can signin with your gmail.
5. Select the free option from the 'deploy a cloud database' option window
6. Pick the cloud provider and location closest to your location, and create the cluster.
7. Wait for the cluster to be ready for use. This can takes some minutes.(do not continue before the cluster is ready!!)
8. Create a user credential for your database from the security tab (You would need this to enable the application to talk to your database)
9. Click on the Network Access tab and select `allow access from anywhere`
10. Wait for the database deployment page to complete initialization
11. Click on `Connect`
12. choose connect your application (The view displays the MongoDB URI, which is the address of the database that we will supply to the MongoDB client library in our .env file)
13. copy the MongoDB URI.

##### Create a .env file <a name="env">

14. Back in the root of your cloned project folder, create a `.env` file
15. `MONGODB_URI=mongodb+srv://<name>:<password>@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority PORT=3001`
16. Replace the name and password parameters in the above step with the user credential information you created in step 8 (without the <>)
17. Ensure all your files are saved.
18. From your project directory, Run `npm run dev`to launch the server on your local machine, with connection to the database.

##### Making server requests <a name="server">

19. install the VScode JSON server extension from the extension tab section on VScode
20. Open the request folder in your folder directory and make a POST request to the database to addd listings
21. test the other requests too.
22. If the extension does not work for you, use Postman. make requests to : http://localhost:3001/api/apartments

### Database design approach <a name="design">

We originally started with a relational schema design which can be found here and for which we have also started implementing an SQL based server in a different repository : https://lucid.app/lucidchart/60855a90-2be2-4b88-9a7c-76ed234a2445/edit?invitationId=inv_7edaccb1-4a51-4410-9104-f288bdb7493e&referringApp=slack&page=0_0#
It has been designed with the following constraints and rules in mind.

#### Constraints and Rules: <a name="rules">

- Every user should be able to list and rent multiple apartments. (A one-to-many relationship between users and apartments.)
- One apartment owner can own and list multiple apartments. (A one-to-many relationship exists between an apartment owner and apartments.)
- One apartment can not be listed by multiple owners/users (A one-to-many relationship DOES NOT EXIST between apartments and owners/users)
- A user can be an owner if they list an apartment for rent.
- renting an apartment is done through ORDERs. A user can create many orders for many apartment, but NOT many orders for same apartment (A one-to-many relationship between apartments and orders.)
- An apartment can receive many orders from many users.
  All of the above relationships can be seen in the ERD diagram below, and it is from here that the CRD design for MongoDB was built from.
  ![My Image](images/ERD.png)

#### Embeded Design Approach for Mongo <a name="embed">

For this mongo server, our database is being developed to fit into the embeded design aproach for data storage in mongoDB. This approach is briefly shown in the diagram below. (its still a WIP)
![My Image](images/embeded.png)
