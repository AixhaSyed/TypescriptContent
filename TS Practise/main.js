HTML Questions:
•	What does a doctype do?
It sets the namespace and standard syntax rules for the browser to determine which rendering mode to use.
•	What's the difference between standards mode and quirks mode?
One follows a unified standard set by the W3C, the other relies on how different browsers interpret the markup, which can be unpredictable.
•	What's the difference between HTML and XHTML?
XHTML is HTML expressed in XML, can be "strict" or "transitional". Syntax rules are generally tighter, Doctype is required
•	Are there any problems with serving pages as application/xhtml+xml?
Might cause problems in old browsers (IE?) that interpret the MIME type wrong
•	How do you serve a page with content in multiple languages?
set a Content-Language header and a lang attribute on html element
•	What kind of things must you be wary of when design or developing for multilingual sites?
o	Character Encoding
o	Reading Direction ltr or rtl
o	Different Lengths of Headings / Captions and such
•	What are data- attributes good for?
Storing arbitrary data on HTML elements without affecting the semantics (too much).
•	Consider HTML5 as an open web platform. What are the building blocks of HTML5?
I don't really understand this one. Something like header, main, aside, footer? Or generally block-level and inline elements?
•	Describe the difference between a cookie, sessionStorage and localStorage.
I'm a little unsure here. All are client-side storage techniques. Cookies allow only strings while sS and lS also allow JavaScript data like objects. sessionStorage is only available in the session (duh), so is deleted when the browser closes.
•	Describe the difference between <script>, <script async> and <script defer>.
1: Script blocks rendering, 2: Script runs asnychronously, 3: Script loads after DOM is parsed.
•	Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before</body>? Do you know any exceptions?
Performance reasons. You want the CSS to be available as soon as possible to correctly display the site, and scripts in the head would block rendering while they're being loaded, so you want them to be requested after the rest of the document. One exception would be a feature testing lib like 'Modernizr'.
•	What is progressive rendering?
Don't really know this one. I guess basically it's the idea of rendering chunks of content as soon as they're available, as opposed to waiting until everything's ready.

CSS Questions:
•	What is the difference between classes and ID's in CSS?
IDs must be unique and take higher priority in the cascade. Only Classes should be used for styling.
•	What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
Resetting overwrites the default browser behaviour (and usually sets everything to none or 0 ), while normalizing kind of 'evens it out' across browsers to make sure they all apply the same sensible defaults. I prefer normalizing.
•	Describe Floats and how they work.
Floats take an element out of the regular document flow and move it left or right.
•	Describe z-index and how stacking context is formed.
z-index sets the order of elements along the z-axis (from the screen outward), and defines which elements are displayed on top. Only applies to positioned elements. Context is inherited from the parent, so an element inside a parent with z-index can only be positioned within that context.
•	What are the various clearing techniques and which is appropriate for what context?
That depends. you could use a separate element with a clearfix class, or use pseudo-elements like in the micro-clearfix technique with display:table
•	What are your favourite image replacement techniques and which do you use when?
I try to avoid that alltogether, but if I had to, I'd use something like this to keep the element's content accessible:
text-indent: 100%;
white-space: nowrap;
overflow: hidden;
•	How would you approach fixing browser-specific styling issues?
I'd rather like to rely on feature detection and pin styles on a Modernizr class, i.e. no-rgba or something. Or use conditional comments on the html tag for older IE versions.
•	How do you serve your pages for feature-constrained browsers?
o	What techniques/processes do you use? > Again, I like using feature detection (Modernizr) to leverage a progressive enhancement approach. When in doubt, build everything as if it was still 2005 and then layer new stuff on top.
•	What are the different ways to visually hide content (and make it available only for screen readers)?
position it off the screen, clip and hide it:
clip: rect(1px, 1px, 1px, 1px);
position: absolute !important;
height: 1px;
width: 1px;
overflow: hidden;
•	Have you ever used a grid system, and if so, what do you prefer?


