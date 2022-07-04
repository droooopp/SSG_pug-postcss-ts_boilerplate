#!/bin/sh

path=`pwd`
imgFiles=`find $path/src/temporary/img -type f -name "*png" -o -name "*jpg" -o -name "*jpeg"`

for imgFile in $imgFiles
do
  echo ${imgFile%.*}

  fileName=${imgFile%.*}
  cwebp $imgFile -o "${fileName}.webp"
done
