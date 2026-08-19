# AWS Well-Architected Framework

The AWS `Well-Architected Framework` is a collection of design principles for building secure, resilient and high-performing solutions in the [AWS](../a/AWS.md) cloud.

The framework has six pillars:

### 1. Operational excellence

  - perform operations as <mark>code</mark>, so as to:
    - leverage automation and speed up deployment
    - limit the chances of human error
    - create consistent output each time
  - anticipate failure
    - conduct <mark>tests</mark>
    - evaluate the effectiveness of response procedures
  - use <mark>managed services</mark>
    - allows administrators to focus on managing their application instead of the infrastructure

### 2. Security

- <mark>implement strong identity and access management</mark>
  - use a centralised identity management solution
      - either manage identities within AWS
      - or use an external identity provider
  - consider granting secure access to external users of your resources and applications
      - implement the principle of least privilege
  - enforce separation of duties
    - use identity-based policies to define permissions for users and groups
    - use resource-based policies to control access to resources
    - use service control policies (SCPs) to define maximum permissions for member accounts in an AWS organisation
- <mark>protect data – at rest and in transit</mark>
  - identify and classify your data
    - Does it contain PII, IP (patents, secrets), protected health (medical records) or financial information (credit card details)?
    - Where is the data stored, who owns it, who can access or modify it, what is the business impact of a leak?
  - configure the appropriate authentication, encryption, access control, and reporting mechanisms
  - use secure protocols like HTTPS when transferring data
- <mark>implement traceability</mark>
  - logging tools should be used to track, monitor and capture all actions in your AWS environment, in real time
    - use AWS CloudTrail to maintain an audit trail of your users actions
    - use AWS Config to record configurations of your AWS resources
    - use AWS X-Ray to get an end-to-end view of requests, to help you identify the root cause of issues and errors
    - use VPC Flow logs to capture IP traffic to and from your VPC
    - tag resources to assign ownership
    - store logs in an S3 bucket or CloudWatch log group for further analysis
- <mark>secure every layer</mark> (using AWS tools)
  - infrastructure
  - applications
  - network
  - code
  - data
  - instances (EC2, databases, etc.)
  - operating system
- <mark>prepare for security incidents</mark>
    - create (and regularly update) an incident response plan specific to your AWS environment
      - How should your team respond to an incident, restore operations, and perform forensic analysis?
    - run simulations

### 3. Reliability

  - design to automatically recover from failure
    - continuously monitor key metrics (CloudWatch)
    - use automation to recover from failure (EventBridge)
  - test recovery procedures
  - <mark>scale horizontally</mark>
    - replace a large resource (eg. one 8xlarge EC2) with multiple smaller resources (ie. four 2xlarge EC2s) to eliminate a SPOF
4. **performance efficiency**
  - use <mark>serverless</mark> architectures
    - no server needed for running code or hosting static websites
    - reduces operational burden
    - results in cost savings
  - deploy globally, in multiple regions
    - lower latency
    - improved customer experience
5. **cost optimisation**
  - adopt a <mark>consumption model</mark>
    - pay only for the resources you consume
    - stop resources when not needed
    - use <mark>auto-scaling</mark> services
  - analyse expenditure
    - identify areas for <mark>optimisation</mark>
    - measure your ROI
6. **sustainability**
  - maximise utilisation
    - appropriately size your workloads
  - use managed services (like AWS Lambda)
    - impact of power and networking is shared across customers

Further reading:
- [AWS guidance](https://aws.amazon.com/architecture/well-architected/)


----

Back up to: [Maglocunus](../index.md)