I have tried different systems, like the bootstrap grid, susy, simple grids... I don't like it when the markup gets flooded with boilerplate classes end you end up with elements like <div class="col-sm-12 col-md-6 col-lg-4"> so I prefer an approach where I use SCSS mixins to style them directly.
•	Have you used or implemented media queries or mobile specific layouts/CSS?
Yes, I hardly ever build anything that's not responsive anymore. (And I don't think anyone should)
•	Any familiarity with styling SVG?
Just recently adopted a workflow for SVG Icons from an external spritemap, using <use xlink>, a grunt task called 'svgstore' and the 'svg4everybody' polyfill. Styling SVG in this case comes down to defining icon sizes and using CSS currentColor for the fill.
•	How do you optimize your webpages for print?
Print media queries, pretty much hiding anything but the essential content, disabling background images and other 'ink-intensive' stuff, setting body type color to #000, defining a few basic page-break-after rules, and so on.
•	What are some of the "gotchas" for writing efficient CSS?
o	Normalize
o	Honoring the cascade
o	Avoiding deep nested selectors (max 3 levels)
o	Good Naming conventions (BEM, SMACSS, etc)
•	What are the advantages/disadvantages of using CSS preprocessors?
They're great for a myriad of reasons. One disadvantage might be that if you're not careful / you don't know what you're doing, the CSS can get bloated.
o	Describe what you like and dislike about the CSS preprocessors you have used. > I use Sass with Grunt and I love it. Variables, Mixins, Extends, Auto-Prefixing ... the list of awesome goes on. My favourite feature might be just the fact that I can organize my code in small partials and have a flexible but meaningful file structure.
•	How would you implement a web design comp that uses non-standard fonts?
This is very much open to discussion, Filament group have some excellent pointers on how to do this best. Be aware of FOUT / FOIT but I guess the default approach would be to serve them via font-face and provide sensible fallbacks in a font stack.
•	Explain how a browser determines what elements match a CSS selector.
•	Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
Not going to explain the box model here. Simply put, it's how the browser calculates the dimensions of elements. I usually build sites on border-box. It just makes way more sense to me.
•	What does * { box-sizing: border-box; } do? What are its advantages?
Subtract padding and border values from a defined width rather than add to it. Advantages: it doesn't hurt my brain, and it makes things like percentage-based layouts with fixed paddings a lot easier.
•	List as many values for the display property that you can remember.
o	block
o	inline
o	inline-block
o	none

o	table, table-row, table-cell..
o	list-item
o	flex
•	What's the difference between inline and inline-block?
inline-block generally behaves like a block-level element, but does not force line breaks before or after
•	What's the difference between a relative, fixed, absolute and statically positioned element?
o	static: normal document flow
o	relative: position element in offset to normal document flow
o	absolute: position relative to parent element (or next higher element with positioning)
o	fixed: position relative to browser viewport
•	What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
I use my own pattern library, just a loose collection of SCSS partials. Not a big fan of full-blown frameworks, but I have occasionally used bootstrap.
•	Have you played around with the new CSS Flexbox or Grid specs?
I did try to build some flex layouts, but I can't really say I know much about it.
•	How is responsive design different from adaptive design?
Fully responsive design relies on percentage-based layouts and is completely fluid, in contrast to a few "fixed" layouts triggered at different breakpoints in adaptive design.
•	Have you ever worked with retina graphics? If so, when and what techniques did you use?
I always use SVG if it all possible, I used dpi media query and "@2x" images for a while, but it's a pain.
•	Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?
translate for animations/transitions, or in combination with percentages to position an element relative to its ownsize.
JS Questions:
•	Explain event delegation
an event on a child element also fires on the parent due to bubbling, so it's possible to listen for events on the parent and then check for the original source.
•	Explain how this works in JavaScript
it depends on the context. this is usually the object that contains the function this is in.
•	Explain how prototypal inheritance works
any method that is part of an object, is also available in instances of objects that are based on it.
•	How do you go about testing your JavaScript?
I use JSHint for general Syntax errors, but I dont do TDD with Karma or something like that.
•	What do you think of AMD vs CommonJS?
Maybe I'm a bit behind here, but I never used either.


