# Virtual Private Clouds

A `Virtual Private Cloud` (VPC) is a logically isolated virtual network within a single [Amazon Web Services](../a/AWS.md) (AWS) account.

Contents:
- [VPCs and subnets](#vpcs-and-subnets)
- [VPC peering](#vpc-peering)

## VPCs and subnets

A VPC:
- architecturally resembles a traditional network in an on-premises data centre
- resides in a single AWS region
  - allowing for easier compliance with regulatory requirements, such as data residency
- contains subnets
- are isolated by default – resources in different VPCs do not talk to each other, even if they are in the same AWS region
- support both IPv4 and IPv6 addresses
- can be created and managed using the AWS `VPC` service.

A subnet: 
- consists of a range of IP addresses
- resides in a single availability zone
- is where resources are launched (EC2 instances, EBS volumes, etc)
- can be configured as *public* or *private*:
  - public: has a route to an internet gateway, allowing both outgoing and incoming access to the internet, and typically hosts web servers
  - private: has a route to a network access translation (NAT) device, allowing outgoing access to the internet (but not incoming), and typically hosts database servers
- can be protected by *network access control lists* (NACLs), which filter inbound and outbound traffic
  - specific resources/instances in a subnet can be protected by *security groups*
- can be shared with other accounts in the same AWS organisation
  - users of the other account can launch resources on the shared subnet (managed by the AWS `Resource Account Manager` service)
  - keeping VPCs to a minimum, while keeping separate accounts for billing.

If you spread resources across multiple subnets, they will be more available and fault tolerant, especially if you use services like Elastic Load Balancing and Auto Scaling.

Here is an example:

```mermaid
flowchart TD
  account["`**account**
id: 123456789012`"]
  VPC["`**VPC**
name: Production VPC
region: us-east-1
IPs: 10.0.0.0/16`"]
  SN1["`**subnet**
name: Subnet A
AZ: us-east-1a
IPs: 10.0.1.0/24
type: public`"]
  SN2["`**subnet**
name: Subnet B
AZ: us-east-1b
IPs: 10.0.2.0/24
type: private`"]
  EC2(["`**resource**
type: EC2 instance`"])
  EBS(["`**resource**
type: EBS volume`"])
  account -- owns --> VPC
  VPC -- contains --> SN1
  VPC -- contains --> SN2
  SN1 -- hosts --> EC2
  SN2 -- hosts --> EBS
```

Or in more traditional notation:

```mermaid
flowchart LR
  subgraph "[account] 123456789012"
    subgraph "[VPC] Production VPC — us-east-1 10.0.0.0/16"
      subgraph "[public subnet] Subnet A – us-east-1a 10.0.1.0/24"
        EC2["`[resource] EC2`"]
      end
      subgraph "[private subnet] Subnet B  – us-east-1b 10.0.2.0/24"
        EBS["`[resource] EBS`"]
      end
    end
  end
```

Here is an ER diagram:

```mermaid
erDiagram
    ACCOUNT ||--|{ VPC : owns
    VPC ||--|{ SUBNET : contains
    ACCOUNT { String id}
    VPC {
      String name
      String region
      String IPs
    }
    SUBNET {
      String name
      String availabilityZone
      String IPs
      String type
    }
    SUBNET ||--|{ RESOURCE : hosts
    RESOURCE {
      String type
    }
    SUBNET ||--o| NACL : protected-by
    RESOURCE ||--o| SECURITY-GROUP : protected-by
```

Note that:

>  `10.0.0.0/16` means all IPv4 addresses from `10.0.0.0` to `10.0.255.255`, a CIDR (Classless Inter-Domain Routing) block containing 65,536 IP addresses.
>
> `10.0.1.0/24` is a subnet of this containing `10.0.1.0` to `10.0.1.255` ie. 256 IP addresses.
>
> When configuring a VPC, be sure to choose a CIDR block large enough to accommodate your current resources and allows for scalability in future.


Use security groups and network access control lists (NACLs) to filter inbound and outbound traffic.

Security groups are applied to instances; NACLs are applied to subnets.

Back up to: [Top](#)

## VPC peering

Two VPCs can be ‘peered’ (ie. connected) as long as their IP ranges do not overlap.
- VPC peering allows instances in either VPC to communicate with each other as if they were in the same network.
- Peering VPCs can belong to the same or different AWS accounts.

In other words:

```mermaid
erDiagram
    VPC {
      String name
      String region
      String IPs
    }
    VPC }o--o{ VPC : peers
```

Here is an example of same-account peering:

```mermaid
flowchart TD
  account["`**account**
id: 123456789012`"]
  VPC1["`**VPC**`"]
  VPC2["`**VPC**`"]
  account -- owns --> VPC1
  account -- owns --> VPC2
  VPC1 <-- peers --> VPC2
```

Here is an example of cross-account peering:

```mermaid
flowchart TD
  account1["`**account**
id: 123456789012`"]
account2["`**account**
id: 210987654321`"]
  VPC1["`**VPC**`"]
  VPC2["`**VPC**`"]
  account1 -- owns --> VPC1
  account2 -- owns --> VPC2
  VPC1 <-- peers --> VPC2
```

Use `AWS VPN` or `AWS Direct Connect` to connect your VPC with your on-premises environment:
- AWS VPN allows you to create an IPsec site-to-site VPN with your on-premises network.
- AWS Direct Connect establishes a dedicated private connection from your on-premises network to your VPC.

Back up to: [Top](#)


### mmm





Compliance and data residency.





- 



  

----

Back up to: [Maglocunus](../index.md)
