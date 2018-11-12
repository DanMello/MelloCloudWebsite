#!/bin/bash

echo "Generating pdf images from pdf files in assets/pdf directory"
mogrify -format png -path public/assets/pdf/pdfImages -density 150 public/assets/pdf/*.pdf -quality 90
echo "Generating thumbnails from pdf files in assets/pdf directory"
mogrify -format png -thumbnail x450 -path public/assets/pdf/pdfPreviews -density 150 public/assets/pdf/*.pdf[0]