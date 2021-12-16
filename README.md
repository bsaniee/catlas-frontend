# Catlas Project
#### By Bijan Saniee 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DESCRIPTION
This project is a book app that allows users to display and save Cats. The app will have full CRUD functionality and allow users to add, edit, and delete new cats. They will also be able to see details about the cats such as breed, color, and country of origin.

## COMPONENTS
- Header 
- Main
- Index
- Show

## REACT COMPONENT ARCHITECTURE
```
-> App
  -> Header
  -> Main |state: cats|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: cats, createCat|
      -> Route |path="/cats/:id|
        -> Show |Props: cats, updateCat, deleteCat|
```

## REACT ROUTER ROUTE TABLE
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all cats (index)||
| / | Index | post | posting a new cat (create) |
| /cats/:id | Show | put | updating a cat (update) |
| /cats/:id | Show | delete | delete a cat (destroy) |