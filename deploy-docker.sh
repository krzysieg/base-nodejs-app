#!/bin/bash

source ./deploy-variables

if [ -z "$DOCKER_AUTH" ]
then
    echo "Docker auth is required."
    exit 1
fi

mkdir -p $HOME/.docker || {
    echo "Error while creating docker credentials directory."
    exit 2
}

cat "$DOCKER_AUTH" > $HOME/.docker/config.json || {
    echo "Error while creating docker auth file."
    exit 3
}

docker network inspect $NETWORK_NAME > /dev/null 2>&1 || docker network create $NETWORK_NAME || {
    echo "Error while creating network."
    exit 4
}

docker image pull $IMAGE_NAME || {
    echo "Error while pulling image."
    exit 5
}

docker container rm -f $CONTAINER_NAME > /dev/null 2>&1 || {
    echo "Error while removing existing container."
    exit 6
}

bash -c "docker run -d \
        --restart always \
        --name $CONTAINER_NAME \
        --network $NETWORK_NAME \
        -e NODE_ENV='production' \
        $IMAGE_NAME" || {
    echo "Error while running container."
    exit 7
}