•	Explain why the following doesn't work as an IIFE: function foo(){ }();.
parser treats this a function declaration, with an unrelated () after. Throws Error
o	What needs to be changed to properly make it an IIFE?
( functionfoo(){ }() );
•	What's the difference between a variable that is: null, undefined or undeclared?
o	null is a value of nothing
o	undefined is a value of a variable that has not (yet) been set, or is not visible in the current scope
o	undeclared I'm not sure about...ğ
•	How would you go about checking for any of these states?
o	x === null
o	typeof x === 'undefined'
o	?
•	How do you organize your code? (module pattern, classical inheritance?)
Usually write it as an object literal with different modules
•	What's the difference between host objects and native objects?
Don't really know. Maybe host objects are anything not pre-baked into JS, like Array, Math etc.?
•	Difference between: function Person(){}, var person = Person(), and var person = new Person()?
o	class declaration
o	return value of function assigned to variable
o	new instance of a class
•	What's the difference between .call and .apply?
I think .call takes multiple individual arguments, .apply only one (array)
•	When would you use document.write()?
Never? or maybe as fallback for a CDN jQuery, to write a local script if CDN is not available.
•	What's the difference between feature detection, feature inference, and using the UA string?
o	Feature Detection runs a series of small tests to determine support,
o	Feature inference (guessing by the name) assumes support because of related supported features
o	the UA string is just plain evil. browser sniffing is not an option in 2015 anymore IMHO
•	Explain AJAX in as much detail as possible.
stands for Asynchronous JavaScript and XML. Enables the j of data asynchronously from the server via the XMLHttpRequest Object in JavaScript. I know this is part of the question but I really don't want to go into detail so I'm just gonna stop. There.
•	Explain how JSONP works (and how it's not really AJAX).
I can't really, sorry
•	Have you ever used JavaScript templating?
o	If so, what libraries have you used? > I experimented with Angular and Meteor
•	Explain "hoisting".

AngularJS has several advantages in web development.
•	AngularJS supports MVS pattern
•	Can do two ways data binding using AngularJS
•	It has per-defined form validations
•	It supports both client server communication
•	It supports animations
9) Explain what Angular JS routes does ?
Angular js routes enable you to create different URLs for different content in your application.  Different URLs for different content enables user to bookmark URLs to specific content.  Each such bookmarkable URL in AngularJS is called a route
A value in Angular JS is a simple object.  It can be a number, string or JavaScript object.  Values are typically used as configuration injected into factories, services or controllers. A value should be belong to an AngularJS module.
Injecting a value into an AngularJS controller function is done by adding a parameter with the same name as the value
10)  Explain what is data binding in AngularJS ?
Automatic synchronization of data between the model and view components is referred as data binding in AngularJS.  There are two ways for data binding
1.	Data mining in classical template systems
2.	Data binding in angular templates
11)  What makes AngularJS better ?
•	Registering Callbacks: There is no need to register callbacks . This makes your code simple and easy to debug.
•	Control HTML DOM programmatically:  All the application that are created using Angular never have to manipulate the DOM although it can be done if it is required
•	Transfer data to and from the UI: AngularJS helps to eliminate almost all of the boiler plate like validating the form, displaying validation errors, returning to an internal model and so on which occurs due to flow of marshalling data
•	No initilization code: With AngularJS you can bootstrap your app easily using services, which auto-injected into your application in Guice like dependency injection style
12)  Explain what is string interpolation in Angular.js ?
In Angular.js the compiler during the compilation process matches text and attributes using interpolate service to see if they contains embedded expressions.  As part of normal digest cycle these expressions are updated and registered as watches
13)  Mention the steps for the compilation process of HTML happens?
Compilation of HTML process occurs in following ways
•	Using the standard browser API, first the HTML is parsed into DOM
•	By using the call to the $compile () method, compilation of the DOM is performed.  The method traverses the DOM and matches the directives.
•	Link the template with scope by calling the linking function returned from the previous step
14)  Explain what is directive and Mention what are the different types of Directive?
During compilation process when specific HTML constructs are encountered a behaviour or function is triggered, this function is referred as directive.  It is executed when the compiler encounters it in the DOM.
Different types of directives are
•	Element directives
•	Attribute directives
•	CSS class directives
•	Comment directives


