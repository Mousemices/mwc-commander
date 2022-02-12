# mwc-commander
CLI for MWC(Mobile World Congress), that allows to access information from the MWC and other developers and technology professionals who will attend.

## Installation
There are 2 ways to use the CLI
### First
After clone the repositoy, run:
```bash
npm link
```
This create a symlink in the global folder, after that, we use our custom command `mwc`

### Second(Latest version is not published yet)
```bash
npm i mwc-commander -g
```
Install the command from npm directly.

## Command
  `mwc init|i`. Fetch MWC data and save into database(**THIS SHOULD BE YOUR FIRST COMMAND TO RUN**)
  ```bash
  $ mwc init
  // or
  $ mwc i
  ```
  
  `mwc list|l`. Show a list of developers who will be attending MWC
  ```bash
  $ mwc list
  // or
  $ mwc l
  ```
  You might pass some option such like `mwc list --name`, that will show the list of developer's name(!*Not supported yet*)
  
  `mwc add|a`. Add a new developer who will be attending MWC
  ```bash
  $ mwc add
  // or
  $ mwc a
  
  $ ? Developer's name Test
  $ ? Developer's email address test@test.com
  $ ? Developer's phone 123-1234
  $ ? Select day to attend Mar 1, 2021, Mar 2, 2021
  $ ? Developer's category Back
  ✔ Inserted new deveoper
  ```
  
  `mwc day`. Show the number of days available for MWC
  ```bash
  $ mwc day
  ```
  
  You may want to list all available command, run:
  ```bash
  $ mwc help
  // or
  $ mwc
  ```
