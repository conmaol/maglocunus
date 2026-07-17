# Continuous Integration / Continuous Delivery (CI/CD)

`Continuous Integration` (CI) is a software development practice where developers merge their code changes frequently into a shared repository, triggering 
automatical quality-checking of the code, and building and testing of the application. CI means that integration problems can be detected early.

`Continuous Delivery` (CD) extends CI by automatically preparing tested code for release, deploying to staging, 
before normally a person approves the final deployment to production. `Continuous Deployment` goes a step further by automatically deploying to production without human intervention.

Before CI/CD, traditional software development was much more manual and waterfall-based,characterised by:
- infrequent code integration, leading to merge conflicts, broken builds, unexpected bugs (‘integration hell’)
- manual builds — error-prone and time-consuming
- separate testing phase, leading to late-discovered bugs, expensive fixes, and slipped release schedules
- much longer release cycles

Examples of CI tools are:
- GitHub Actions
- Azure DevOps Pipelines
- GitLab CI/CD
- Jenkins

cf. Agile, DevOps

----

Back up to: [Top](../index.md)
