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

User clicks on hyperlink 

