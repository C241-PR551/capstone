# Backend

### Installation

1. Generate credentials json from firestore and named it to "storageKey.json".

2. Put storageKey.json into "/backend".

3. Install Dependencies
```sh
npm ci
```

4. Start the Apllication
```sh
npm start
```


### The service available:

POST
<pre>/register</pre>
<pre>/login</pre>
<pre>/uploadImage</pre>

GET
<pre>/profile</pre>
<pre>/histroy</pre>

PUT
<pre>/updateName</pre>

DEL
<pre>/deleteHistory</pre>

### Authentification
Using bycrpyt to hash the password

