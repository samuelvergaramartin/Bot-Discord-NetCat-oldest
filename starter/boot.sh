#!/bin/bash
cd ..
node .
cd sistema/sockets
echo "OFF" > socket-status.txt
exit 0