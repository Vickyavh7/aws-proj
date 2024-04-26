const quizData = [
    {
   question: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
   options: [
     "Amazon EC2 costs are billed on a monthly basis.",
     "Users retain full administrative access to their Amazon EC2 instances.",
     "Amazon EC2 instances can be launched on demand when needed.",
     "Users can permanently run enough instances to handle peak workloads."
   ],
   answer: "Amazon EC2 instances can be launched on demand when needed."
 },
 {
   question: "Which AWS service would simplify the migration of a database to AWS?",
   options: [
     "AWS Storage Gateway",
     "AWS Database Migration Service (AWS DMS)",
     "Amazon EC2",
     "Amazon AppStream 2.0"
   ],
   answer: "AWS Database Migration Service (AWS DMS)"
 },
 {
   question: "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
   options: [
     "AWS Config",
     "AWS OpsWorks",
     "AWS SDK",
     "AWS Marketplace"
   ],
   answer: "AWS Marketplace"
 },
 {
   question: "Which AWS networking service enables a company to create a virtual network within AWS?",
   options: [
     "AWS Config",
     "Amazon Route 53",
     "AWS Direct Connect",
     "Amazon Virtual Private Cloud (Amazon VPC)"
   ],
   answer: "Amazon Virtual Private Cloud (Amazon VPC)"
 },
 {
   question: "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
   options: [
     "Configuring third-party applications",
     "Maintaining physical hardware",
     "Securing application access and data",
     "Managing guest operating systems"
   ],
   answer: "Securing application access and data"
 },
 {
   question: "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
   options: [
     "AWS Regions",
     "Edge locations",
     "Availability Zones",
     "Virtual Private Cloud (VPC)"
   ],
   answer: "Edge locations"
 },
 {
   question: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
   options: [
     "Use Amazon Cloud Directory",
     "Audit AWS Identity and Access Management (IAM) roles",
     "Enable multi-factor authentication",
     "Enable AWS CloudTrail"
   ],
   answer: "Enable multi-factor authentication"
 },
 {
   question: "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
   options: [
     "AWS Trusted Advisor",
     "AWS CloudTrail",
     "AWS X-Ray",
     "AWS Identity and Access Management (AWS IAM)"
   ],
   answer: "AWS CloudTrail"
 },
 {
   question: "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
   options: [
     "Amazon Simple Notification Service (Amazon SNS)",
     "AWS CloudTrail",
     "AWS Trusted Advisor",
     "Amazon Route 53"
   ],
   answer: "Amazon Simple Notification Service (Amazon SNS)"
 },
 {
   question: "Where can a user find information about prohibited actions on the AWS infrastructure?",
   options: [
     "AWS Trusted Advisor",
     "AWS Identity and Access Management (IAM)",
     "AWS Billing Console",
     "AWS Acceptable Use Policy"
   ],
   answer: "AWS Acceptable Use Policy"
 },
     {
       question: "Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?",
       options: [
         "AWS Organizations",
         "AWS Pricing Calculator",
         "AWS Cost Explorer",
         "AWS Service Catalog"
       ],
       answer: "AWS Cost Explorer"
     },
     {
       question: "A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)",
       options: [
         "AWS Glue",
         "Amazon Elastic File System (Amazon EFS)",
         "Amazon Redshift",
         "Amazon QuickSight",
         "Amazon Quantum Ledger Database (Amazon QLDB)"
       ],
       answer: ["AWS Glue", "Amazon QuickSight"]
     },
     {
       question: "A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?",
       options: [
         "AWS Support",
         "AWS Professional Services",
         "AWS Launch Wizard",
         "AWS Managed Services (AMS)"
       ],
       answer: "AWS Professional Services"
     },
     {
       question: "An e-learning platform needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances. Any application downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
       options: [
         "Reserved Instances",
         "Dedicated Hosts",
         "Spot Instances",
         "On-Demand Instances"
       ],
       answer: "Reserved Instances"
     },
       {
           "question": "Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)",
           "options": [
             "AWS Cost Explorer",
             "AWS Billing Conductor",
             "Amazon CodeGuru",
             "Amazon SageMaker",
             "AWS Compute Optimizer"
           ],
           "answer": ["AWS Cost Explorer", "AWS Compute Optimizer"]
         },
         {
           "question": "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
           "options": [
             "Providing high-performance container orchestration",
             "Creating and rotating encryption keys",
             "Detecting underutilized resources to save costs",
             "Improving security by proactively monitoring the AWS environment",
             "Implementing enforced tagging across AWS resources"
           ],
           "answer": ["Detecting underutilized resources to save costs", "Improving security by proactively monitoring the AWS environment"]
         },
         {
           "question": "Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?",
           "options": [
             "Elimination of expenses for running and maintaining data centers",
             "Price discounts that are identical to discounts from hardware providers",
             "Distribution of all operational controls to AWS",
             "Elimination of operational expenses"
           ],
           "answer": "Elimination of expenses for running and maintaining data centers"
         },
         {
           "question": "A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?",
           "options": [
             "AWS Resource Explorer",
             "AWS Service Catalog",
             "AWS Organizations",
             "AWS Systems Manager"
           ],
           "answer": "AWS Service Catalog"
         
       },
   
     {
        "question": "Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?", 
     "options": [ "Physical security of DynamoDB",
      "Patching of DynamoDB", 
       "Access to DynamoDB tables",
        "Encryption of data at rest in DynamoDB" ],
         "answer": "Patching of DynamoDB" },
      { "question": "Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?",
           "options": [ "Sustainability", "Performance efficiency", "Governance", "Reliability" ],
            "answer": "Governance" }, 
       { "question": "A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?",
             "options": [ "AWS Lambda", "Amazon RDS", "AWS Fargate", "Amazon Athena" ],
              "answer": "AWS Fargate" },
     {
       "question": "A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?",
       "options": [
         "Use of the Snowball Edge appliance for a 10-day period",
         "The transfer of data out of Amazon S3 and to the Snowball Edge appliance",
         "The transfer of data from the Snowball Edge appliance into Amazon S3",
         "Daily use of the Snowball Edge appliance after 10 days"
       ],
       "answer": "The transfer of data out of Amazon S3 and to the Snowball Edge appliance"
     },
     {
       "question": "A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?",
       "options": ["AWS Trusted Advisor", "Amazon Inspector", "AWS Config", "Amazon GuardDuty"],
       "answer": "Amazon Inspector"
     },
     {
       "question": "A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?",
       "options": [
         "Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.",
         "Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.",
         "Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.",
         "Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. Share the EBS volume directly with the users."
       ],
       "answer": "Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway."
     },
   {
     question: 'Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.) ',
     options: ['AWS Cost Explorer',
      'AWS Billinng conductor',
       '#Amazon sagemaker',
        'Amazon codeguru',
        'AWS Compute Optimizer'],
     answer: 'AWS Cost Explorer',
     
   },
   {
     question: 'Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)',
     options: ['Providing high-performance container orchestration',
      'Creating and rotating encryption keys', 
      'Detecting underutilized resources to save costs',
       '#Improving security by proactively monitoring the AWS environment',
       'Implementing enforced tagging across AWS resources'],
     answer: 'Detecting underutilized resources to save costs',
     
   },
   {
     question: 'Which of the following is an advantage that users experience when they move on-premises workloads to the AWS Cloud?',
     options: ['Elimination of expenses for running and maintaining data centers',
     ' Price discounts that are identical to discounts from hardware providers',
     'Distribution of all operational controls to AWS',
     'Elimination of operational expenses'],
     answer: 'Elimination of expenses for running and maintaining data centers',
   },
   {
     question: 'Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?',
     options: ['Platform',
      'Operations',
       'Security',
        'Governance'],
     answer: 'Operations',
   },
   {
     question: 'Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?',
     options: [
       'On-Demand Instances',
     'Reserved Instances',
     'Spot Instances',
     'Dedicated Instances'
     ],
     answer: 'On-Demand Instances',
   },
   {
     question: 'Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?',
     options: ['Configuration of Amazon EC2 instance operating systems',
     'Application file system server-side encryption',
     'Patch management',
    'Security of the physical infrastructure'],
     answer: 'Patch management',
   },
   {
     question: 'A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments Which AWS services or features will meet these requirements? (Choose two)',
     options: [
       'Placement groups',
       'Consolidated billing',
       'Edge locations',
       'AWS Config',
       'Multiple AWS accounts'
     ],
     answer: 'Consolidated billing',
   },
   {
     question: 'Which task is a responsibility of AWS, according to the AWS shared responsibility model?',
     options: ['Enable client-side encryption for objects that are stored in Amazon S3.', 'Configure IAM security policies to comply with the principle of least privilege', 'Patch the guest operating system on an Amazon EC2 instance', 'Apply updates to the Nitro Hypervisor'],
     answer: 'Apply updates to the Nitro Hypervisor.',
   },
   {
     question: ' company wants a unified tool to provide a consistent method to interact with AWS services.Which AWS service or tool will meet this requirement',
     options: [
       'AWS CLI',
       'Amazon Elastic Container Service (Amazon ECS)',
       'AWS Cloud9',
       'AWS Virtual Private Network (AWS VPN)',
     ],
     answer: 'AWS CLI',
   },
   {
     question: 'A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security.Which AWS service can the company use to meet these requirements?',
     options: ['AWS Shield', 
     'AWS Trusted Advisor', 
     'AWS WAF',
      'AWS Service Catalog'
     ],
     answer: 'AWS Trusted Advisor',
   },
 ];
 
 const quizContainer = document.getElementById('quiz');
 const resultContainer = document.getElementById('result');
 const submitButton = document.getElementById('submit');
 const retryButton = document.getElementById('retry');
 const showAnswerButton = document.getElementById('showAnswer');
 
 let currentQuestion = 0;
 let score = 0;
 let incorrectAnswers = [];
 let timeLeft = 3600;
 
   function updateTimer() {
     const hours = Math.floor(timeLeft / 3600);
     const minutes = Math.floor((timeLeft % 3600) / 60);
     const seconds = timeLeft % 60;
     document.getElementById("timer").textContent = `Time remaining: ${hours}:${minutes}:${seconds}`;
   }
 
   updateTimer();
 
   const countdown = setInterval(function() {
     timeLeft--;
     updateTimer();
     if (timeLeft <= 0) {
       clearInterval(countdown);
       document.getElementById("questions").innerHTML = "<h2>Time's up! Test has ended.</h2>";
       document.getElementById("submit").style.display = "none";
     }
   }, 1000);
 function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
 }
 
 function displayQuestion() {
   const questionData = quizData[currentQuestion];
 
   const questionElement = document.createElement('div');
   questionElement.className = 'question';
   questionElement.innerHTML = questionData.question;
 
   const optionsElement = document.createElement('div');
   optionsElement.className = 'options';
 
   const shuffledOptions = [...questionData.options];
   shuffleArray(shuffledOptions);
 
   for (let i = 0; i < shuffledOptions.length; i++) {
     const option = document.createElement('label');
     option.className = 'option';
 
     const radio = document.createElement('input');
     radio.type = 'radio';
     radio.name = 'quiz';
     radio.value = shuffledOptions[i];
 
     const optionText = document.createTextNode(shuffledOptions[i]);
 
     option.appendChild(radio);
     option.appendChild(optionText);
     optionsElement.appendChild(option);
   }
 
   quizContainer.innerHTML = '';
   quizContainer.appendChild(questionElement);
   quizContainer.appendChild(optionsElement);
 }
 
 function checkAnswer() {
   const selectedOption = document.querySelector('input[name="quiz"]:checked');
   if (selectedOption) {
     const answer = selectedOption.value;
     if (answer === quizData[currentQuestion].answer) {
       score++;
     } else {
       incorrectAnswers.push({
         question: quizData[currentQuestion].question,
         incorrectAnswer: answer,
         correctAnswer: quizData[currentQuestion].answer,
       });
     }
     currentQuestion++;
     selectedOption.checked = false;
     if (currentQuestion < quizData.length) {
       displayQuestion();
     } else {
       displayResult();
     }
   }
 }
 
 function displayResult() {
   quizContainer.style.display = 'none';
   submitButton.style.display = 'none';
   retryButton.style.display = 'inline-block';
   showAnswerButton.style.display = 'inline-block';
   resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
 }
 
 function retryQuiz() {
   currentQuestion = 0;
   score = 0;
   incorrectAnswers = [];
   quizContainer.style.display = 'block';
   submitButton.style.display = 'inline-block';
   retryButton.style.display = 'none';
   showAnswerButton.style.display = 'none';
   resultContainer.innerHTML = '';
   displayQuestion();
 }
 
 function showAnswer() {
   quizContainer.style.display = 'none';
   submitButton.style.display = 'none';
   retryButton.style.display = 'inline-block';
   showAnswerButton.style.display = 'none';
 
   let incorrectAnswersHtml = '';
   for (let i = 0; i < incorrectAnswers.length; i++) {
     incorrectAnswersHtml += `
       <p>
         <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
         <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
         <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
       </p>
     `;
   }
 
   resultContainer.innerHTML = `
     <p>You scored ${score} out of ${quizData.length}!</p>
     <p>Incorrect Answers:</p>
     ${incorrectAnswersHtml}
   `;
 }
 
 submitButton.addEventListener('click', checkAnswer);
 retryButton.addEventListener('click', retryQuiz);
 showAnswerButton.addEventListener('click', showAnswer);
 
 displayQuestion();