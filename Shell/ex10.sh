#!/bin/bash

find=`find *.png`
date=`date +%Y-%m-%d`


for name in $find
    do
        mv $name $date-$name
done


