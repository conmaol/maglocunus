# BICS data model

```mermaid
    erDiagram
        APPLICATION {
            string applicationID
            string businessID
            date startDate
            date submittedDate
            string status
        }
        BUSINESS {
            string businessID
            string companyName
            string crn
            string address
            string sic
            string registrationStatus
        }
        APPLICATION ||--|| BUSINESS : on-behalf-of
        USER {
            string userID
            string userName
            string email
            string type
            string authorityType
            string authoriserDetails
            string oneLoginID
        }
        APPLICATION }|--|| USER : makes
```



```
erDiagram
    FACTORY ||--|{ METER : contains
    ENERGY-SUPPLIER |o--|{ METER : supplies
    FACTORY { string postcode }
    METER { string MPAN }
    COMPANY }|--|{ MACHINE : operates
    COMPANY { string CRN }
    METER ||--|{ MACHINE : powers
    MACHINE }|--|{ PRODUCT : makes
    PRODUCT { string HS-code}
```
