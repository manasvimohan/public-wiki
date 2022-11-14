# Docker and Containers

Note: I am using podman instead of docker, and podman does not have podman-compose, which needs to be installed. 
[Link to podman-compose](https://github.com/containers/podman-compose)

Essentially all podmanc command can be replaced with docker if docker is used

# About dockerfile and docker-compose

[Good Tutorial on dockerfile and docker-compose for mern apps](https://www.bezkoder.com/docker-mern/)

dockerfile     <-- with this we build images, based on the way we want
docker-compose <-- With this we spin up a combination of images with:
                   networks for letting containers talk to each other 
                   and volumes which are shared on the host file with containers

Format for building from dockerfile
Build          --> podman build -t imageName:tag -f dockerFileLocation . # The "." is there 
Enter terminal --> podman run -it imageName:tag

Format for composing docker-compose
Start --> podman-compose -f docker-composeLocation up             # docker compose up
Stop  --> podman-compose -f docker-composeLocation down --volumes # docker compose down

# Mounting host drive to container

podman run -it --volume locationOnHost:locationOnContainer containerName:tag

# Backing up and snapshots
https://www.geeksforgeeks.org/backing-up-a-docker-container/

podman commit -p containerId newImageName   <-- This will take snapshot of current state and make an image
podman save -o ./my-backup.tar newImageName <-- This will save a tar file of the backed up image

podman load --input ./newImageName.tar      <-- To load the image back

## Push to docker hub if needed
sudo docker login
sudo docker push newImageName:latest

# Copy files from container to the host

podman cp <containerId>:/file/path/within/container /host/path/target

# Publishing images
[Publish files to docker and github package](https://docs.github.com/en/actions/publishing-packages/publishing-docker-images)


