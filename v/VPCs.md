# Virtual Private Clouds

A `Virtual Private Cloud` (VPC) is a logically isolated virtual network on [Amazon Web Services](../a/AWS.md) (AWS), resembling a traditional network in an on-premises data centre.

A VPC resides in a single AWS region.

A VPC contains subnets, each of which consists of a range of IP addresses, and resides in a single availability zone.

For example:
- ‘Production VPC’ is a VPC in region `us-east-1`, including IP addresses `10.0.0.0/16`.
- It contains two subnets:
  - ‘Subnet A’ is in the `us-east-1a` availability zone, and consists of IP addresses `10.0.1.0/24`.
  - ‘Subnet B’ is in the `us-east-1b` availability zone, and consists of IP addresses `10.0.2.0/24`.

You launch resources within the subnets, such as EC2 instances or EBS volumes.

VPCs are **isolated** by default, for security reasons:
- Resources in different VPCs do not talk to each other, even if they are in the same AWS region.

You should be sure to choose a CIDR block (IP address range) that is large enough to accommodate your current resources and allows for scalability in future.

Two VPC can be ‘peered’ (ie. connected) just in case their IP ranges do not overlap.

Subnet can be configured a public or private.

Public subnets have a route to an internet gateway, allowing access to the internet, as well as incoming connections from the internet. Typically used by web servers.

Private subnets have a route to a network access translation (NAT) device, allowing access to the internet. NAT devices do not allow connections originating from the internet. Typically used by your database servers.

Use security groups and network access control lists (NACLs) to filter inbound and outbound traffic.

Security groups are applied to instances; NACLs are applied to subnets.

VPC peering allows direct connectivity between VPCs – instances in either VPC can communicate with each other as if they were in the same network.

Peering VPCs can belong to the same or different AWS accounts.

Use AWS VPN or AWS Direct Connect to connect your VPC with an on-premises environment.
- AWS VPN allows you to create an IPsec site-to-site VPN with your on-premises network.
- AWS Direct Connect establishes a dedicated private connection from your on-premises network to your VPC.

If you spread resources across multiple subnets, they will be highly available and fault tolerant.
- Especially if you se services like Elastic Load Balancing and Auto Scaling.

Compliance and data residency.

VPCs support both IPv4 and IPv6.

Subnets can be shared with other accounts in the same AWS organisation.
- You can keep VPCs to a minimum, while keeping separate accounts for billing.

- 



  



subnets (public or private)

IP ranges

regions

availability zones

EC2s

databases

----

Back up to: [Maglocunus](../index.md)
