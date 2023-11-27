# Deploy

In our case, it is more like "Deploy".

Once you've finished your website, you'll probably want to show it off to the world.

This means that you start to realize that you actually know and know how to program a website, but you don't know how to get it on the website. So far you have been operating on localhost.

In order to be seen by others, you will basically solve two things - domain and web hosting.

## What is a Domain?

A domain is a human-readable address used to access websites on the internet. It's the name that users type into their web browsers' address bars to visit a particular website.

### Structure of a Domain:

A domain consists of two main parts:

**Domain Name**: This is the readable part of the address, such as "example.com".

**Top-Level Domain (TLD)**: It's the extension that follows the domain name, like ".com", ".org", ".net", ".cz", etc.

### Domain Registration:

To own a domain, you need to register it through domain registrars, companies accredited by ICANN (Internet Corporation for Assigned Names and Numbers). Registrars manage the reservation of domain names and assign them to individuals or organizations for a specific period (usually annually) in exchange for a fee.

**Purpose**:

Domains make it easier for users to remember and access websites by replacing IP addresses with user-friendly names. They also help establish brand identity and credibility for businesses and individuals online.

## What is Web Hosting?

Web hosting is a service that provides the technologies and infrastructure needed to make websites accessible on the internet. It involves storing website files and data on servers connected to the internet.
Types of Hosting:

- Shared Hosting: Multiple websites share resources on a single server.
- Virtual Private Server (VPS): Provides dedicated resources within a shared environment.
- Dedicated Hosting: Entire server resources are dedicated to a single website.
- Cloud Hosting: Websites use resources from a network of interconnected servers.

**How it Works**:

When users access a website, their browsers send requests to the web hosting server. The server then retrieves the website's files and data and delivers them to the user's browser, allowing them to view the website.

**Key Features**:

- Storage: Space allocated for storing website files, databases, media, etc.
- Bandwidth: The amount of data transferred between the server and users' browsers.
- Uptime: The duration the hosting server remains operational without interruptions.

**Web Host Providers**:

Companies offering web hosting services manage servers, provide technical support, and offer various hosting plans tailored to different needs.

## Relationship Between Domain and Hosting:

Domains provide the address for accessing a website, while hosting stores and serves the website's content.

After registering a domain, it needs to be connected to a hosting service by configuring the domain's DNS (Domain Name System) settings to point to the hosting server's IP address.

## Summary

In summary, a domain is the address users type to access a website, while web hosting is the service that stores and delivers the website's content to users' browsers when they visit the domain. They work together to make websites accessible on the internet.

## Security

HTTP (Hypertext Transfer Protocol) and HTTPS (Hypertext Transfer Protocol Secure) are protocols used for transmitting data between a web browser and a web server. Their main distinction lies in security, especially in the context of security certificates, domains, and web hosting.

### What is HTTP?

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It's a protocol used by web browsers and servers to exchange information.

Characteristics:

- Operates over the internet as a plaintext protocol.
- Data transmitted via HTTP is not encrypted and can be intercepted, read, or modified by attackers.

Context in Domains and Web Hosting:

- Websites accessed via HTTP lack encryption and do not require SSL/TLS certificates.
- It's the default protocol for many websites and is often used for non-sensitive data or when encryption is not a priority.

### What is HTTPS?

HTTPS (Hypertext Transfer Protocol Secure) is an extension of HTTP that uses SSL/TLS encryption to secure data transmission between a web browser and a server.

Characteristics:

- Encrypts data during transmission, making it secure against eavesdropping and tampering.
- Uses SSL/TLS certificates to establish a secure connection.

Context in Domains and Web Hosting:

- Websites accessed via HTTPS have SSL/TLS certificates that encrypt data, ensuring privacy and integrity.
- SSL/TLS certificates are required for HTTPS implementation and are essential for securing sensitive data.

### Importance of HTTPS and SSL/TLS Certificates

Security and Privacy:

- HTTPS ensures data confidentiality, preventing unauthorized access to user information.
- SSL/TLS certificates authenticate the website's identity, building trust between users and websites.

SEO and Trust:

- Search engines like Google prioritize HTTPS-enabled sites in search results, promoting a safer browsing experience.
- Users are more likely to trust websites with HTTPS, leading to increased user confidence and engagement.

Regulatory Compliance:

- Compliance with data protection regulations often requires the use of HTTPS and SSL/TLS encryption.

### Implementation

Obtaining SSL/TLS Certificates:

- Websites must acquire SSL/TLS certificates from certificate authorities or through hosting providers.

Configuration:

- Web hosting services enable the installation and configuration of SSL/TLS certificates for HTTPS support.

Transitioning from HTTP to HTTPS:

- Many websites are moving towards HTTPS due to increased emphasis on security and privacy.
- Transitioning involves obtaining SSL/TLS certificates, configuring servers, and updating internal links and references.

In summary, HTTPS, implemented with SSL/TLS certificates, ensures secure communication between browsers and servers, providing data encryption, authentication, and trustworthiness, unlike HTTP, which operates without encryption and is vulnerable to security threats. This transition has become a standard practice for ensuring the security and integrity of online interactions.

## Steps to have your HTML, CSS & JS code accessible as a website on the World Wide Web

1. Domain Name and Hosting
2. Upload Files
3. Set Up DNS
4. Configure Hosting
5. Test and Verify
6. SEO and Analytics (Optional)
7. Launch and Promote

## What is deploy really?

You had to ask, didn't you?

1. Understanding Hosting Solutions
2. Deployment Strategies
3. Deployment Tools and Services
4. Containerization and Deployment Orchestration
5. Security Considerations in Deployment
6. Load Balancing and Scalability
7. Monitoring and Logging
8. Backup and Disaster Recovery
9. Cost Optimization and Resource Management
10. Documentation and Automation
11. Compliance and Regulations
12. Testing in Production
13. User Acceptance Testing (UAT) and Staging Environments
14. Post-Deployment Monitoring and Feedback
