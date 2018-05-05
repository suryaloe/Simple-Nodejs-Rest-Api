<h1>Simple RESTful API With Node JS</h1>
<p>Webservices use nodejs and database mysql with environment config</p><br/>

<h2>How to Start</h2>
<ol>
<li>First install NPM & Node</li>
<li>Change to Directory this Apps</li>
<li>Install module with command : <b>npm install</b></li>
<li>Create Database and Import db.sql</li>
<li>Change Configuration Database in .env</li>
<li>Start Service with command : <b>npm start</b></li>
<li>Port Webservice is 3000</li>
</ol>

<h2>Webservices</h2>
<ul>
<li>Get All User <b>http://localhost:3000/users/</b> (Method GET)</li>
<li>Get User By ID <b>http://localhost:3000/users/[id]</b> (Method GET)</li>
<li>Insert User <b>http://localhost:3000/users</b> (Method POST with post data row database, example: name, email, address)</li>
<li>Update User <b>http://localhost:3000/users/[id]</b> (Method PATCH with post data row database, example: name, email, address)</li>
<li>Delete User <b>http://localhost:3000/users/[id]</b> (Method DELETE)</li>
</ul>
