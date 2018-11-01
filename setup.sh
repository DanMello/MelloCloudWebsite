#!/bin/bash

echo "Creating remote public directory for mellocloud"
ssh deploy@10.0.0.201 << 'ENDSSH'
mkdir -p mellocloud/public
ENDSSH