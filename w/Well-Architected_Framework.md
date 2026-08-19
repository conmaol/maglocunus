# AWS Well-Architected Framework

The AWS `Well-Architected Framework` is a collection of design principles for building secure, resilient and high-performing solutions in the AWS cloud.

The framework has six pillars:
- **operational excellence**
  - perform operations as code, so as to:
    - leverage automation and speeds up deployment
    - limit the chances of human error
    - create consistent output each time
  - anticipate failure
    - conduct tests
    - evaluate the effectiveness of response procedures
  - use managed services
    - allows administrators to focus on managing their application instead of the infrastructure
- **security**
  - implement a string identity foundation
    - apply the principle of least privilege
    - enforce separation of duties
    - use a centralised identity management solution
  - protect data at rest and in transit
    - configure the appropriate encryption and access control mechanisms
  - ensure traceability
    - logging systems should monitor and capture all actions
  - apply security at *all* layers
    - infrastructure
    - application
    - network
    - data
  - be prepared for security incidents
    - have well-defined incident response procedures
    - run simulations
- **reliability**
  - design to automatically recover from failure
    - continuously monitor key metrics (CloudWatch)
    - use automation to recover from failure (EventBridge)
  - test recovery procedures
  - scale horizontally
    - replace a large resource (eg. one 8xlarge EC2) with multiple smaller resources (ie. four 2xlarge EC2s) to eliminate a SPOF
- **performance efficiency**
  - use serverless architectures
    - no server needed for running code or hosting static websites
    - reduces operational burden
    - results in cost savings
  - deploy globally, in multiple regions
    - lower latency
    - improved customer experience
- **cost optimisation**
  - adopt a consumption model
    - pay only for the resources you consume
    - stop resources when not needed
    - use auto-scaling services
  - analyse expenditure
    - identify areas for optimisation
    - measure your ROI
- **sustainability**
  - maximise utilisation
    - appropriately size your workloads
  - use managed services (like AWS Lambda)
    - impact of power and networking is shared across customers

Further reading:
- [AWS guidance](https://aws.amazon.com/architecture/well-architected/)


----

Back up to: [Maglocunus](../index.md)
