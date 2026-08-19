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
  - test recovery procedures
  - scale horizontally
- performance efficiency
  - use serverless architectures
  - deploy globally (in multiple regions)
- cost optimisation
  - adopt a consumption model
  - analyse expenditure
- sustainability
  - maximise utilisation
  - use managed services

Further reading:
- [AWS guidance](https://aws.amazon.com/architecture/well-architected/)


----

Back up to: [Maglocunus](../index.md)
