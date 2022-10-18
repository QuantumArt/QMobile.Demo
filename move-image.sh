#!/bin/sh
docker pull '||registry-source||/dpc-qmoblie-demo:||version||' && \
docker tag '||registry-source||/dpc-qmoblie-demo:||version||' '||registry||/dpc-qmoblie-demo:||version||' && \
docker push '||registry||/dpc-qmoblie-demo:||version||'