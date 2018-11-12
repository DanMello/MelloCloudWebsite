#!/bin/bash

set -e
echo "Creating production build."
npm run build
echo "Sending production build to remote server."
scp -r dist/. deploy@10.0.0.201:/home/deploy/mellocloud/public