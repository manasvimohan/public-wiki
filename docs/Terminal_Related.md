# Contents

- [General useful stuff](#General useful stuff)
- [FZF and searching](#FZF and searching)
- [Vim and vimwiki](#Vim and vimwiki)
    - [FZF](#Vim and vimwiki#FZF)
    - [NERDTree](#Vim and vimwiki#NERDTree)
    - [General](#Vim and vimwiki#General)
    - [Vimwiki specific](#Vim and vimwiki#Vimwiki specific)
    - [MKdocs for making a website version](#Vim and vimwiki#MKdocs for making a website version)

# General useful stuff

Install nvm using this link --> https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/
ASCII art in bash --> https://www.tecmint.com/create-ascii-text-banners-in-linux-terminal/

Rename Files   --> rename 'existingString' 'replacementWith' *.md -a # applies to only .md file coz od *.md

ctrl + a <-- Takes cursor to line start
ctrl + e <-- Takes cursor to line end
ctrl + z <-- Takes the current active process in terminal to the background
fg       <-- Brings back the background process to the foreground (process which was sent back using ctrl + z)

cd ~     <-- Jump to home folder
cd -     <-- Jump to previous folder
cd $dirprev <-- same as cd -
cd $dirnext <-- Not Sure, check it out
cd ..    <-- Jump to outer folder


comman | column  <-- Pipe any file or command to column and output would be two columns eg ls | column

pushd    <-- pushd folder/name/here --> put in any number of paths
popd     <-- popd --> repeat popd to open the pushd items one by one

# FZF and searching
fzf      <-- Github   --> Link https://github.com/junegunn/fzf
             Tutorial --> https://www.youtube.com/watch?v=qgG5Jhi_Els
    
    fzf                                 <-- Then type any file name to search
    fzf -m                              <-- Select multiple from result, press tab or shift-tab to select multiple
    nvim $(fzf)                         <-- Open the selection in nvim
    cd $(find . -type d -print | fzf)   <-- cd into a folder in current directory
    cd $(find ../ -type d -print | fzf) <-- cd into a folder into outer directory directory
    fzf -m | xargs -I{} nvim {}         <-- Select multiple and open in vim one by one
    nvim (find . -type f -print | fzf -m)   # Search and open folder in current folder
    nvim -o (fzf -m)                        # Open all files at once GLOBALLY
    cd (find . -type d -print | fzf)        #Search and open folder
    
Start with ' for exact match
Spaces between terms: Example 
    folder something  <-- this find in folder name something and files with .md at the end
    <space> something <-- Inside folders
    <space><space> something <-- inside folder of folder

# Vim and vimwiki

LINK: https://github.com/~/vimwiki.txt)
Cheat sheet Link: http://thedarnedestthing.com/~ki%20cheatsheet

## FZF
A plugin called FZF seems very cool --> https://github.com/junegunn/fzf/blob/master/README-VIM.md
Type :FZF and type, then you will get live search to what you searching and then with arrow you can select files and open

## NERDTree
install using --> Plug 'preservim/nerdtree' 
To always open nerdtree in current file dirctory, set autochdir in config file

Open nerdtree                              	--> :NERDTree # use q to exit and ? for help
To exit nerdtree --> q
To go back to nerdtree after opening file 	--> ctrl + w + w

## General

:colorscheme [space] [Ctrl+d]			   	--> select a color scheme #https://phoenixnap.com/kb/vim-color-schemes
								
Unwrap lines                                --> :set wrap
Toggle Wrapping lines						--> :set wrap!

Added shortcut
:nnoremap <S-q> :set wrap!<CR>
:nnoremap <S-w> :set wrap<CR>

Find your vimrc config file by             --> :echo $MYVIMRC
Run any shell command from within nvim     --> :! command
Run shell command in a terminal for neovim --> !terminal 
Run shell command in a terminal for vim    --> !shell 

Enable Spell Check                         --> :set spell spelllang=en_us
Jump to next spelling error                --> ]s
Jump to previous spelling error            --> [s
Correct the spelling                       --> z=

Undu --> u
Redo --> ctrl+r

In a file, if there is a location return, like in the imports for most projects, you can jump into that file and come back by:
    Put cursor on location
    Press --> gf
    To go back, press --> ctrl+o

Select         --> v and the cursor to move
Select Line    --> V
Copy selection --> y (yy for copy line, if slection was not done)
Cut selection  --> d (dd for cut line, if selection was not done)
Paste          --> p
				
Copy to clipboard --> "+ then yy or dd etc ... # In some cases "* is used, but in neovim fedora, "+ is used [checklink](https://stackoverflow.com/questions/3961859/how-to-copy-to-clipboard-in-vim)

Set bookmark at any line --> m and then (a-z or A-Z)
Access bookmark          --> :marks
Jump to bookmark         --> ` (a-z or A-Z)
Line jumping             --> number, then j for down, k for up eg 5k takes 5 lines up, 10j takes 10 lines down

## Vimwiki specific
1. Create Table of contents in any specific wiki from Headings --> :VimwikiTOC
2. In the index page, create links of all the md files in that folder or wiki --> :VimwikiGenerateLinks
3. Create links in Diary Index Page --> :VimwikiDiaryGenerateLinks
4. \ww to open vimviki
5. \ws to select wiki of choice
6. \w\w to open todays diary entry
7. \wi to open diary index page
8. \w\i to Build Diary Links
9. z= on any misspelled word to open the dictonery
10. Find and replace a complete word in a file. --> :%s/\<WORD\>/REPLACEWOD/

## MKdocs for making a website version

Note that MDwiki is different from this!
Prefer to use 11ty or Jekyll or Hugo etc

Link - https://www.mkdocs.org/getting-started/

pip install mkdocs

mkdocs new my-project
cd my-project
nvim mkdocs.yml

```yaml
# mkdocs.yml

site_name: MkLorum
site_url: https://example.com/
nav:
    - Home: index.md
    - About: about.md
theme: readthedocs
```

mkdocs serve
mkdocs build

mkdocs --help
mkdocs build --help

