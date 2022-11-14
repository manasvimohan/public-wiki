set nocompatible
filetype plugin on
syntax on

set spell spelllang=en_us
set nu
set ai
set tabstop=4
set ls=2
set autoindent
"set relativenumber

call plug#begin()

Plug 'vimwiki/vimwiki'
Plug 'dracula/vim', { 'as': 'dracula' }

call plug#end()

"""" VimWiki
" let g:vimwiki_list = [{'path': '~/vimwiki/','syntax': 'markdown', 'ext': '.md'}]
let g:vimwiki_list = [{'path': '~/00-WorkSpace/my-personal-wiki/','syntax': 'markdown', 'ext': '.md'}]


"""" Themes https://vimcolorschemes.com/
colorscheme dracula

"""" Shortcuts

