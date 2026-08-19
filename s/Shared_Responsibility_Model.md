# AWS Shared Responsibility Model

outlines who is responsible for which element of the AWS cloud.
outlines the shared responsibility of security and compliance between AWS and the customer.

- Who will manage the hardware powering the virtual services?
- Who is responsible for the software components?
- Who is responsible for operating system configuration?
- Who will configure the network and firewall?
- Who is responsible for encryption and access control?

How is AWS architected?

physical servers
hypervisor
virtual services

The physical servers and virtualisation layer (hypervisor) are invisible to the customer, and always fully managed by AWS.

Customer responsibility os determined by the type of service used:
- Infrastructure as a Service (IaaS)
- Platform as a Service (PaaS)

eg. EC2 service allows customers to launch virtual machines – IaaS
- AWS is responsible for the physical hardware across regions, availability zones and edge locations
- AWS is also responsible for the software used to manage the hardware - the hypervisor
- ie. AWS is responsible for security OF the cloud
- The customer is responsible for security IN the cloud
  - server and client-side encryption, and network traffic protection (protecting data at rest and in transit)
  - VM operating system, network and firewall configuration
  - managing the platform and applications running on instances, and identity and access management

Managing data is always the customers responsibility, regardless of service type.

eg. RDS (Relational database Service) - PaaS
- AWS also manages the OS, network and firewall configuration of the platform on which the database is hosted
- AWS manages the platform and the application
- The customer is responsible for client-side encryption, IAM, and network traffic protection and firewall configuration

eg. S3 (Simple Storage Service) – more abstracted service
- interface for customers to upload objects
- customer is only responsible for client-side encryption, IAM, and the data

AWS is always responsible for physical infrastructure and the hypervisor

Customer is always responsible for managing data

Customer is always responsible for managing identities and access


----

Back up to: [Maglocunus](../index.md)
