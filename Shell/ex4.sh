#!/bin/bash
echo 'Digite algum arquivo para sabermos se existe caminho ou não'
read arq
if  [ -e $arq ] 
    then
        echo 'O caminho ' $arq ' está habilitado!'      
        if [ -w $arq ]
            then    
                echo 'Você tem permissão para editar' $arq
                 else
                    echo 'Você não tem autoridade para editar' $arq
        fi
   
fi
