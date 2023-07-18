#!/bin/sh
docker pull '||registry-source||/||image-source||:||version||' && \
docker tag '||registry-source||/||image-source||:||version||' '||registry||/||image||:||version||' && \
docker push '||registry||/||image||:||version||'