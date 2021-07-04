Museum API :
-------------------------

An API used to serve mini online version of the Louvre it consists of :

	1 - view museum art
	2 - admin panel to delete the art.
	3 - admin panel to show the registered users.
	4 - ability to add,update and delete art
	5-  creation of new users
	6 - middleware authentication and authorization using JWT.
	7 - role based authentication for Users and admins.
	8 - session presistance using js cookies.
	9 - paginated responses.
	10- buttons for navigation between paginated responses.
	
        
	
	
API was built using the following :

	1 - Express, Typescript and Node JS for the backend.
	2 - mongoose for handling database requestes and handling pagination
	3 - mongo DB.
	4 - JWT token for authetcation
	5 - js cookies for data presistance.
	6 - REACT JS for UI implmentation.
	7 - useContext API for global state handling and saving users/admins data.	
	8 - material ui for styling, prestyled elements and modals
	9 - React Routers for handling the different components.
	
	
MVC architecture was used for the whole project and the project consists of the following pathes:
  server
  ------	
		1 - models: stored data types 
      		2- routes: routing the HTTP requests to the suitable controllers.
		3 - controllers : flow control modules which handle the HTTP requests and direct the request 
				  to the correct service
		4 - middleware : handles the authentication of the admin and users 
		5 - services : modules that serves the API functionality eg...create new user, get all art, etc.....
   Frontend
   -------- 	1 - components : contains all the REACT components for the UI
		2 - actions : contains all the request operations and handling HTTP requests between UI and server. 
		
Endpoints implemented :

  public endpoints: 
  -----------------
	1 - POST"/user": create new user with the following parameters :
		{ "email": "example@mail.com",
         	  "password": "1234",
   		  "role":"ADMIN/USER",
     	          "phoneNumber":"00000" }

	2 - POST"/login" : send email and password and get a jwt token used for the rest of any other request to api :
            	{ "email": "example@mail.com",
    	          "password": "1234" }
  private endpoints:
  ------------------
	3 - GET "/users" : this request must contain the JWT header and the role of ADMIN must be given to the requester, this end point gives all the users registerd in the API.
	4 - GET"/art" : this request must contain the JWT header and for USER or ADMIN role it will return all the art with its details for users and admins.
	5 - Post "/art " : this request must contain the JWT header and the role of ADMIN must be given to the requester, tis end points add a new art item in the museum api using the following request:
                 {
  		    "picture": "https://i.imgur.com/2iZ200A.png",  *note* : the images are hosted on imgur so the api takes the picture web address.
     	            "artist":"Ahmed Donin",
  		    "description":"art description"
  		  }
	6 - Update "/art" : this request must contain the JWT header and the role of ADMIN must be given to the requester,used to update any art element use the following request:
                   {
  		    "picture": "https://i.imgur.com/2iZ200A.png",  *note* : the images are hosted on imgur so the api takes the picture web address.
     	            "artist":"Ahmed Donin",
  		    "description":"art description"
  		  }

	7 - DELETE"/art" : this request must contain the JWT header and the role of ADMIN must be given to the requester, used to delete one of art elements the request example : 
                   {
                    "id":mongoDB id
  		  }

Implementation notes :

	1 - images are hosted on imgur and when adding a new picture the picture must be hosted on any image hosting website and the web address is used for the image path.
        2 - to create a new user user postman to send a backend POST/USER and create a new user.
        3 - there is already register admins and guests :
	    ADMIN : email : ahmedessam@admin.com  password:1234
 	    Guest:  email: ahmed@guest.com	  pasword: 01152292569
	4 - JWT duration is 2 hours.
        5 - JWT is saved in the browser cookie to log out either close the browser or clear cookies.
	
 To use the API :

 - the API is hosted on heroku the front is hosted on : http://museum-api-frontend.herokuapp.com/ while the backend is hosted on : https://museum-api-backend.herokuapp.com/

 - to use the API in development mode :

	 1 -  Clone repo from the following link : https://github.com/ahmedessam235/MuseumAPI
	 2 - install mongo from :https://www.mongodb.com/try/download/community
	 3 - install node from : https://nodejs.org/en/download/
	 4 - install npm from : https://www.npmjs.com/get-npm
         5 - inside the clonned repo to run the server inside the folder Backend run the following command : npm install then npm start  and server will run on localhost :5000.
         6 - inside the clonned repo to run the frontend "UI" 	in the path Frontend\museum-app run  npm install then npm start and UI will run on localhost:3000



