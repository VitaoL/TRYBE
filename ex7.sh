#!/bin/bash



if [ -d $0 ]
    then
        echo 'É um diretorio'
    elif [ -f $0 ]
        then echo 'é um arquivo'
    else
        echo 'outro tipo de arquivo'
fi
listagem=`ls -l $way`

 echo $listagem