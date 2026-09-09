const topic = {
  id: "applications",
  title: "Applications of Linear Algebra",
  summary:
    "Applications across CS, data science, engineering and mathematics including PCA, graphics, and control systems.",
  details: `
Applications of Linear Algebra refer to the different ways the concepts of vectors, matrices, systems of equations, linear transformations, eigenvalues, and other Linear Algebra techniques are used to solve problems in the real world. Although Linear Algebra is a mathematical subject, it is not limited to theoretical calculations. It is widely used in computer science, engineering, physics, economics, statistics, artificial intelligence, machine learning, computer graphics, data science, and many other fields.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. COMPUTER GRAPHICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Computer graphics is one of the most visual and intuitive applications of Linear Algebra. Every object in a 3D scene, from a simple triangle to a complex character, is represented as a collection of vertices (vectors). These vectors are then transformed using matrices to achieve translations, rotations, scaling, and perspective projections. For instance, a translation matrix moves an object from one position to another, while a rotation matrix changes its orientation. The composition of these transformations is achieved through matrix multiplication, which combines multiple operations into a single efficient computation. Graphics pipelines in game engines and rendering software rely heavily on matrix operations to process millions of vertices per frame in real time. Without Linear Algebra, modern 3D graphics, virtual reality, and animation would be impossible. The ability to manipulate vectors and matrices is therefore a fundamental skill for anyone working in computer graphics, game development, or visual effects.

Example: A 2D point can be represented as a vector:

  v = [2]
      [3]

If we want to move the point by 4 units horizontally and 2 units vertically, we can use vector addition:

  [2] + [4] = [6]
  [3]   [2]   [5]

This means that the point has moved from (2,3) to (6,5). Similar operations are used in video games, animation, 3D modeling, and visual effects.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. COMPUTER VISION & IMAGE PROCESSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In computer vision and image processing, images are treated as matrices of pixel values. Grayscale images are stored as 2D matrices, while colour images are represented as three such matrices (for red, green, and blue channels). Linear Algebra operations are used to apply filters (convolution matrices) for edge detection, blurring, sharpening, and noise reduction. Transformations like rotation, scaling, and translation of images are performed using affine transformation matrices. Moreover, matrix factorisations (like SVD) are used in image compression (e.g., JPEG) to reduce storage size while preserving perceptual quality. In machine learning for vision, convolutional neural networks perform matrix multiplications to extract features from images. Thus, Linear Algebra is the backbone of virtually every algorithm that processes, analyses, or manipulates visual data, enabling applications from facial recognition to autonomous driving.

A digital image can be represented as a matrix of numerical values. In a grayscale image, each number represents the brightness of a pixel.

Example: A small image might be represented as:

  A = [  0   50  100]
      [150  200  255]
      [100   50    0]

The values represent different levels of brightness. Linear Algebra can then be used to manipulate these matrices for tasks such as:

  ✓ Image Resizing
  ✓ Filtering
  ✓ Compression
  ✓ Recognition
  ✓ Enhancement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Algebra is the mathematical foundation of modern artificial intelligence and machine learning. Data is represented as vectors or matrices, where each row typically corresponds to a data point and each column to a feature. Machine learning algorithms, such as linear regression, logistic regression, support vector machines, and neural networks, are built upon linear operations. The forward pass in a neural network involves matrix multiplication between input vectors and weight matrices, followed by activation functions. Backpropagation, the algorithm used to train networks, relies on the chain rule and gradient descent, which in turn involve matrix derivatives and vector operations. Furthermore, techniques like principal component analysis (PCA) and singular value decomposition (SVD) are used for dimensionality reduction and feature extraction. Without Linear Algebra, the efficient training and inference of large-scale models would be infeasible, making it a critical area of study for aspiring AI practitioners.

Data used by machine-learning algorithms is often represented using vectors and matrices.

Example: Information about a student could be represented as:

  x = [20]
      [170]
      [ 65]

where the values could represent age, height, and weight. A machine-learning model can process thousands or millions of these vectors to identify patterns and make predictions.

Linear Regression: A model attempts to find a relationship between input variables and an output. Matrices can be used to represent the data and efficiently calculate the model's parameters. This is one reason Linear Algebra is an essential mathematical foundation for machine learning.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. DATA SCIENCE & PRINCIPAL COMPONENT ANALYSIS (PCA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Data science involves extracting insights from large datasets, which are naturally represented as matrices. Linear Algebra provides the tools to manipulate these matrices efficiently. One of its most important techniques is Principal Component Analysis (PCA), which uses eigenvalues and eigenvectors to transform the original variables into a new set of uncorrelated variables (principal components) ordered by the amount of variance they explain. By keeping only the first few components, data scientists can reduce the dimensionality of the data, making it easier to visualise and speeding up subsequent algorithms. This is particularly useful when dealing with high-dimensional data, such as gene expression profiles or image pixel arrays. Additionally, Linear Algebra underpins regression analysis, clustering methods (like k-means), and many optimisation routines. Its ability to handle large-scale computations makes it indispensable for modern data analysis and decision-making.

Large datasets can contain thousands of variables and millions of observations. Matrices provide an organized way to represent and manipulate this information.

Principal Component Analysis (PCA): Uses concepts from Linear Algebra, particularly eigenvectors and eigenvalues, to reduce the number of dimensions in a dataset while preserving as much important information as possible.

Example: A dataset containing 100 different measurements can sometimes be transformed into a smaller number of important components, making the data easier to analyze and visualize.

Operations such as matrix multiplication, matrix decomposition, and eigenvalue analysis help data scientists identify patterns and reduce dataset complexity.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ENGINEERING & PHYSICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Algebra is indispensable in engineering and physics for modelling and solving problems involving multiple variables and interactions. Engineers use systems of linear equations to analyse electrical circuits (Kirchhoff's laws), structural frameworks (force balance), fluid flow networks, and control systems. In mechanical engineering, matrices are used to represent the stiffness and mass of structures, enabling finite element analysis (FEA) to predict stresses and displacements. In physics, matrices appear in quantum mechanics (observables as Hermitian operators), classical mechanics (moment of inertia tensors), and electromagnetism (Maxwell's equations in linear media). The ability to solve large systems of equations efficiently using matrix factorisations like LU or QR decomposition is crucial for simulation and design. Thus, Linear Algebra bridges the gap between abstract mathematics and tangible physical systems, making it a core subject in engineering curricula.

Engineers use systems of linear equations and matrices to model structures, electrical circuits, mechanical systems, and physical processes.

Example: A system of equations can describe the forces acting on different parts of a structure. Solving the system allows engineers to determine unknown forces or reactions.

Applications include:
  • Structural Analysis
  • Electrical Circuit Analysis
  • Mechanical Systems
  • Fluid Dynamics
  • Quantum Mechanics

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. ECONOMICS & BUSINESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In economics and business, Linear Algebra is used to model relationships between multiple variables, such as supply and demand, input–output production, and resource allocation. The Leontief input–output model, for example, uses matrices to represent the interdependencies between different sectors of an economy. By solving the system, one can determine the production levels required to meet final demand. Businesses use linear programming, which involves systems of linear inequalities, to optimise profit, minimise costs, and allocate resources efficiently. Portfolio optimisation in finance uses covariance matrices to balance risk and return. Moreover, econometric models often involve linear regression, which is solved using matrix equations. The ability to handle large datasets and multiple variables makes Linear Algebra a valuable tool for economists, financial analysts, and business managers.

Linear Algebra can be used to analyze relationships between different economic variables.

Example: Matrices can represent:
  • Production Requirements
  • Costs
  • Sales
  • Relationships Between Industries

A company could use a system of equations to determine how many units of different products should be produced while satisfying resource constraints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. NETWORK ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Networks, whether social, transportation, or computer, can be analysed using Linear Algebra. The adjacency matrix of a graph encodes connections between nodes, and its powers reveal paths of different lengths. Eigenvalues of the adjacency or Laplacian matrix provide insights into the network's properties, such as connectivity, clustering, and centrality. For instance, the PageRank algorithm used by Google is based on the eigenvector of a modified adjacency matrix, ranking webpages by importance. In social network analysis, community detection algorithms use spectral clustering, which relies on the eigenvectors of the Laplacian. Linear Algebra also enables the study of diffusion processes, influence spread, and robustness of networks under failure. Its tools are essential for understanding complex systems in sociology, biology, telecommunications, and the internet, making it a key area of applied mathematics and computer science.

Networks can represent roads, social connections, computer networks, communication systems, and transportation systems. A network can be represented using an adjacency matrix.

Example: If three locations are connected as follows:

  A = [0  1  1]
      [1  0  1]
      [1  1  0]

A value of 1 indicates that two locations are connected, while 0 indicates that they are not directly connected. Similar matrix representations are used in analyzing networks and relationships.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

8. CRYPTOGRAPHY & CYBERSECURITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Cryptography uses Linear Algebra for both encryption and decryption of messages. The Hill cipher, for example, encodes plaintext as vectors and multiplies them by an invertible matrix modulo 26, producing ciphertext. The security relies on the difficulty of inverting the matrix without the key. More advanced cryptographic systems, such as those based on lattice problems, also use matrices and linear algebra. In cybersecurity, Linear Algebra is used in error-correcting codes, which detect and correct data transmission errors, and in network security to analyse vulnerabilities using graph models. Moreover, machine learning algorithms for intrusion detection often involve matrix operations to classify network traffic. Thus, Linear Algebra provides essential tools for securing digital communications and protecting information in an increasingly connected world.

Matrices and modular arithmetic can be used to encode and decode information.

Example - Hill Cipher: A message can be converted into numerical values and multiplied by an encryption matrix. The resulting values represent the encrypted message.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

9. ROBOTICS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Robotics relies heavily on Linear Algebra for kinematics, dynamics, and control. A robot's joints and links are represented using transformation matrices that describe their positions and orientations relative to each other. Forward kinematics computes the end‑effector position from joint angles using matrix multiplications. Inverse kinematics, conversely, determines the joint angles required to reach a desired position, often solved using the Jacobian matrix and its pseudoinverse. Additionally, control algorithms for robot movement use state‑space representations, which are essentially matrix equations. In mobile robotics, sensor data (like LIDAR or camera images) is processed using linear transformations to build maps and localise the robot. Without Linear Algebra, the precise control and coordination of robotic systems would be impossible. It is therefore a fundamental subject for robotics engineers and researchers.

Robots need to understand their position, orientation, movement, and relationship between different parts of their bodies. Matrices and vectors are used to represent rotations, translations, and transformations.

Example: A robotic arm can use transformation matrices to determine the position of its hand based on the positions and rotations of its joints.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

10. MEDICAL IMAGING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Medical imaging technologies such as computed tomography (CT), magnetic resonance imaging (MRI), and positron emission tomography (PET) are built upon Linear Algebra. These systems acquire raw data in the form of projections or frequency measurements, and then use mathematical algorithms based on matrix operations to reconstruct detailed images of internal body structures. The reconstruction process often involves solving large systems of linear equations or using transforms like the Fourier transform, which is itself a linear operation. Additionally, image enhancement, registration, and segmentation techniques rely on linear algebra for filtering, feature extraction, and alignment. The speed and accuracy of these reconstructions directly affect diagnosis and treatment planning. Thus, Linear Algebra is not just an abstract tool but a critical enabler of modern healthcare technology.

Linear Algebra is used in technologies such as CT scans and MRI.

Medical imaging systems collect large amounts of numerical data and use mathematical techniques to reconstruct images of the inside of the human body. Matrix operations and mathematical transformations are important parts of these processes.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

11. OPTIMIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Optimisation is the process of finding the best solution from a set of feasible alternatives, often by minimising or maximising an objective function subject to constraints. Linear Algebra plays a central role in both linear and nonlinear optimisation. In linear programming, the constraints and objective are linear, leading to problems that can be solved using the simplex method, which relies heavily on matrix row operations. In unconstrained optimisation, gradient descent and Newton's method involve vector calculus and linear systems. The Hessian matrix (second derivatives) determines convergence and stability. In convex optimisation, duality and KKT conditions involve matrix equations. Moreover, many real‑world problems, such as resource allocation, portfolio selection, and logistics, are formulated using matrices. The efficiency of optimisation algorithms depends on fast linear algebra computations, making it a vital area of applied mathematics and operations research.

Optimization involves finding the best solution to a problem, such as minimizing cost, maximizing profit, or finding the most efficient use of resources.

Example: A company may want to determine how many units of two products it should manufacture. The variables can be represented as a vector:

  x = [x₁]
      [x₂]

where x₁ represents the number of units of Product A and x₂ represents the number of units of Product B.

Constraints on labor, materials, and production capacity can then be represented using matrices and inequalities.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

12. SEARCH ENGINES & RECOMMENDATION SYSTEMS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Search engines and recommendation systems are powered by Linear Algebra. Search engines represent webpages and the links between them as a giant matrix; the PageRank algorithm uses the eigenvector of a modified adjacency matrix to rank pages by importance. This approach transformed the way we find information online. In recommendation systems, user preferences and item features are represented as vectors. Collaborative filtering techniques, such as matrix factorisation (used by Netflix and Amazon), factorise the user‑item rating matrix into lower‑dimensional matrices that capture latent factors. These factors are then used to predict user preferences for unseen items. Singular Value Decomposition (SVD) is commonly used for this purpose. The ability to handle millions of users and items efficiently relies on sparse linear algebra and fast matrix operations, making Linear Algebra the foundation of modern information retrieval and personalisation.

Search Engines: Represent webpages and relationships between webpages using mathematical structures involving matrices.

Recommendation Systems: Represent users and products as vectors and compare these vectors to determine which products, movies, songs, or other items might be relevant to a particular user.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

13. COMPUTER SCIENCE APPLICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Many computational problems involve large amounts of numerical data. Linear Algebra is essential for:

  ✓ Graphics
  ✓ Artificial Intelligence
  ✓ Machine Learning
  ✓ Simulations
  ✓ Computer Vision
  ✓ Data Mining
  ✓ Scientific Computing

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Linear Algebra provides mathematical tools for representing, analyzing, and transforming information. Its applications can be found in:

  ✓ Computer Graphics
  ✓ Image Processing
  ✓ Artificial Intelligence
  ✓ Machine Learning
  ✓ Data Science
  ✓ Engineering
  ✓ Physics
  ✓ Economics
  ✓ Network Analysis
  ✓ Cryptography
  ✓ Robotics
  ✓ Medical Imaging
  ✓ Optimization
  ✓ Search Engines
  ✓ Recommendation Systems

The importance of Linear Algebra comes from its ability to turn complicated relationships into organized mathematical structures. Vectors can represent data and directions, matrices can represent relationships and transformations, and systems of equations can help find unknown values. Because of this, Linear Algebra is not only a theoretical branch of mathematics but also one of the fundamental mathematical tools behind many modern technologies.
  `,
  examples: [
    "Vector addition: Move point (2,3) by (4,2) → (6,5)",
    "Image matrix representation: Grayscale pixel values in a matrix",
    "Linear Regression: Find relationship between variables using matrices",
    "Use PCA to reduce dataset dimensions",
    "Adjacency matrix: Represent network connections",
    "Hill Cipher: Encrypt a message using matrix multiplication",
    "Robotics: Use transformation matrices for joint positions",
    "Describe how matrix transforms are used in computer graphics.",
    "Optimization: Represent variables and constraints using vectors and matrices",
  ],
};

export default topic;