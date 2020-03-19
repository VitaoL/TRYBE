#!/bin/bash

arquivos=`ls -la|grep -e "^-"|wc -l`


if [ -f $1 ]
    then
        echo 'O argurmento '$1'não é um diretorio!'
        else
            echo 'O '$1' tem '$arquivos' arquivos'
fi

