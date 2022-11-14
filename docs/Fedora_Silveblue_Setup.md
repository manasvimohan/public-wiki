# Contents

- [Silverblue essentials](#Silverblue essentials)
    - [Git and Github](#Silverblue essentials#Git and Github)
        - [Using gh which is Github CLI](#Silverblue essentials#Git and Github#Using gh which is Github CLI)
            - [Repo creation cloning and forking](#Silverblue essentials#Git and Github#Using gh which is Github CLI#Repo creation cloning and forking)
            - [Github GIST](#Silverblue essentials#Git and Github#Using gh which is Github CLI#Github GIST)
            - [Issues](#Silverblue essentials#Git and Github#Using gh which is Github CLI#Issues)
    - [Screenkey](#Silverblue essentials#Screenkey)
- [Terminal Setup](#Terminal Setup)
    - [Ranger](#Terminal Setup#Ranger)
        - [Change default text editor](#Terminal Setup#Ranger#Change default text editor)
        - [Ranger Commands](#Terminal Setup#Ranger#Ranger Commands)
        - [Configuring terminal with fish](#Terminal Setup#Ranger#Configuring terminal with fish)
    - [Scripts in Fish](#Terminal Setup#Scripts in Fish)
        - [Issues](#Terminal Setup#Scripts in Fish#Issues)
        - [Aliases in fish](#Terminal Setup#Scripts in Fish#Aliases in fish)
        - [Links](#Terminal Setup#Scripts in Fish#Links)
        - [Installation](#Terminal Setup#Scripts in Fish#Installation)
    - [Neovim and vimviki and plug](#Terminal Setup#Neovim and vimviki and plug)
    - [Tmux split screen and session management](#Terminal Setup#Tmux split screen and session management)
        - [Configigure FISH in tmux](#Terminal Setup#Tmux split screen and session management#Configigure FISH in tmux)
        - [Tmux commands](#Terminal Setup#Tmux split screen and session management#Tmux commands)
- [Tor setup in linux](#Tor setup in linux)
- [Upload to google drive from terminal](#Upload to google drive from terminal)
- [Python](#Python)
- [NodeJS issue](#NodeJS issue)
    - [Installation](#NodeJS issue#Installation)
    - [Installing different versions](#NodeJS issue#Installing different versions)
    - [Running different versions](#NodeJS issue#Running different versions)
    - [Check node versions installed on os](#NodeJS issue#Check node versions installed on os)
    - [Setting Alias](#NodeJS issue#Setting Alias)
    - [Single line Commenting in various file formats](#NodeJS issue#Single line Commenting in various file formats)
- [Install any website as app on,linux using epiphany browser, like notion whatsapp etc](#Install any website as app on,linux using epiphany browser, like notion whatsapp etc)
- [Terminal based web explorer](#Terminal based web explorer)
- [Running custom scripts in nautilus file explorer linux](#Running custom scripts in nautilus file explorer linux)
- [Fedora filemanager is nautilus and terminal is gnome-terminal ...... use them for shortcuts](#Fedora filemanager is nautilus and terminal is gnome-terminal ...... use them for shortcuts)
- [Cool linux effects](#Cool linux effects)
- [Fun](#Fun)
- [Containers with Distrobox](#Containers with Distrobox)
    - [Distrobox](#Containers with Distrobox#Distrobox)
        - [Basic usage](#Containers with Distrobox#Distrobox#Basic usage)
    - [Podman](#Containers with Distrobox#Podman)
    - [Toolbox](#Containers with Distrobox#Toolbox)
        - [If you wish to make a container from a docker image](#Containers with Distrobox#Toolbox#If you wish to make a container from a docker image)
    - [Terminal launching different containters](#Containers with Distrobox#Terminal launching different containters)

# Silverblue essentials

[podman podman-compose issue in fedora silverblue 36 issue. Below solves it](https://github.com/containers/podman/issues/13396)
rpm-ostree install containernetworking-plugins # Necceary for podman and podman-compose to work properly in version 36 of silverblue fedora

[CheatSheet for Silverblue](https://docs.fedoraproject.org/en-US/fedora-silverblue/_attachments/silverblue-cheatsheet.pdf)

rpm-ostree install git wget curl fish tmux fzf gh htop neofetch neovim powerline-fonts
rpm-ostree install screenkey scrot sox terminator kitty tor xclip

To prevent issues with python, install below
rpm-ostree install python3-devel python3-tkinter
rpm-ostree install go clojure rust cargo

[Link for Tauri Pre-Requisites](https://tauri.app/v1/guides/getting-started/prerequisites/)
rpm-ostree install dbus-devel openssl-devel glib2-devel # This is needed by tauri app development for RUST backend

rpm-ostree install git wget curl yum ruby ruby-devel
pip install ranger-fm # To install terminal based file explorer --> https://www.linuxfordevices.com/tutorials/linux/ranger-file-manager
echo "set preview_images true" >> ~/.config/ranger/rc.conf
echo "set preview_images false" >> ~/.config/ranger/rc.conf
--> The above makes viewing images in ranger --> https://www.baeldung.com/linux/view-images-from-terminal

npm install --global yarn
rpm-ostree install yum

## Java
JDK - https://docs.fedoraproject.org/en-US/quick-docs/installing-java/
SE  - https://www.oracle.com/java/technologies/downloads/

dnf search openjdk
sudo dnf install java-latest-openjdk-devel.x86_64

Intellij Editor
Instruction - https://www.jetbrains.com/help/idea/installation-guide.html#67c5a40d
Download - https://www.jetbrains.com/idea/download/#section=linux


## Git and Github

1. ssh-keygen -t rsa -b 4096 -C "manasvimsharma@email.com"
2. ssh-add ~/.ssh/id_rsa
3. cat ~/.ssh/id_rsa.pub
4. Now go to github.com > settings > SSH and GPG Keys > New SSH Key > paste point 3 output into "Key" section.
5. Create a new repositor:
    1. You will get an SSH link to repo similar to -> git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git 
6. Adding Project to the created repository:
    1. Make a folder and create any project there
    2. cd into the project folder
    3. git init
    4. git add .
    5. git commit -m "first commit"
    6. git branch -M master
    7. Ensure remote --> git remote show origin
    8. git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git
    9. git push -u origin master

All done setting up github and repo

### Using gh which is Github CLI
https://www.youtube.com/watch?v=BRAG1Kj4-Ss&t=628s
https://cli.github.com/manual/

type gh and read the help page and man page

#### Repo creation cloning and forking
1. LogIN            --> gh auth login
2. Check protocol   --> gh config get git_protocol
3. Set protocol     --> gh config set git_protocol ssh
4. Set editor       --> gh config set editor "nvim --wait"
5. Check editor     --> gh config get editor
6. Create Repo      --> gh repo create
    1. You can create a brand new one and follow instructions
    2. You can add the current git init folder as well
7. Clone a repo     --> gh repo clone expressjs/express <-- This clones but set origin to the original owner
8. Update the origin --> gh repo-fork <-- after you cd into clonned repo, Now the clone is in our repo
9. Fork a repo      --> gh repo fork expressjs/express <-- Now this way you have your copy. DO THIS ALWAYS!!

#### Github GIST
1. gh gist create <filename> --public
2. gh gist create <filename>
3. gh gist create -      <--- Wrtie anything in command line and then ctrl-t to submit gist (not working for me in fish, cant stop it)
4. gh gist list/edit/delete etc etc

#### Issues
1. gh issue create

## Screenkey
rpm-ostree install screenkey

screenkey --show-settings
pkill -9 screenkey   # Stop it
screenkey            # Start it. Or start from apps drawer


# Terminal Setup
In Silverblue -->
At top level we have host and container (toolbox distrobox podman) terminals.
Each Container has its own terminal.
Now we can use terminal emulators like kitty terminator, on default shell.
We can then use default shell, or install fish.
Then we have tmux for terminal session and window management.
In the tmux.config, we need to tell which default shell to use. So that tmux starts in that, like fish or bash/shell.

So how it all binds up:
1. We make a toolbox/ distrobox
2. We install a base shell like fish OR just go with an emulator like kitty.
3. Then we install tmux, ranger etc.
4. Now in tmux.config, we tell that which shell to use, fish or shell.

## Ranger
Link --> https://unix.stackexchange.com/questions/367452/how-to-change-the-default-text-editor-in-ranger

pip install ranger-fm
Get all ranger config files --> ranger --copy-config=all

### Change default text editor
Open nvim rifle.conf # Get location from above command
Replace in 2 lines, $EDITOR with nvim or vim or gedit --> 
label editor = $EDITOR -- "$@" with 
label editor, ext xml|json|csv|tex|py|pl|rb|js|sh|php = $EDITOR -- "$@"
Above we set nvim as editor, can select vim or gedit

### Ranger Commands

LINK -> https://manpages.org/ranger
s <-- open shell in the current folder
q <-- close/ exit ranger
yy <-- copy selection
dd <-- cut selection
pp <-- paste into the selection
.d <-- Filter only directories
.f <-- Filter only files
.c <-- Remove filters
z then z <-- Filter by text search


Running Shell --> s and then tmux, opens tmux in selection
Sorting Files --> press o and the choose from list. Choose mtime with m, this shows latest edited on the top.
Hidden Files  --> press z and then choose h option

### Configuring terminal with fish
nvm does not work in fish, hence use fnm

NOTE --> in fish, to activate python venv use "source venv/bin/activate.fish" instead of "source venv/bin/activate" 

## Scripts in Fish

To run Fish Scripts add #!/bin/fish on top instead of #!/bin/bash

OR use fish myscript.sh instead of bash myscript.sh

In bash we use var="something"
In fish we use set var "something"

### Issues
nvm does not work --> https://askubuntu.com/questions/989605/command-not-found-when-using-nvm-in-fish-shell
Use fnm --> https://github.com/jorgebucaran/nvm.fish

fisher install jorgebucaran/nvm.fish

### Aliases in fish

LINK - https://stackoverflow.com/questions/2762994/define-an-alias-in-fish-shell

To make long commands short, we can define aliases

open --> nvim /var/home/silver/.config/fish/config.fish

```bash
# this is config.fish file

alias n="nvim"
alias lll="ls -lrt"
alias qq="flatpak run com.notepadqq.Notepadqq"
alias code="flatpak run com.visualstudio.code"
alias n="nvim"                                      # Opens nvim
alias nn="fzf -m | xargs -I{} nvim {}"              # Search and open file or files
alias nnn="n -o (fzf -m)"                           # Open all files at once
alias cdd="cd (find . -type d -print | fzf)"        # Search and open folder


Below are not needed, I wonder why I used them...??...
funcsave n
funcsave lll
funcsave qq
funcsave code
```
Now instead of using nvim, you can use n
Or instead of using ls -lrt, you can use lll

### Links
Main link - https://github.com/craftzdog/dotfiles-public
https://github.com/jorgebucaran/fisher
https://github.com/IlanCosman/tide

https://fedoramagazine.org/tuning-your-bash-or-zsh-shell-in-workstation-and-silverblue/    <--- Check it out more
https://fedoramagazine.org/fish-a-friendly-interactive-shell/

### Installation
rpm-ostree install fish

fish # This will run fish shell
fisher install jorgebucaran/nvm.fish <--- For NVM

curl -sL https://raw.githubusercontent.com/jorgebucaran/fisher/main/functions/fisher.fish | source && fisher install jorgebucaran/fisher

fisher list
fisher install ilancosman/tide@v5
tide configure

// Finally in the terminal, in the run command instead of shell, enter fish

>>> Make fish even more powerful
curl -L https://get.oh-my.fish | fish
rpm-ostree install powerline-fonts fontawesome-fonts
omf install bobthefish

// Some more omf installations to consider 
Link -> https://www.milanvit.net/post/my-ultimate-shell-setup-with-fish-shell-and-tmux/
omf install bobthefish # Theme
omf install aws        # AWS integration & command completion
omf install bass       # Allows running heavily Bash-dependant utilities, like nvm
omf install brew       # Integrate Homebrew paths
omf install colored-man-pages
omf install export     # Bring back Bash-like export command
omf install https://github.com/jhillyerd/plugin-git
omf install osx        # Finder/macOS integration and utilities
omf install wifi-password
omf install z          # Autojump implementation

Install Nerd Fonts

git clone --depth=1 https://github.com/ryanoasis/nerd-fonts ~/.nerd-fonts
cd .nerd-fonts 
sudo ./install.sh

## Neovim and vimviki and plug
rpm-ostree install neovim
mkdir -p .config/nvim/
cd .config/nvim/        # --> this is actually in /var/home/silver/.config/nvim/
nvim .config/nvim/init.vim

``` .config/nvim/init.vim
set nocompatible
filetype plugin on
syntax on

call plug#begin()

Plug 'vimwiki/vimwiki'

call plug#end()

let g:vimwiki_list = [{'path': '/path/to/my/wiki/',
                      \ 'syntax': 'markdown', 'ext': '.md'}]
```

:PlugInstall     <--- Run this in vim command to install vimviki

Links:
https://sudoedit.com/install-vimwiki-neovim/
https://github.com/junegunn/vim-plug#unix-linux

Might be useful --> https://dev.to/psiho/vimwiki-how-to-automate-wikis-per-project-folder-neovim-3k72
https://medium.com/weekly-webtips/vim-neovim-silverlight-ctags-make-up-an-awesome-editor-49f3980b575d
https://github.com/chipsenkbeil/vimwiki.nvim

## Tmux split screen and session management
LINK - https://fedoramagazine.org/use-tmux-more-powerful-terminal/
rpm-ostree install tmux

### Configigure FISH in tmux
find fish path --> which fish or command -s fish
touch ~/.tmux.conf

```.tmux.conf
set-option -g default-shell /usr/bin/fish
set-option -g default-command /usr/bin/fish
```

The above will run fish inside tmux!

To run tmux automatically on fish shell refer this link --> https://medium.com/@HazuliFidastian/run-tmux-automatically-on-fish-shell-2b62622661c7

### Tmux commands
Cheat sheet --> https://www.makeuseof.com/tag/cheat-sheet-tmux-commands-cheat-sheet/

Create and start a session called base
tmux new-session -d -s base
tmux attach-session -d -t base

List sessions
tmux list-sessions

Scroll in tmux         --> Ctrl+b, [ and then use arrow key. Once done, press q
Show Time              --> Ctrl+b, t

Horizontal split       --> Ctrl+b, “ 
Vertical split         --> Ctrl+b, %
Move in splits         --> Ctrl+b, arrow
Move by number         --> Ctrl+b, q        # Now you will see numbers on each split for 1 sec, type in the number to go to it

Create new window      --> Ctrl+b, c
Go to previous window  --> Ctrl+b, p
Go to next window      --> Ctrl+b, n
Go directly to window  --> Ctrl+b, (0-9 number)

Detach from session    --> Ctrl+b, d
List Sessions          --> tmux list-sessions # This is once we detach
Attach a session       --> tmux attach-session -t (session number or name)
Kill all sessions      --> tmux kill-session -a

Example Workflow:
1. Create multiple sessions
	tmux new-session -d -s work
	tmux new-session -d -s personal
	tmux new-session -d -s wiki
2. tmux attach-session -t work
	make splits, windows, setup etc then press Ctrl+b, d to detach
3. tmux attach-session -t personal
	Again do whatever and then then press Ctrl+b, d to detach
	
4. List Sessions
5. Kill Specific sessions --> tmux kill-session -t work
6. Kill all sessions --> tmux kill-session -a

# Tor setup in linux

LINK - https://www.geeksforgeeks.org/how-to-setup-proxychains-in-linux-without-any-errors/

service tor status 
rpm-ostree install tor
nano /etc/proxychains.conf

# Upload to google drive from terminal

LINK - https://towardsdatascience.com/uploading-files-to-google-drive-directly-from-the-terminal-using-curl-2b89db28bb06

# Python

install sudo dnf install python-devel
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt

# NodeJS issue

Some packages like truffle does not get installed on virtual container based OS or systems.
Need to find a way to install nodejs to some custom location, where me as a user will have folder access and all global installations can be done.

MAYBE USE NVM (Node Version Manager) which is similar to pyenv https://realpython.com/intro-to-pyenv/

Best option is to use toolbox based container to run anything.

NOTE###########TRY version v14.19.1 for truffle

## Installation
LINK - https://ostechnix.com/install-node-js-linux/

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

>Now exit and re-open terminal

command -v nvm

>output should be --> nvm

nvm use --delete-prefix v17.9.0 	# you might need to run

## Installing different versions
nvm ls-remote
nvm install node
nvm install v16.12.0
nvm install v14.19.1

## Running different versions
nvm use node v16.12.0
nvm install v14.19.1
nvm use node 						#Takes you to the latest version

## Check node versions installed on os
nvm list
node --version
npm -v

nvm uninstall <node_version>

npm cache clean --force

## Setting Alias
nvm alias default v14.19.1
nvm use default <-- Post setting alias, you can use

## Single line Commenting in various file formats
css                     -->   /* This way */
html                    -->   <!-- This way -->
js, json                -->   // This way
pytho, shell            -->   # This way
In html part in nextjs  --> {/* This way */}

# Install any website as app on,linux using epiphany browser, like notion whatsapp etc
https://www.tekbyte.net/install-notion-web-app-on-linux/
flatpak install flathub org.gnome.Epiphany

This did not work for me!!!

Install > google chrome
Install > https://flathub.org/apps/details/com.github.tchx84.Flatseal

Now give relevent access in flatseal to google chrome (will ask for following)
- ~/.local/share/applications
- ~/.local/share/icons

Use this link to control effects on linux > https://extensions.gnome.org/local/

# Terminal based web explorer
sudo apt-get install lynx

> lynx www.google.com

HAVE FUN! LOL

# Running custom scripts in nautilus file explorer linux

1. Go to 								--> cd ~/.local/share/nautilus/scripts/
2. Make your script 					--> nano helloworld.sh
3. Make all files in folder executable 	--> chmod u+x $(ls)
4. Reset Nautilus 						--> nautilus -q

In the script, at the top add: 
python 	--> #!/usr/bin/env python3
bash 	--> #!/bin/bash

# Fedora filemanager is nautilus and terminal is gnome-terminal ...... use them for shortcuts

# Cool linux effects 
https://fostips.com/effects-make-ubuntu-fedora-shine/

More edits on Fedora and Fedora SilverBlue
https://fedoramagazine.org/how-i-customize-fedora-silverblue-and-fedora-kinoite/

Make containers with toolbox
https://docs.fedoraproject.org/en-US/fedora-silverblue/toolbox/

# Fun
cal <-- shows calender in terminal
date <-- shows date and time in terminal

# Containers with Distrobox

## Distrobox

Make containers with distrobox
https://github.com/89luca89/distrobox
https://github.com/89luca89/distrobox/blob/main/docs/compatibility.md#containers-distros

https://fedoramagazine.org/run-distrobox-on-fedora-linux/

distrobox-create --name ubuntu-20 --image ubuntu:20.04
distrobox-create --name arch-distrobox --image archlinux:latest
distrobox-create --name debian8-distrobox --image debian:8
distrobox-create --name kali-distrobox --image docker.io/kalilinux/kali-rolling:latest

distrobox-enter --name ubuntu-20
distrobox-enter --name kali-distrobox


NOTE - For KALI LINUX run LINK - https://www.kali.org/docs/general-use/metapackages/
sudo apt update
sudo apt install -y kali-linux-default


### Basic usage

Create a new distrobox:
distrobox create -n test

Enter created distrobox:
distrobox enter test

Execute a command in a distrobox:
distrobox enter test -- command-to-execute

List running distroboxes:
distrobox list

Stop a running distrobox:
distrobox stop test

Remove a distrobox
distrobox rm test

## Podman
Run an fedora image --> podman run --rm -it fedora:35 bash
Run an fedora image and mount a folder --> podman run --rm -it -v ./folder_in_host/:/folder_in_host:Z fedora:35 bash

pip install podman-compose # Use this to have docker compose like functionality.

In fedora silverblue 35, things were ok with podman-compose; but with silverblue 36 we need to install:
rpm-ostree install containernetworking-plugins

## Toolbox
toolbox create
toolbox create --distro fedora --release f36
toolbox enter

dnf install gcc
pip3 install wheel

### If you wish to make a container from a docker image
toolbox create --image docker.io/ubuntu:latest
> Issue is that I am not able to open the terminal with this method

## Terminal launching different containters
Open terminal preference
add a profile and name it "something" > Go into command tab > tick box run a custom command instead of my shell > in the customer command put "distrobox-enter --name <nameoftheimage>". Now open settings > shortcuts and in the custom shortcut command type "gnome-terminal --profile=something"
