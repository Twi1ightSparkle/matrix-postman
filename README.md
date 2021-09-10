# matrix-postman
Public mirror of my (incomplete) [Postman](https://www.postman.com/) collection of various API endpoints for [Matrix](https://matrix.org/)

## Public collection

<https://www.postman.com/twilightsparkle/workspace/matrix-public/overview>

## Run in Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/:15545576-c8b13be2-9a67-41f8-a630-cba170231ddb)

## Matrix Spec and Admin API documentation
https://spec.matrix.org/unstable/  
https://matrix-org.github.io/synapse/latest/usage/administration/admin_api/index.html

## Basic setup
- Add `assetsURL = https://example.com/postman_assets/` as a Global environment variable
- Edit the matrix.org Environment or Duplicate it
- Set the URL (the domain in your Matrix IDs) and the Delegated URL (where clients talk to your server)
- Set the User Token or Admin Token, or use the Login Request under `Client-Server` or `Admin/Auth`

See the documentation on the Matrix Collection for sample JavaScript and Stylesheets files needed for some visualizations.

## Disclaimer

This workspace/collection is under constant development, expect some things to be broken.
