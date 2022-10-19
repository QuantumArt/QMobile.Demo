#!/bin/sh
docker pull '||registry-source||/dpc-qmobile-demo:||version||' && \
docker tag '||registry-source||/dpc-qmobile-demo:||version||' '||registry||/dpc-qmobile-demo:||version||' && \
docker push '||registry||/dpc-qmobile-demo:||version||'