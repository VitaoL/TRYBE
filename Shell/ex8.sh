#!/bin/bash


for var in $@
do
if [ -d $var ]
    then
        echo 'É um diretorio'
    elif [ -f $var ]
        then echo 'é um arquivo'
    else
        echo 'outro tipo de arquivo'
fi
listagem=`ls -l $@`

 echo $listagem
done

