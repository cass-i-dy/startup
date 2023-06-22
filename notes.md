# Github
## Updating and pulling
* pull is the most necessary command *
'''
git fetch
git status
git pull
'''
## Commiting and pushing
* Commit often and then push when a part of the task is completed. *
'''
git commit - am "description of commit"
git push

## Conflicts
* Conflicts may arise when multiple commits are on the same line of code. Review the GitHub and the development codes and merge what changes you want to keep. *

# Midterm 1 Notes
## HTML
* <div> createds a division element
* <ul> is the HTML tag for an unordered list
* This HTML will create a valid hyperlink <a href='https://c.com'>x</a>
* html	The page container
head	Header information, title	Title of the page, meta	Metadata for the page such as character set or viewport settings, script	JavaScript reference. Either a external reference, or inline, include	External content reference, body	The entire content body of the page, header	Header of the main content, footer	Footer of the main content, nav	Navigational inputs, main	Main content of the page, section	A section of the main content, aside	Aside content from the main content, div	A block division of content, span	An inline span of content h<1-9>	Text heading. From h1, the highest level, down to h9, the lowest level, p	A paragraph of text, b	Bring attention, table	Table, tr	Table row , th	Table header, td	Table data, ol,ul	Ordered or unordered list, li	List item, a	Anchor the text to a hyperlink, img	Graphical image reference, dialog	Interactive component such as a confirmation, form	A collection of user input, input	User input field, audio	Audio content, video	Video content, svg	Scalable vector graphic content, iframe	Inline frame of another HTML page
* the component UTL '/burger' will render D
- 1.  < BrowserRouter> < div className=' app'> < nav> < NavLink to='/'> A < /NavLink> < NavLink to= ' /burger'> C </ NavLink> < /nav>
- 2. < main> < Routes> < Route path= '/' element={< A />}> exact /> < main> < Routes> < Route path= '/burger' element={< B />}> < main> < Routes> < Route path= '*' element={< C />}>
  
## CSS
* You can use @ import url(); to load fonts from Google
* The CSS property padding puts space around the content of selected elements; padding : 1em
* THis CSS will turn only text with ths class blue div.header { color: blue; }
* rulse => (selectior) p { (property) color (declaration) : (value) green;}  
  
## JavaScript
* const f = y => ++ y; "/n" console.log(f(3)) outputs 4
* order of the CSS box model, from outside in is margin, border, padding, content
* let a = ['cow', 'rat', 'fish'}; "/n" leb b = a.filter(v +> v.match(/A|f/i)); "/n" console.log(b); outputs ['rat','fish']
*  let a = ['cow', 'rat', 'fish'}; "/n" leb b = a.reduce((a,v) => [a,v].join(':')); "/n" console.log(b); outputs cow:rat:fish
* let a = [1,2,3]; "/n" let e = a.map(number +> "/n" { return ('a' + number)});"/n" console.log(e); outputs ['a1', 'a2', 'a3']
* document.querySelector('p').addEvenListener('mouseover', console.log); adds a mouseover even listener to a p element
* valid JavaScript funcitons are  const f = (x) => {}, function f(x) {}, const f = function(x {})
* valid ways to include JavaScript in HTML are <script>1+1</script>, <script src='main.js' />, <div onclick='1+1' />
* a valid javaScript object is { n:1 }
* const P = new Promis((resolve, reject) +> { setTimeout(() +> { console.log('taco')' resolve(true);} , 1000); }); console.log('burger'); p .then((result) +> console.log('shake')) .catch((e) => console.log('salad')) .finally(() => console.log('noodles)) console.log('fries'); outputs burger fries taco shake noodles
* const a = async function() { reutrn new Promis((resolve, reject) = { setTimeout(() => {console.log('D'); resolve(true)}, 10000);})} try{console.log('A;); await a(); console.log('B')} cathc(e) { console.log('C')'} outputs A D B
* call the JavaScript runtime's built in function console.log to output the string to the debugger console. 
* Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.  
*  arrow functions inherit the this pointer from the scope of where it is created.
* JSON provides a simple, and yet effective way, to share and store data  
* You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.  
* Any function that returns an object is considered a constructor and can be invoked with the new operator.  
* For the request [GET /fav/george paul george john is logged. 
- 1. app.use(function(req,res,next)) console.log('paul'); next();
- 2. app.put('fav/:person', (req,res,next) => { console.log('ringo'); next()});
- 3. app.get('/fav/:person', (req,res,next) => {console.log(req.params.person; next())});
- 4. app.get('/*', (req,res,next)=> {
    console.log('john'); next();});
- 5. app.use((_req, res) => res.send())
* app.get('/ringo',()=>{}) will match this express middleware 
- const r = await fetch('fav/ringo', {mehtod:'DELETE; });
* { $or: [{name:/J.*/}, {score: {$lt:3}}}
- {name: "Walke",socre:-55 matches this MongoDB query}
* This code will print Client:Server:Hello
- 1. const {WEbSocketServer } = require('ws'); const wss = new WebSocketServer({ port: 9900});
- 2. wss.on('connection', (ws) => {ws.on('message', (data) => {const mesg = String.fromCharCode(...data); ws.send('Server:${msg}'}}))
- 3. const socket = new WebSocket('ws://localhost:9900'); socet.onmessage = (event) => {console.log('Client:${event.data}');}
- 4. socket.send('Hello;)
* Component A will initially display tacofish
- 1. const B = () => < b>burger< /b>; const C = () => < b>fish< /b>; const D = () => < b>taco< /b>;
- 2. const A = () => { const [ v, updateV] = React.useState(false); const [ x,updateX] = REact.useState(B);}
- 3. let o = < C />; if (v) { o = < B />;}
- 4. React.useEffect(()=> update(D), [ v]);
- 5. return ( < p onClick = {() => updateVtrue}>{x}{o}>)< /p>;
  
## Other
* * the DOM textContent propery sets the child text for the an element
* valid JSON is {"x":3}
* The console command to make script executable is chmod +x deploy.sh
* A DNS subdomain is 260.cs.byu.edu
* To point another DNS record use the CNAME DNS record type
* PEM stands for Privacy Enhanced Mail and are a type of Publik Key Infrastructure file used for keys and certificates. Helps for Security
* Domain name([subdomain.]*root(secondary.top)
* ability to route requests is called a gateway, or reverse proxy, and allows you to expose multiple web services (i.e. your project services) as a single external web service (i.e. Caddy).  
* Port 80 is reserved for HTTP
* HTTP status codes in the 300 range are for content redirects or caching
* Which is NOT a standard HTTP header? Language
* Standard HTTP headers are Content-Type, Host, Cookie
* Cookies allow for a server to store data on the client
* Hashing stored passwords is important because it improves security by making the password unreadable
* WEbSocket adds value to HTTP because it removes the need to keep a connection open.
* What is Not a purpose of JSX is to combine CSS, HTML, and JavaScript
* The purpose of JSX is to inject your HTML into your JavaScript, to componentize you HTML, and to allow for composability of your HTML
* The command "NAMP insall ws" will not add template code for websockets to your JavaScript. 
* The command "NPM install ws" will lock the version of the websocket package for your application, add the websocket source code to the node_modules directory, add a dependency to your package.json file
* you can use fetch in front-end and back-end code (true)
* Which of the following is NOT true about Linux daemon? It cannot fork other processes
* Linux daemon can execute independent of a user, start when the computer is rebooted, PM2 is an example of daemon.