15)  Explain what is linking function and type of linking function?
Link combines the directives with a scope and produce a live view.  For registering DOM listeners as well as updating the DOM, link function is responsible. After the template is cloned it is executed.
•	Pre-linking function: Pre-linking function is executed before the child elements are linked.  It is not considered as the safe way for DOM transformation.
•	Post linking function: Post linking function is executed after the child elements are linked. It is safe to do DOM transformation by post-linking function
16)  Explain what is injector?
An injector is a service locator.  It is used to retrieve object instances as defined by provider, instantiate types, invoke methods and load modules.  There is a single injector per Angular application, it helps to look up an object instance by its name.
17)  Explain what is the difference between link and compile in Angular.js?
•	Compile function: It is used for template DOM Manipulation and collect all of the directives.
•	Link function: It is used for registering DOM listeners as well as instance DOM manipulation. It is executed once the template has been cloned.
18)  Explain what is factory method in AngularJS?
For creating the directive, factory method is used.  It is invoked only once, when compiler matches the directive for the first time.  By using $injector.invoke the factory method is invoked.
19)  Mention what are the styling form that ngModel adds to CSS classes ?
ngModel adds these CSS classes to allow styling of form as well as control
•	ng- valid
•	ng- invalid
•	ng-pristine
•	ng-dirty
20)  Mention what are the characteristics of “Scope”?
•	To observer model mutations scopes provide APIs ($watch)
•	To propagate any model changes through the system into the view from outside of the Angular realm
•	A scope inherits properties from its parent scope,  while providing access to shared model properties, scopes can be nested to isolate application components
•	Scope provides context against which expressions are evaluated
21)  Explain what is DI (Dependency Injection ) and how an object or function can get a hold of its dependencies ?
DI or Dependency Injection is a software design pattern that deals with how code gets hold of its dependencies.  In order to retrieve elements of the application which is required to be configured when module gets loaded , the operation “config” uses dependency injection.
These are the ways that object uses to hold of its dependencies
•	Typically using the new operator, dependency can be created
•	By referring to a global variable, dependency can be looked up
•	Dependency can be passed into where it is required
23)  Explain the concept of scope hierarchy?  How many scope can an application have?
Each angular application consist of one root scope but may have several child scopes. As child controllers and some directives create new child scopes, application can have multiple scopes. When new scopes are formed or created they are added as a children of their parent scope. Similar to DOM, they also creates a hierarchical structure.
24)  Explain what is the difference between AngularJS and backbone.js?
AngularJS combines the functionalities of most of the 3rd party libraries, it supports individual functionalities required to develop HTML5 Apps.  While Backbone.js do their jobs individually.


What is SOA?
SOA is an architecture for building applications using reusable, interoperable services which have well defined business functionalities and can be orchestrated to achieve a specific functionality by utilizing them together.

SOA principles
SOA principles were first defined by Thomas Erl. These 8 principles are underlying to any good architecture that utilizes SOA design to build their products and services:
	
1.       Standardized service contract: Services adhere to a communications agreement, as defined collectively by one or more service-description documents.
2.       Service loose coupling: Services maintain a relationship that minimizes dependencies and only requires that they maintain an awareness of each other.
3.       Service abstraction: Beyond descriptions in the service contract, services hide logic from the outside world.
4.       Service reusability: Logic is divided into services with the intention of promoting reuse.
5.       Service autonomy: Services have control over the logic they encapsulate.
6.       Service statelessness: Services minimize resource consumption by deferring the management of state information when necessary
7.       Service discoverability: Services are supplemented with communicative meta data by which they can be effectively discovered and interpreted.
8.       Service composability: Services are effective composition participants, regardless of the size and complexity of the composition. 
Ques 1. What is Software Life Cycle?
Ans. Software life cycle comprise the total life of the software developed right from the time of initial development to the time it is scrapped out or terminated. This includes the development phases, revisions and upgrades and if necessary adding it up with another software project as well.
Ques 2. Why is software development life cycle important?
Ans. SDLC serves as a guide to the project and provides a flexible and consistent medium to accommodate changes, and perform the project to meet client’s objectives. SDLC phases define key schedule and delivery points which ensure timely and correct delivery to the client within budget and other constraints and project requirements. SDLC co-operates project control and management activities as they must be introduced within each phase of SDLC. 
Ques 3. What are the different phases in SDLC?
There are 5 phases in Software Development Life Cycle:
1. Requirement & analysis
2. Design
3. Coding
4. Testing
5. Maintenance
Ques 4. What is SDLC model? What are the most well known SDLC models?
An SDLC model defines implementation of an approach to the project. It defines the various processes, and phases that would be carried out throughout the project to produce the desired output. There are a variety of SDLC models that exist catering to different needs and characteristics of a project. Some are of iterative nature (Prototyping), whereas some are sequential (waterfall). Some of the well known SDLC models are:
Waterfall Model
Iterative Model
Spiral Model
V-Model
RAD Model
Agile Model 

