# Overall Workflow
This document describes how I can have my development environment setup to ensure fast and reliable development

NOTE: The flow does not work in case docker-in-docker cases. Like in hyperledger fabric, it kind of fails because it depends on docker constructions and a container in container kind of is not recommended, though can be done.

For that, we need virtual machines to create complete machines for each project, which is kind of stupid to me.

Proxmox for a central unit I am considering.

# Logic Map
Proxmox can also be used at the top Level on a server spec PC

OS - Fedora Silverblue (HOST)
    ostree to manage OS images
        rpm-ostree to manage global setups in each OS image
            Multiple Linux containers using toolbox/ podman (fedora or ubuntu or arch etc)
                Master Folder with projects and wikis
                    dockerfile and compose for each project and various services with networks
                    docker images commited to dockerhub/ other container registries and github packages
                Each project commited to github

# The Flow
## OS Level (HOST)
Setup fedroa silverblue as needed
Make various commits and branches if needed with ostree
Upload to remote (learn to do so)
Setup git and github for all projects and wikis on host
Back the data up on google/ usb/ github etc

## OS container level
Spin up a linux containers of choice, as per the work and support on the internet
Work on your projects through these containers
Copy from host to container or vice-verse
Take backups of the OS containers on google/ usb/ hardist/ dropbox etc
This enables me to track and run all my projects and files from all devices instantly
Remote SSH into these containers (learn to do).
Guacomoauli can be used to access them as well, if UI needed to work.

## Project Level
Make a project.
Make a readme and wiki.
Make images for each service using dockerfile
Connect each image with docker-compose on a network and shared volumes if needed
    Learn Networks - Host to container AND Container to Container
    Learn Volumes  - Host to container AND Container to Container
Push them on the github

## App Level
Make a backend
Make a database (local or remote or headless like sanity)
Make a frontend
    Web version with javascript/ react etc
    Mobile version with ionic/ react-native/ cordova etc
    Desktop version with tauri/ electron/ eel etc
    CLI version too

Each packaged by flatpak or other formats, based on dockerfiles etc
