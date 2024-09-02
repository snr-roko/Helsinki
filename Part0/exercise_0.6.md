### New Note Diagram
Diagram created with the mermaid syntax depicts a situation a user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/spa
# Sequence Diagram Example

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: User enters a new note in the input field and clicks save
    browser->>server: POST request with the new note and timestamp is sent to the server
    Note right of browser: Form event handler prevents default behaviour and content type set to JSON.
    server->>browser: HTTP Status code 201 (Created) is sent together with data
    Note right of browser: The browser uses the data and adds it to the Notes on the page. 
```