What is Aviva?	
One of the biggest insurance companies in the world hailing from UK to India, Europe, China and Canada. 
Reason of working at AVIVA?
Increasing my skills in an established company where I can feel challenged and work on latest technologies.
Why do you want this job?
There are few reasons why I want this job:
1.	It involves technologies that I like to work and what learning experience would it be for me to work in a company which revolutionizes industries.
2.	I have mostly worked in companies which are very susceptible to adopting latest way of web development, I can get a chance to work on that in aviva
What have you learned from mistakes?
I developed the web application of City of Calgary and sent it for testing, but little I know the complicated testing involved to test an app for accessibility. I only did the minimum unintentional accessibility changes. But after those tests I came to know how accessbililty friendly web apps are made.
What challenges are you looking for?
Working on impactful projects and developing UIs of those applications using the technologies I love to work on.
Typical work week?
I start on Monday with a personal ToDo session in which I outline tasks for the whole week and then start with the most prioritized item, work on it and update its status where I have to. 
Strength?
I would say that honesty in work, challenging myself with new roles and new tasks and trying hard to learn new things. Dedication to work.
Weakness?
I would say I use to start focusing on minute details and lose track with the bigger requirements. Like if I am building a form I would start working on how labels will look and how they will shrink on responsive screen. Rather than working on the form first. I am working on this weakness by making bullet points of all tasks and dividing time accordingly.

1.	What are the difference between HTML4 and HTML5 ? 
New tags, new storage mechanisms, new features like WebGL, audio,video, canvas.
2.	What are the new features in HTML5 on which did u work on it ? 
Audio, video, localstorage, WebGL, aside, section etc
3.	What is the difference between simple cookies and new storage mechanism in HTML5 ?
cookies only allow you to store strings. sessionStorage and localStorage allow you to store JavaScript primitives but not Objects or Arrays (it is possible to JSON serialise them to store them using the APIs). Session storage will generally allow you to store any primitives or objects supported by your Server Side language/framework
4.	Need to find out output of a new java script with createElement and binding with HTML listener code ?
addEventListener is used to attach an event to an element. Create element creates a new element on the dom.
Document.createElement(“btn”); document.getElementById().addEventListener(“click”, function (){})
5.	How a private variable implementation with javascript ? 
You can do that by doing varprivateVar in outer function. But it won’t be accessible from outside.
6.	How to create a simple object with javascript?
Var rest = new Object(), rest = {}, or using function Rest(){}
7.	What is closures in javascript ?

an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned
8.	What are the difference between CSS and CSS3 ?
Css3 adds animation, text features, rounded corners, gradients etc
9.	What are the events in javascript ?
1.	 ?
10.	how do you write cross browser css?
11.	what and / and how to use gradients, border, inmages, round borders, shadows in css3?
12.	what are / and how to use transformations and animations in css3?
To create a transition effect, you must specify two things:
the CSS property you want to add an effect to
the duration of the effect

13.	box model in css?

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content
14.	call back function in javascript?
callbacks, which are used heavily for managing asynchronous operations in JavaScript
A Promise is a placeholder object that represents the result of an async operation. This object will hold the information about the status of the async operation and will notify us when the async operation succeeds or fails

15.	live()vs delegate() vs bind()
better to use on method as above are disco.
16.	what differnce between onload() and .ready()?
Onload fires after all the resources are loaded, ready fires when dom structure is loaded
17.	what is json
