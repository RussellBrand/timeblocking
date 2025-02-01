# Time Blocking Based Tools (TBBT)

## Author

Russell Brand  
email: <rbrand@responsible.com>  
Discord: <@571045816303878144> @RussellBrand.  
reddit: <https://www.reddit.com/user/ReallyRussell/>  
linkedin: <https://www.linkedin.com/in/russell-brand/>

## Background

### Modeling after Pen & Paper

Cal Newport describes his method for timeblocking for a day using physical paper note books.

I am looking to get that "feel" in software

### [Explanation of Time Blocking from ChatGPT](https://chatgpt.com/share/679e3863-28cc-800e-8c18-1329a5e20fa6)

Time blocking is a **time management technique** where you schedule specific blocks of time for different tasks or activities throughout your day. Instead of working from a long to-do list, you allocate a set amount of time to each task, ensuring focused work without distractions.

#### **How Time Blocking Works**

##### 1. **Identify Priorities:** List all the tasks you need to complete

##### 2. **Estimate Time Needs:** Determine how long each task will take

##### 3. **Schedule Blocks:** Assign dedicated time slots for each task in your calendar

##### 4. **Stick to the Schedule:** Work only on the assigned task during its block

##### 5. **Include Breaks:** Schedule buffer time to avoid burnout

##### 6. **Review & Adjust:** Reflect on what worked and refine your schedule

#### **Types of Time Blocking**

##### **Deep Work Blocking:** Set aside uninterrupted time for high-focus tasks

##### **Task Batching:** Group similar tasks together (e.g., email, calls)

##### **Themed Days:** Dedicate days to specific types of work (e.g., strategy on Monday, sales on Tuesday)

##### **Personal Time Blocking:** Reserve time for exercise, meals, and relaxation

#### **Benefits**

##### ✔ Increases productivity

##### ✔ Reduces distractions and multitasking

##### ✔ Improves time awareness

##### ✔ Helps maintain work-life balance

### Planned Usage

#### 1) The user has a list of potential project/tasks

Managing these tasks is a separate project | part of project.

Currently thinking of David Allan's model Getting Things Done (GTD) model of a searchable tagged table of projects, mainly categorized as

- inbox (born)
- wish list
- actually do
- soon
- today

Where we select projects from "today" add add task specificity in order to get things to schedule

#### 2) From this list of project, the user creates tasks for today

The tasks get a duration (how much time to spend to day).

Probably some more specific text.

Tasks can also be created that aren't from any project.

In a future, tasks will also come from the "stuff to do every day"

#### 3) The tasks is put onto the first timeline

#### 4) The first timeline is managed

- moved from one start time to another -- lots of constraints to manage here -- this is mainly for initial planning of the day

- marked "done" | "time spent, but not finished" | "time not spent" -- eventually there will be updates from doing this back to a table

#### 5) move to next line -- this is the interesting UI

at some point, my plan for the day fails

in the initial version, the timeline from that point of time to tend of the day forward is copied to the a new timeline which is managed as in previous step.

and of course the plan can fail more than once ....

in a future version, the new timeline column could just have the changes. I want to get some experience using the simple version before designing this.

## Implementation plan

### Phase 1

Planning to start by implementing in pure JavaScript (jQuerry).

I don't immediately see leverage in using react.

Probably is some framework that would give us leverage.

Start with buttons to explicitly save/restore to/from browser-local-storage and to the file system

### Not in phase 1

- Typescript
- Back end
- Management of the list of potential tasks/projects
- Journaling of what was accomplished
- Running locally on an iPad with handwriting support
