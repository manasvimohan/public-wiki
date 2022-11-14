# Contents

- [CSS](#CSS)
- [Display](#Display)
- [Flexbox](#Flexbox)
    - [Container properties](#Flexbox#Container properties)
    - [Items properties](#Flexbox#Items properties)
- [Grid](#Grid)
    - [Container](#Grid#Container)
    - [Items](#Grid#Items)
- [Media Queries](#Media Queries)

# CSS

# Display
display: block means fit the width                                                  --> Div is default display: block;
display: inline means putting itmes inline. Height and width can not be used here   --> Span is default display: inline;
display: inline-block is inline but height and width can be adjusted                --> img is fedault display: inline-block;
Simply Remove item    --> display: none

# Flexbox
Link --> https://www.youtube.com/watch?v=fYq5PXgSsbE

## Container properties
Becomes columns                                                 --> display: flex;
Main axis horizontal and cross axis vertical

Align items at main axis (horizontally if case of display: flex)
Push items to left                                              --> justify-content: flex-start;
Push items to center                                            --> justify-content: center;
Push items to center, fit width with spaces between items       --> justify-content: space-between;
Push items to center, fit width with spaces all around items    --> justify-content: space-around;

Align Items at cross axis (vertically in case of display: flex)
Items grow and fit the row                                      --> align-items: stretch;
Items arranged without effecting size                           --> align-items: flex-start;
Items aligned to center vertically without effecting size       --> align-items: center;

Wraps all items to next row instead of shrinking to fit width   --> flex-wrap: wrap;
When flex-wrap: wrap used, Will align vertically at center      --> align-content: center;
When flex-wrap: wrap used, Will align vertically at top         --> align-content: flex-start;
When flex-wrap: wrap used, Will align vertically at bottom      --> align-content: flex-end;
When flex-wrap: wrap used, Will align vertically at bottom      --> align-content: space-between;

Becomes rows and main axis is now vertical and cross is horizontal  --> flex-direction: column;
Now all above justify content and align items is reversed essentially because of main and cross axis flipped

## Items properties

These are applied to items individually inside the container

shorthand --> flex: _grow _shrink _basis 
eg flex: 1 0 2px; All below combined in one.

Prevent shrinking of item           --> flex-shrink: 0;
Fill items to remaining space       --> flex-grow: 1;
If one item is given grow of 1 and other 2, then the remaining space will be divided among items appropriate ratio
Note that the actual item with 2 will not be double size to item with 1. 
To make sure exact for above        --> flex-basis: 0;

Individually align items and override the flex alignment --> align-self: center; (flex-end flex-start etc)

Ordering of items (not recommended as tabs key will jump differently in the html also screen readers dont work well) --> order: 1; (use 2, 3 etc for each item)
This only changed ordeing due to css, but screenreaders, keyboard tabs still refer the html only and messes things up

# Grid
Link --> https://www.youtube.com/watch?v=9zBsdzdE4sM

It is 2d version of flexbox.

## Container
display: grid;
Two columns with 200px 100px width  --> grid-template-columns: 200px 100px; 
Two columns with fractional width   --> grid-template-columns: 1fr 2fr;
5 columns with fractional width     --> grid-template-columns: repeat(5,1fr);
Make all rows 250px long            --> grid-auto-rows: 250px;
To set first row to 150px           --> grid-template-rows: 150px; # Kind of strange, dig into it more
Empty item to be 150px and filled item to stretch out to fill row          
                                    --> grid-auto-rows: minmax(150px,auto);
Adjust gaps between items           --> grid-row-gap and grid-column-gap OR grid-gap shorthand can be used

Areas method:
Pretty cool, just write the names of items the number of times and spaces that it should take, and then assign those names in the item to form a layopout.

.container
grid-template-areas:
    "header header"
    "sidebar content"
    "sidebar content"

.item1 --> grid-area: header;
.item2 --> grid-area: sidebar; etc etc

## Items

Start item at 1 and go till 3; essentially filling up 2 columns
grid-column-start: 1;
grid-column-end: 3; (or -1 to span till the end)
grid-column: 1 / -1 (Shorthand, span by starting at col 1 and spanning till the end)

grid-column: span 3 (This way span to 3 columns)

grid-row-start, grid-row-end and grid-row works the same way, just wrt rows

## Alignments

### Container
Align horizontally  --> justify-content: start end center stretch space-around etc
Align vertically    --> align-content: start end center stretch space-around etc

### Items
Align horizontally, default is stretch          --> justify-content: start end center stretch space-around etc
Align vertically, default is stretch            --> align-content: start end center stretch space-around etc

Override container properties using per item    --> align-self: and justify-self: 

# Media Queries
Link --> https://www.youtube.com/watch?v=yU7jJ3NbPdA

@media screen
@media print
@media speech
@media all

@media all and (something){} OR @media (){} This means "all and" by default

@media all and (max-width: 500px){     /* Use , for "OR" */
    body{}
    div{} .... any property
}

@media (orientation: landscape) {}
@media (orientation: potrait) {}

Using AND --> @media (orientation: landscape) and (max-width: 500px) {}
Using OR  --> @media (orientation: landscape), (max-width: 500px) {}
