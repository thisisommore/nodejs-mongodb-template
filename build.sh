if [ "$ENVIRONMENT" == "PROD" ]
then
    docker build -t nodeapp .
else
    docker build -t nodeapp -f dockerfile.dev .
fi