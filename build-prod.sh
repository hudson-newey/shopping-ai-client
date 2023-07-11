#!/bin/bash

# there have been long periods of time where the client was out of action
# because the environment was not updated to the production environment
# therefore, we should check to see if the environment is production before building

function build {
  ng build --configuration=production;
}

if grep -Fxq "apiUrl: 'https://api.onlineshopgpt.com/api'," ./src/environment.rs; then
  build;
else
  echo "Your environment is not set to the default production environment";

  read -p "Continue? (Y/N): " confirm && [[ $confirm == [yY] || $confirm == [yY][eE][sS] ]] || exit 1;

  build;
fi
