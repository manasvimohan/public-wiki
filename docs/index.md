# Contents

- [The wiki management flow](#The wiki management flow)
- [Important Daily](#Important Daily)
- [Main Areas](#Main Areas)
- [Other](#Other)

# The wiki management flow
1. For a parent topic, create a link in the "Main Areas" section with a folder name. Example - [Some Parent Topic] (./some-parent-topic/index.md)
2. Even the sub topics in the parent can follow the above format. 
3. Manage your tasks and work in the "Work-Management" Section.

# Important Daily
* [Tasks](Tasks.md)
* [Trading Notes](Trading_Notes.md)

# Main Areas
* [Work-Management](./Work-Management/index.md)
* [Certifications-and-Learning](./Certifications-and-Learning/index.md)
* [Interviews](./interviews/index.md)

# Other
* [Fedora SilverBlue](Fedora_Silveblue_Setup.md)
* [Terminal_Related](Terminal_Related.md)
* [Cool Resources](Cool-Resources.md)
* [Cool Articles](Cool-Articles.md)

# VimWiki Setup
1. touch .vimrc
2. Install vim-plug --> curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
3. In the terminal --> vim -es -u vimrc -i NONE -c "PlugInstall" -c "qa"
4. In the .vimrc --> Plug 'vimwiki/vimwiki' --> :PlugInstall
5. Clone your wiki --> gh repo clone manasvimohan/my-personal-wiki # Ensure to install gh from github
6. In the .vimrc add the location of the cloned wiki. Refer [This Document](Terminal_Related.md) or vimwiki link below

## Links
VimPlug --> https://github.com/junegunn/vim-plug
VimWiki --> https://github.com/vimwiki/vimwiki
ColorSchemes --> https://vimcolorschemes.com/

