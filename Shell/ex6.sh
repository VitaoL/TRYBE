#!/bin/bash

echo 'Informe o  dir ou arq:'
read way

if [ -d $way ]
    then
        echo 'É um diretorio'
    elif [ -f $way ]
        then echo 'é um arquivo'
    else
        echo 'outro tipo de arquivo'
fi
 listagem=`ls -l $way`

 echo $listagem
