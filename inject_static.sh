#!/bin/bash

# injecting static files into the dist container allows us to do better SEO performance
# and add additional third party plugins

cp ./static/* ./dist/client/;
