# The Briathradan software architecture

## `index.php`

- imports `includes/include.php`
- imports `bootstrap.min.css`
- imports `jquery-3.4.1.min.js`
- imports `bootstrap.bundle.min.js`
- imports custom JS `js/main.js`
- creates a new search model M
- creates a new search view V from M
- display V

## index.php?search=apple

User searches for Gaelic terms equivalent to a specific English input string

## index.php?search=ubhal

User searches for Gaelic terms similar to a specific Gaelic input string

## ??

User requests more detailed information about a returned Gaelic term

1. User enters `https://briathadan.scot` into browser address bar.
2. Browser/client sends HTTP GET request to server.
3. Server locates and runs `index.php` script, with no input parameters, generating HTML content.
4. Server returns HTML content to client/browser.
5. Browser decodes and displays HTML content for user.
6. Browser waits for user to do something. 

1. User enters a search term into the search box.
2. Browser/client sends HTTP GET request to server eg. `index.php?search=dog`.
3. Server runs `index.php` script, with input parameter `search: dog`, generating HTML content.
4. Server returns HTML content to client/browser.
5. Browser decodes and displays HTML content for user.
6. Browser waits for user to do something. 

1. User clicks a hyperlink.
2. Browser/client sends HTTP AJAX request to server, eg. ajax.php?action=getEntry&mhw=madadh&mpos=m&msub=
3. Server runs `ajax.php` script, with input parameters `action: getEntry`, `mhw: madadh`, `mpos: m`, `msub: `, generating JSON content (with embedded HTML content).
4. Server returns JSON content to client/browser.
5. Browser extract and inserts HTML content into appropriate div, and displays it to user.
6. Browser waits for user to do something.

Controllers:

index.php controller (user visits homepage; or user requests a new search)

ajax.php controller

database controller

SQL controller

