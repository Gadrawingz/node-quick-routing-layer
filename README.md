# Node.js/Express Routing Layer Project

This project demonstrates how to organize your application's routes in a dedicated layer using Node.js and the Express framework. By separating API business logic from routing logic, you improve maintainability and middleware management. Route handlers and route definitions are placed in distinct locations.

**Benefits:**

* Enhanced maintainability
* Simplified middleware management

**Repository Structure:**

This repository uses two branches to illustrate the benefits of a routing layer:

1. **`without-routing-layer`**: The initial application with all routes defined in a single file (`index.js`).
2. **`main`**: The same application, but with routes structured and organized using a routing layer.

![alt text](/images/image.png)

**How to Use:**

1. Clone the repository and switch to the `without-routing-layer` branch:

    ```bash
    git clone --branch without-routing-layer "[https://github.com/Gadrawingz/node-quick-routing-layer.git](https://github.com/Gadrawingz/node-quick-routing-layer.git)"
    ```

2. Examine the code to understand the initial structure.
3. Switch to the `main` branch:

    ```bash
    git checkout main
    ```

4. Inspect the code to see the implementation of the Node.js routing layer.
