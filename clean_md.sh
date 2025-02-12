#!/bin/bash
# -s standalone document
# -S typographically smart

if test $# -eq 0 || test $# -gt 1
then
    echo "Es necesario indicar un argumento (y solo uno)" >&2
    exit
fi

filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"

if test $extension != md 
then
    echo "Es necesario que la extensiÃ³n sea .md" >&2
    exit
fi

# -f gfm    la entrada es GitHub flavored markdown
# -t gfm    la salida tambiÃ©n

tmp_name=/tmp/${filename}.$$.md
pandoc -f gfm  --columns=65  -t gfm -s  $1 -o ${tmp_name}

# do not scape underscores
perl -p -i -e "s/\\\_/_/g" $tmp_name   

mv ${tmp_name} $1
