# tasks
## react

### [ ] move styles from DisplayGrid -> css

### [ ] remove the "| number" in the typefs

### [ ] performance -- re-enders 
### [ ] "is" validation typeguards

look at `GuardExample` in `tbbt-rt/src/types.ts`

### [ ] zod 
https://fullstackopen.com/en/part9/typing_an_express_app#using-schema-validation-libraries

or `io-ts` or `runtypes` 

### [ ] prepend z-buffer for move
### [ ] putting sample data into seperate file

### [ ] `countOverlapsFromPrevious` --  computes wrong
create unit test
fix
### [y] `DisplayTimeline` wrongly has time from bottom rather than top
### [Y] day's start time is not be respected in timeline view
### [Y] timeline view is not being clipped
### [y] typedefs
Typedef for Status -- enum of OPEN DONE SKIPPED

Typedef for ID -- positive integer

Typedef for TIME -- float 

Typedef for DURATION -- float 

Typedef for Activity 

id: ID
title: string
status: status
start: TIME
duration: DURATION


 [
    createActivity("Morning Exercise", 6.00, 1,1001),
    createActivity("Work on Project", 9.00, 3, 1002),
    createActivity("Lunch Break", 12.00, 1, 1003),
    createActivity("Team Meeting", 14.00, 2, 1004),
    createActivity("Evening Walk", 18.00, 1, 1005),
  ];








## original 
### [ ] give each actity and ID
### [ ] if we put the day start & end on #timeline block, 
and factor out the computations of start time and duration height, 
we could do panning an zooming by changing the day start & end on #timeline block, 

not a necessarily a wonderful permanent solution, but could work

it almost makes we want to do this in react...

### [ ] 
### [ ] 

### [ ] emacs support for triple hash
### [Y] console ninja
### [Y] time based bounding box
### [ ] save/restore to local storage
### [ ] save/restore to local disk
### [ ] display at the right verical "time" point
### [ ] display with duration as "item height"
### [Y] create activity
### [ ] edit time
### [ ] edit length
### [ ] edit text
### [ ] display state
### [ ] edit state
### [ ] second column
### [Y] drag & drop
### [ ] collisions
### [ ] pick a framework
### [ ] typescript
### [ ] jsx
### [ ] recalculate times for drag & drop
### [ ] figure out the long-click, short-click issue
### [ ] 
### [ ] 
