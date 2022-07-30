#!/bin/bash
echo "ON" > socket-status.txt
estado=`cat socket-status.txt`;
encendido="ON";
cd ../../starter
./boot.sh &
cd ../sistema/sockets
while [ $estado == $encendido ]; do
estado=`cat socket-status.txt`;
echo "OK" > bucle.txt
sleep 2s

done;