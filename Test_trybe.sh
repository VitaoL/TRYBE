#!/bin/bash

#nome="Shell Script é demais"
#echo $nome
#PC=`hostname`
#read -p "Este script está radando no computador: $PC"

#arq="TRB.txt"

#if [ -e $arq ]
    #then    
        #echo "O caminho $arq esta habilitado!"
    #else
       # echo "O caminho não esta habilitado!"
     
#fi
#if [ -w $arq ]
    #then
        #echo "Voce tem permissao para editar $arq "
        
    #else
        #echo "Voce NAO foi autorizado a editar $arq"
#fi

#nome="shell script usando estrutura repetiçao for terminal"

#for palavras in $nome
#do
 #   echo $palavras
#done


for ARG in $@
do
if [ -d $ARG ]
    then 
        echo 'é diretorio'
        elif [ -f $ARG ]
          then
            echo 'é arquivo'
else
     echo 'outro tipo de arq'
fi
done


