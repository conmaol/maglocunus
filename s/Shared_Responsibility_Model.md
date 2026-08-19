# AWS Shared Responsibility Model

The `Shared Responsibility Model` outlines who is responsible for managing which layers of the [AWS](../a/AWS.md) cloud, to ensure security and compliance of a cloud solution. Is it AWS, or is it *you* as the customer?

For example:
- Who will manage the hardware powering the virtual services?
- Who is responsible for the software components?
- Who is responsible for operating system configuration?
- Who will configure the network and firewall?
- Who is responsible for encryption and access control?

The basic rules are as follows:
- The <mark>physical hardware</mark> is always fully managed by AWS, and is invisible to the customers.
- The <mark>virtualisation (hypervisor)</mark> software layer sits on top of the physical hardware. Again, this layer is always fully managed by AWS and is invisible to customers.
- Intermediate layers can be managed by either AWS or by the customers, depending on the kind of service being used.
- <mark>Data</mark> is always fully managed by the customer (including client-side encryption), regardless of service type.
- <mark>Identities and access</mark> are always fully managed by the customer, regardless of service type.

In a nutshell:
- AWS is responsible for security OF the cloud.
- The customer is responsible for security IN the cloud.

The `EC2` service is an example of <mark>Infrastructure-as-a-Service</mark> (IaaS), where customers can launch virtual machines:
- The customer is also fully responsible for managing the virtual machines – operating system, network and firewall configuration, server-side encryption, applications, etc.

The `Relational Database Service` (RDS) is an example of <mark>Platform-as-a-Service</mark> (PaaS), where customers can host their own databases:
- AWS also manages the virtual machines – operating system, network and firewall configuration for the platform, server-side encryption, database management application, etc.

The `Simple Storage Service` (S3) is a more abstracted service, with a web interface for customers to upload objects:
- The customer is only responsible for client-side encryption, IAM, and the data.

----

Back up to: [Maglocunus](../index.md)
