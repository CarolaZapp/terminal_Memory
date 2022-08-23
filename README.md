# Terminal Memory
## Memory - the classic game for training short-term memory.
###
## Play Memory at the terminal - the other way ...
Memory without clicking and turning the playing card...
How is that possible ...

Here is an attempt ...

#
### Target of the game
The aim of the game is to find all the pairs in as few moves as possible.

#
### Game Level:
#### There are 4 levels available:,
##### Level 1 (L1) with 6 cards and 3 pairs to find
##### Level 2 (L2) with 12 cards and 6 pairs to find
##### Level 3 (L3) with 18 cards and 9 pairs to find
##### Level 4 (L4) with 24 cards and 12 pairs to find

#
### Game Cover:
#### There are 6 cover available:,
##### Number 1: Cover Full Color
##### Number 2: Cover Rainbow
##### Number 3: Cover Line 1
##### Number 4: Cover Line 2
##### Number 5: Cover Line 3
##### Number 6: Cover Hearts

### !!!! At this stage not all cover available for all level !

#
### Work In Process ! 
#### => therefore no public version available

#### To install and use the game following steps must be done:
1. Copy the code at github and `git clone` the adress at your terminal
2. Choose `cd` the file `terminal_Memory/`
3. Open, for example Visual Studio Code, with `code .`
4. Initialise npm in your project folder with `npm init -y`.
5. Install the npm packages `prompt-sync` in the project folder with `npm install prompt-sync`.
   https://github.com/heapwolf/prompt-sync#readme
6. Add the property `"type": "module"` to package.json. For example
  {
    "type": "module",
    "name": "prompt-chalk-test",
    "version": "1.0.0",
##
##### This game based on :
javascript, node as well as packages:
* https://github.com/heapwolf/prompt-sync#readme
=> used for prompt action
* https://www.npmjs.com/package/gradient-string
=> used for gradient rainbow color
* https://github.com/patorjk/figlet.js#readme 
=> lettering and inspiration
* https://github.com/sindresorhus/cli-spinners
=> pair items

made with ❤️ and passion by Carola Zapp, 08.2022

