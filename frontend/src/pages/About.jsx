import React from 'react';
import '../index.css'

export default function About() {
  return ( <div className=' about-container bg-black'  >


<div className=" about-content  ">
      <div className='about-content '>
      <h1>Introduction</h1>
    <p>This thesis embarks on an in-depth exploration of one of today’s most exciting and dynamic realms in technology: full-stack web development. Our project uniquely combines the flexibility and power of JavaScript with contemporary technologies like React, Node.js, and MongoDB to process live data from the cryptocurrency market. The world of cryptocurrency, known for its rapidly fluctuating values and high volatility, necessitates access to current and accurate data for informed decision-making. The aim of this thesis is to meet this need by fetching cryptocurrency data from specific APIs, storing it in our MongoDB database, and presenting this information to the user through a React-based frontend.</p>
    <p>Our project extends beyond mere data processing and visualization to encompass the application of modern web development practices and tools. The use of Node.js on the backend provides an ideal environment for data processing and API integrations, while the component-based approach of React on the frontend enriches the user experience with an interactive interface. Additionally, for deploying the project in a live environment, we opted for an Ubuntu server hosted on Oracle Cloud. This choice enhances both the performance and accessibility of the project, illustrating how a web application can be deployed and managed in real-world conditions.</p>
    <p>This thesis will focus on the three fundamental components of the full-stack web development process: frontend, backend, and DevOps practices. Each section will include a detailed examination of the relevant technologies and methodologies, offering a comprehensive view of how the project was designed, developed, and deployed. These sections will highlight the complexity and dynamism of modern web development, as well as the significance of these elements in the success of a project.</p>

    <h2>Frontend</h2>
    <h3>1. Detailed Explanation of React</h3>
    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces, primarily maintained by Facebook. It allows developers to create large web applications that can change data, without reloading the page. Key features include:</p>
    <ul>
        <li>JSX: JSX is a syntax extension for JavaScript, recommended by React for describing the UI. It looks like HTML but works inside JavaScript.</li>
        <li>Components: React builds the UI using components. These are encapsulated, reusable pieces of code that manage their own state.</li>
        <li>State & Props: State is a data structure that starts with a default value and may be changed over time. Props (short for properties) are read-only components that must be kept pure.</li>
        <li>Virtual DOM: React creates a virtual DOM. When a component’s state changes, React first changes the object in the virtual DOM. Then, the virtual DOM compares its previous state and updates only the real DOM where changes have occurred.</li>
    </ul>
    

    <h3>2. Detailed Explanation of Vite</h3>
    <p>Vite is a modern, fast front-end build tool that significantly improves the developer experience. It uses Rollup, a module bundler, under the hood but differs in various ways:</p>
    <ul>
        <li>Instant Server Start: Thanks to its use of native ESM, Vite starts the server instantly.</li>
        <li>Hot Module Replacement (HMR): Vite provides out-of-the-box support for lightning-fast Hot Module Replacement.</li>
        <li>Build Optimization: Vite optimizes the build with Rollup, resulting in smaller bundle sizes and faster load times.</li>
    </ul>

    <h3>3. Creating a React Project with Vite</h3>
    <p>To create a React project using Vite:</p>
    <ol>
        <li>Install Vite: Run <code>npm init vite@latest</code>.</li>
        <li>Choose the React template.</li>
        <li>Navigate to the project directory and install dependencies.</li>
        <li>Start the development server with <code>npm run dev</code>.</li>
    </ol>
    <p>This creates a basic React setup with Vite's optimizations.</p>

    <h3>4. Tailwind CSS: Detailed Explanation and Installation</h3>
    <p>Tailwind CSS is a highly customizable, low-level CSS framework that enables developers to style applications quickly:</p>
    <ul>
        <li>Utility-First: Tailwind uses utility classes, meaning you style elements by applying pre-written classes directly in your markup.</li>
        <li>Responsive Design: Tailwind facilitates building responsive designs by providing utility classes for different screen sizes.</li>
        <li>Customization: Tailwind can be customized extensively via its configuration file.</li>
    </ul>
    <p>Installation involves adding Tailwind as a PostCSS plugin and configuring your <code>tailwind.config.js</code> file.</p>

    <h3>5. React Router: Detailed Explanation and Usage</h3>
    <p>React Router enables the implementation of dynamic routing in a web app. This means the navigation between different components is handled without refreshing the page:</p>
    <ul>
        <li>Route Configuration: Define paths and their corresponding components.</li>
        <li>Link Component: Navigate between routes without a page refresh.</li>
        <li>Dynamic Routing: Create routes dynamically based on user interactions or data.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/router1.png" alt="" />
    <img className='h-[100%] w-[40%] p-2' src="src/photos/router2.png" alt="" />

    <h3>6. Logic of React Components</h3>
    <p>React's component logic is about breaking the UI into independent, reusable pieces:</p>
    <ul>
        <li>Functional vs. Class Components: Functional components are simpler and recommended for most cases, while class components offer more features like lifecycle methods.</li>
        <li>Lifecycle Methods: Special methods in class components that run at different stages of a component's life (e.g., mounting, updating, unmounting).</li>
        <li>Stateful vs. Stateless Components: Components managing their own state are stateful, while those relying on props are stateless.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/component.png" alt="component.png" />

    <h3>7. React Custom Hooks: Detailed Explanation and Use</h3>
    <p>Custom hooks in React allow you to extract component logic into reusable functions:</p>
    <ul>
        <li>Creating Custom Hooks: Custom hooks are JavaScript functions that use other hooks.</li>
        <li>Use Cases: They can manage form inputs, handle API calls, etc.</li>
        <li>Sharing Logic: Custom hooks offer a way to share logic between different components without repeating code.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/hook.png" alt="" />

    <h3>8. Axios: Detailed Explanation and Usage with Examples</h3>
    <p>Axios is a Promise-based HTTP client for making requests to APIs:</p>
    <ul>
        <li>Features: It supports the Promise API, intercept request/response, transform request/response data, cancel requests, and automatic transforms for JSON data.</li>
        <li>Usage Examples: Demonstrating GET, POST requests, and handling responses.</li>
    </ul>

    <h3>9. What is an API: Detailed Explanation</h3>
    <p>An API (Application Programming Interface) is a set of definitions and protocols for building and integrating application software. In web development, APIs are typically used to retrieve data from a server or send data to a server:</p>
    <ul>
        <li>REST APIs: Representational State Transfer (REST) is an architectural style that uses HTTP requests to access and use data.</li>
        <li>API Calls: These are requests made to an API to perform an action (GET, POST, PUT, DELETE).</li>
    </ul>

    <h2>Backend</h2>
    <h3>1. Node.js: Comprehensive Explanation</h3>
    <p>Node.js is an open-source, cross-platform runtime environment for executing JavaScript on the server side. It's built on Chrome's V8 JavaScript engine and utilizes an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications. Key aspects include:</p>
    <ul>
        <li>Event-Driven, Non-Blocking I/O: Node.js operates on a single-thread event loop which makes it capable of handling multiple concurrent connections without creating multiple threads, thus saving resources.</li>
        <li>Built-in Libraries: Node.js comes with a variety of built-in libraries for various functionalities like HTTP, file system, streams, and more, enabling rapid development of server-side functionalities.</li>
        <li>Community and Ecosystem: A vast community of developers and an enormous range of third-party modules available through NPM enhance its capabilities and usability in various types of projects.</li>
    </ul>

    <h3>2. NPM (Node Package Manager): In-Depth Explanation</h3>
    <p>NPM is the default package manager for Node.js, providing a repository for thousands of open-source packages. Key features include:</p>
    <ul>
        <li>Package Management: It allows developers to install, update, configure, and remove Node.js packages (modules) easily.</li>
        <li>Dependency Management: NPM automatically manages package dependencies and their versions, ensuring compatibility and functionality.</li>
        <li>Scripts and Automation: NPM scripts can automate various tasks like testing, building, and deploying applications.</li>
    </ul>
  
        <h3>2.1 NPM (Node Package Manager)</h3>

        <p>NPM is the default package manager for Node.js, providing a repository for thousands of open-source packages. Its functionalities include package management, dependency management, and automation processes.</p>

        <h3>2.2Package Management</h3>
        <ul>
            <li><code>npm install express</code>: Installs the 'express' package.</li>
            <li><code>npm update lodash</code>: Updates the 'lodash' package.</li>
            <li><code>npm uninstall moment</code>: Uninstalls the 'moment' package.</li>
        </ul>

        <h2>Dependency Management</h2>
        <ul>
            <li><code>npm init</code>: Creates a 'package.json' file.</li>
            <li>Dependencies are managed within the 'package.json' file.</li>
        </ul>

        <h2>Scripts and Automation</h2>
        <p>Scripts defined in the 'package.json' file can be used to automate various tasks.</p>
        <ul>
            <li><code>npm start</code>: Starts the application.</li>
            <li><code>npm test</code>: Runs the tests.</li>
        </ul>
    
    <h3>3. Server Setup Using Express: Detailed Overview</h3>
    <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node.js based server applications. Key aspects include:</p>
    <ul>
        <li>Middleware: Express uses middleware to process requests. Middleware functions can perform tasks like logging, serving static files, error handling, and more.</li>
        <li>Simplified Routing: Express provides a powerful routing API to manage requests to different URI paths with various HTTP methods.</li>
        <li>Template Engines: Express supports template engines like Pug, Mustache, EJS, which helps in generating HTML based on dynamic data.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/server.png" alt="" />

    <h3>4. MongoDB and Its Usage with JavaScript: Detailed Analysis</h3>
    <p>MongoDB, a popular NoSQL database, stores data in flexible, JSON-like documents, making data integration easier and faster. When used with JavaScript, particularly in a Node.js environment, MongoDB provides a seamless development experience:</p>
    <ul>
        <li>Schema-less Nature: Unlike traditional databases, MongoDB is schema-less, which gives flexibility in storing diverse data structures.</li>
        <li>Mongoose for Data Modeling: In Node.js, Mongoose is often used to model application data. It provides a straightforward schema-based solution to model data and includes built-in type casting, validation, and query building.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/mongo.png" alt="" />

    <h3>5. Model Definition and Example Usage in Depth</h3>
    <p>In the context of Node.js and MongoDB, a model is a high-level construct that provides a structured representation of database documents. It not only defines the shape of the data but also the behavior of the data in the database:</p>
    <ul>
        <li>Schema Definition: Models are defined through schemas in Mongoose. A schema maps to a MongoDB collection and defines the shape of the documents within that collection.</li>
        <li>Data Validation and Types: Models enforce data validation and type checking. For example, the schema can specify that the email field must be a string and required.</li>
        <li>Instance Methods: Models can have instance methods, which are useful for encapsulating model logic.</li>
        <li>Database Interaction: Models are responsible for creating and reading documents from the underlying MongoDB database.</li>
    </ul>
    <img className='h-[100%] w-[40%] p-2' src="src/photos/model.png" alt="" />
  

    <h3>6. Detailed Explanation of Controller with Example</h3>
    <p>Controllers in a Node.js backend are crucial for separating business logic from the presentation layer. They act as an intermediary between models (data) and views (presentation). Responsibilities include handling client requests, processing them (possibly using models), and returning a response. This promotes modularity by separating out the logic for different routes, making the codebase easier to manage and scale.</p>
    
    <img className='h-[100%] w-[40%] p-2' src="src/photos/controller.png" alt="" />
  
    

    <h3>7. Express.Router: Comprehensive Overview with Example</h3>
    <p>Express.Router is a class that helps in managing route handlers in Express applications, enabling the creation of modular and reusable routes. It helps in breaking down the application routes into smaller, manageable sub-routes and can have their own middleware stack, which can be used for logging, authentication, etc. They are also useful for grouping similar routes.</p>

    <img className='h-[100%] w-[40%] p-2' src="src/photos/routes.png" alt="" />

    <h1>Detailed Guide on Setting Up an Ubuntu Server on Oracle Cloud</h1>

<section>
    <h3>1.Firewall Configuration</h3>
    <p>Configuring the firewall is crucial for securing your Ubuntu server on Oracle Cloud and ensuring proper connectivity. Below are the detailed steps and considerations:</p>
    <ol>
        <li>Log into the Oracle Cloud Console and access the Compute instance details for your Ubuntu server.</li>
        <li>Under the 'Resources' section, navigate to 'Virtual Cloud Network' and then to 'Security Lists' for your subnet.</li>
        <li>Here you can add 'Ingress Rules' to allow incoming traffic and 'Egress Rules' for outgoing traffic.</li>
        <li>For SSH access, add an ingress rule to allow TCP traffic on port 22 from your IP address for security.</li>
        <li>Similarly, allow HTTP (port 80) and HTTPS (port 443) if running a web server, and other application-specific ports as required.</li>
        <li>Ensure rules do not expose sensitive ports to the public and restrict access to trusted IP ranges.</li>
    </ol>
   
    <p><strong>Note:</strong> The Oracle Cloud interface may change, so it's advisable to refer to the latest documentation for the most accurate steps.</p>
    <img className='h-[100%] w-[70%] p-2' src="src/photos/ingress.png" alt="" />
    <img className='h-[100%] w-[70%] p-2' src="src/photos/egress.png" alt="" />
</section>


<section>
    <h3>2.Connecting to the Server via SSH</h3>
    <p>Once the firewall is configured, use SSH keys for a secure connection to your server:</p>
    <ol>
        <li>Generate an SSH key pair on your local machine if you haven't already.</li>
        <li>Add the public key to Oracle Cloud Instance 'SSH Keys' settings during the creation or through the instance details after creation.</li>
        <li>Connect to your server using the private key with the command:
            <code>ssh -i /path/to/private_key.pem ubuntu@your_server_ip</code>
        </li>
    </ol>
    <img className=' w-[40%] p-2' src="src/photos/ubuntu.png" alt="" />
</section>

<section>
    <h3>3.Setting Up PM2 for Node.js Application Management</h3>
    <p>PM2 is an advanced, production process manager for Node.js applications with a built-in load balancer. The steps below outline how to set up PM2:</p>
    <ol>
        <li>Install Node.js and NPM on your Ubuntu server if not already installed.</li>
        <li>Install PM2 globally using NPM:
            <code>npm install pm2@latest -g</code>
        </li>
        <li>Start your application with PM2 to ensure it runs in the background and restarts on failure:
            <code>pm2 start app.js --name "your-app-name"</code>
        </li>
        <li>Configure PM2 to automatically resurrect your processes after a reboot by generating a startup script with:
            <code>pm2 startup systemd</code>
        </li>
        <li>Save the current process list to be respawned on reboot with:
            <code>pm2 save</code>
        </li>
        <li>Monitor logs, custom metrics, application information with:
            <code>pm2 monit</code>
        </li>
    </ol>
    <p><strong>Tip:</strong> Use the <code>ecosystem.config.js</code> file for advanced PM2 configurations, such as setting environment variables, log file locations, and clustering options.</p>
</section>

<section>
    <h3>4.Deploying Application Updates</h3>
    <p>Deploying updates to your Node.js application involves pulling the latest code from your Git repository and restarting the application:</p>
    <ol>
        <li>Pull the latest updates from your Git repository:
            <code>git pull origin master</code>
        </li>
        <li>Install any new dependencies with NPM:
            <code>npm install</code>
        </li>
        <li>Reload your application with zero downtime using PM2:
            <code>pm2 reload your-app-name</code>
        </li>
    </ol>
    <img className=' w-[40%] p-2' src="src/photos/pm2.png" alt="" />
    
</section>

<section>
    <h3>5.Installing and Configuring NGINX on Ubuntu Server</h3>
    <p>NGINX is a high-performance HTTP and reverse proxy server, and it's quite straightforward to set up on an Ubuntu server. Here's how to install and do a basic configuration of NGINX:</p>
    <ol>
        <li>Update the package lists for upgrades and new package installations:
            <code>sudo apt update</code>
        </li>
        <li>Install NGINX:
            <code>sudo apt install nginx</code>
        </li>
        <li>Once the installation is complete, start the NGINX service:
            <code>sudo systemctl start nginx</code>
        </li>
        <li>Enable NGINX to start on boot:
            <code>sudo systemctl enable nginx</code>
        </li>
        <li>To check the status of NGINX:
            <code>sudo systemctl status nginx</code>
        </li>
        <li>By default, NGINX is configured to start serving web pages. Try accessing your server's IP in a web browser. You should see the default NGINX welcome page.</li>
        <li>To allow traffic on port 80 and 443 through the firewall, use the following commands:
            <code>sudo ufw allow 'Nginx HTTP'</code>
            <code>sudo ufw allow 'Nginx HTTPS'</code>
        </li>
        <li>NGINX's default configuration file is located at <code>/etc/nginx/nginx.conf</code>. Site-specific configuration files can be found in <code>/etc/nginx/sites-available/</code> directory, with symbolic links in <code>/etc/nginx/sites-enabled/</code>.</li>
        <li>To create a new configuration file for your site:
            <code>sudo nano /etc/nginx/sites-available/your_domain</code>
        </li>
        <li>Here’s a basic structure of a server block (virtual host) in NGINX:
          <img></img>
        </li>
        <li>Create a symbolic link to enable your site configuration:
            <code>sudo ln -s /etc/nginx/sites-available/your_domain /etc/nginx/sites-enabled/</code>
        </li>
        <li>Test the NGINX configuration for syntax errors:
            <code>sudo nginx -t</code>
        </li>
        <li>If you made changes to the NGINX configuration, reload the service to apply the changes:
            <code>sudo systemctl reload nginx</code>
        </li>
    </ol>
    <p><strong>Note:</strong> Replace <code>your_domain</code> with your actual domain name and adjust the PHP version in the fastcgi_pass directive if necessary. The root directive should point to the directory where your website's files are stored.</p>

    <img className=' w-[40%] p-2' src="src/photos/ngnix.png" alt="" />
</section>





    
    

    
      </div>
     
    </div>
  </div>
    
  );
}
