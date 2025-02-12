#!/bin/bash

TEMPLATE=md.css
TEMPLATE=pandoc.css
TEMPLATE=https://gsyc.urjc.es/~mortuno/pandoc.css

# -s  standalone document
# -S typographically smart

#pandoc $1 -s --highlight-style tango -o $1.htm

#pandoc $1 -s  -o $1.rtf

if test $# -eq 0 || test $# -gt 1
then
    echo "Es necesario indicar un argumento (y solo uno)" >&2
    exit
fi


filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"

pandoc -s  --toc -c ${TEMPLATE} $1 -o ${filename}.html