# AWS Well-Architected Framework

The AWS `Well-Architected Framework` is a collection of design principles for building secure, resilient and high-performing solutions in the [AWS](../a/AWS.md) cloud.

The framework has six pillars:
1. **operational excellence**
  - perform operations as <mark>code</mark>, so as to:
    - leverage automation and speed up deployment
    - limit the chances of human error
    - create consistent output each time
  - anticipate failure
    - conduct <mark>tests</mark>
    - evaluate the effectiveness of response procedures
  - use <mark>managed services</mark>
    - allows administrators to focus on managing their application instead of the infrastructure
2. **security**
  - implement a strong <mark>identity</mark> foundation
    - apply the principle of least privilege
    - enforce separation of duties
    - use a centralised identity management solution
  - protect data at rest and in transit
    - configure the appropriate encryption and access control mechanisms
  - ensure traceability
    - logging systems should <mark>monitor</mark> and capture all actions
  - apply security at *all* layers
    - infrastructure
    - application
    - network
    - data
  - be prepared for security <mark>incidents</mark>
    - have well-defined incident response procedures
    - run simulations
3. **reliability**
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
