#!/bin/bash

set -e
echo "Creating production build."
npm run build

echo "Sending files to server."
rsync -e "ssh -i /home/dan/Production/server-1/keys/deploy-10.0.0.201/deploykey" --update -raz --progress dist/. deploy@10.0.0.201:/home/deploy/mellocloud/public
