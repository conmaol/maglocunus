# Problems

A problem-solving agent:
- formulates a `goal` (based on the current situation)
- considers sequences of actions that might achieve that goal ie. makes a `plan`
- maximises its performance measure.

A `problem` consists of:
- a goal
- a set of means for achieving that goal.

`Search` involves exploring what the means can do, systematically considering the consequences of different courses of action.

The problem type depends on the knowledge available to an agent:
- Does it know the current state?
- Does it understand the consequences of its actions?

A goal is a set of world-states (just those states in which the goal is satisfied).

Actions cause transitions between world states.

Problem formulation — deciding on the most appropriate world-states and actions/transitions.

Does the agent have a map of the problem space/world in its memory?

If so it can start by making a plan, searching for a solution, before setting out (on the execution phase).

`Search algorithm` – takes in a problem as input and returns a solution (sequence of actions).


## The vacuum world

The vacuum world consists of two locations – left and right. Each location is either dirty or clean. The agent is either on the left or on the right.

There are this eight distinct objective states that the vacuum world can be in:
1. `ĎD` – The agent is on the left, and both the left and right are dirty.
2. `DĎ` – The agent is on the right, and both the left and right are dirty.
3. `ĎC` – The agent is on the left, the left is dirty but the right is clean.
4. `DČ` – The agent is on the right, the left is dirty but the right is clean.
5. `ČD` – The agent is on the left, the left is clean but the right is dirty.
6. `CĎ` – The agent is on the right, the left is clean but the right is dirty.
7. `ČC` – The agent is on the left, and both the left and right are clean.
8. `CČ` – The agent is on the right, and both the left and right are clean.

In the vacuum world, the agent can perform three distinct actions:
1. Move to the left.
2. Move to the right.
3. Activate the vacuum’s suction.

The following three facts all hold:
1. If the agent moves to the left, then it will be on the left.
2. If the agent moves to the right, then it will be on the right.
3. If the agent activates the vacuum’s suction, then its current location will be clean.

The agent knows these three facts.

These world states and actions are thus linked as follows:

```mermaid
graph TD
  state1(["ĎD"])
  state2(["DĎ"])
  state3(["ĎC"])
  state4(["DČ"])
  state5(["ČD"])
  state6(["CĎ"])
  state7(["ČC"])
  state8(["CČ"])
  state1 -- R --> state2
  state1 -- S --> state5 
  state2 -- L --> state1
  state2 -- S --> state4
  state3 -- R --> state4
  state3 -- S --> state7
  state4 -- L --> state3
  state5 -- R --> state6
  state6 -- L --> state5
  state6 -- S --> state8
  state7 -- R --> state8
  state8 -- L --> state7
```

### No sensors

Let’s start by assuming that the agent completely lacks sensors. It thus has no way of knowing:
- which location it is in
- whether its location is clean or dirty
- whether the other location is clean or dirty.

All the agent knows is what it can do, what will happen if it does something, and what its goal is.

Before the agent does anything, it is in the following knowledge state:

```mermaid
graph TD
  kstate1(["ĎD, DĎ, ĎC, DČ, ČD, CĎ, ČC, CČ"])
```
In other words, the agent knows that it is either on the left or on the right, that the left is either dirty or clean, and that the right is either dirty or clean.

The agent also knows what knowledge state it will enter into if it does something:

```mermaid
graph TD
  kstate1(["ĎD, DĎ, ĎC, DČ, ČD, CĎ, ČC, CČ"])
  kstate2(["ĎD, ĎC, ČD, ČC"])
  kstate3(["DĎ, DČ, CĎ, CČ"])
  kstate4(["DČ, ČD, ČC, CČ"])
  kstate1 -- L --> kstate2
  kstate1 -- R --> kstate3
  kstate1 -- S --> kstate4
```

In other words:
- If the agent moves left, then it knows it will be on the left.
- If the agent moves right, then it knows that it will be on the right.
- If the agent activates the vacuum’s suction, then it knows that it will be in a clean location.

In total, there will be ten such knowledge states, related via actions as follows:

```mermaid
graph TD
  kstate1(["ĎD, DĎ, ĎC, DČ, ČD, CĎ, ČC, CČ"])
  kstate2(["ĎD, ĎC, ČD, ČC"])
  kstate3(["DĎ, DČ, CĎ, CČ"])
  kstate4(["DČ, ČD, ČC, CČ"])
  kstate5(["ČD, ČC"])
  kstate6(["DČ, CČ"])
  kstate7(["CĎ, CČ"])
  kstate8(["ĎC, ČC"])
  kstate9(["CČ"])
  kstate10(["ČC"])
  kstate1 -- L --> kstate2
  kstate1 -- R --> kstate3
  kstate1 -- S --> kstate4
  kstate2 -- R --> kstate3
  kstate2 -- S --> kstate5
  kstate3 -- L --> kstate2
  kstate3 -- S --> kstate6
  kstate4 -- L --> kstate5
  kstate4 -- R --> kstate6
  kstate5 -- R --> kstate7
  kstate6 -- L --> kstate8
  kstate7 -- L --> kstate5
  kstate7 -- S --> kstate9
  kstate8 -- R --> kstate6
  kstate8 -- S --> kstate10
  kstate9 -- L --> kstate10
  kstate10 -- R --> kstate9
```

Even without sensors, the agent can figure out a plan that is guaranteed to reach its goal, for example:
- Move to the left.
- Suck.
- Move to the right.
- Suck.

### Location sensor – you know where you are 

```mermaid
graph TD
  kstate1(["ĎD, ĎC, ČD, ČC"])
  kstate2(["DĎ, DČ, CĎ, CČ"])
  kstate3(["ČD, ČC"])
  kstate4(["DČ, CČ"])
  kstate5(["CĎ, CČ"])
  kstate6(["ĎC, ČC"])
  kstate7(["CČ"])
  kstate8(["ČC"])
  kstate1 -- R --> kstate2
  kstate2 -- L --> kstate1
  kstate1 -- S --> kstate3
  kstate2 -- S --> kstate4
  kstate3 -- R --> kstate5
  kstate5 -- L --> kstate3
  kstate4 -- L --> kstate6
  kstate6 -- R --> kstate4
  kstate5 -- S --> kstate7
  kstate6 -- S --> kstate8
  kstate7 -- L --> kstate8
  kstate8 -- R --> kstate7
```

Plans:
- agent is on the left: suck, move right, suck
- agent is on the right: suck, move left, suck

### Local dirt sensor – you know if there is dirt where you are

```mermaid
graph TD
  kstate1(["1. ĎD, ĎC, DĎ, CĎ"])
  kstate2(["2. ČD, CČ, DČ, CČ"])
  kstate1 -- S --> kstate2
  kstate3(["3. DĎ, DČ, CĎ"])
  kstate1 -- R --> kstate3
  kstate4(["4. ĎD, ĎC, ČD"])
  kstate1 -- L --> kstate4
  kstate5(["5. ČD, ČC, ĎC"])
  kstate2 -- L --> kstate5
  kstate6(["6. CĎ, CČ, DČ"])
  kstate2 -- R --> kstate6
  kstate7(["ČD, ČC"])
  kstate4 -- S --> kstate7
  kstate5 -- S --> kstate7
  kstate8(["DČ, CČ"])
  kstate3 -- S --> kstate8
  kstate6 -- S --> kstate8
```




### Next door dirt sensor – you know if there is dirt next door



### Non-deterministic

Actions:
- `L` – you move to the left
- `R` – you move to the right
- `S` – you activate the suction, which either removes all the dirt from where you are, or deposits more dirt where you are, randomly

```mermaid
graph TD
  state1(["ĎD"])
  state2(["DĎ"])
  state3(["ĎC"])
  state4(["DČ"])
  state5(["ČD"])
  state6(["CĎ"])
  state7(["ČC"])
  state8(["CČ"])
  state1 -- R --> state2
  state1 -- S --> state5 
  state2 -- L --> state1
  state2 -- S --> state4
  state3 -- R --> state4
  state3 -- S --> state7
  state4 -- L --> state3
  state4 -. S .-> state2
  state5 -- R --> state6
  state5 -. S .-> state1
  state6 -- L --> state5
  state6 -- S --> state8
  state7 -- R --> state8
  state7 -. S .-> state3
  state8 -- L --> state7
  state8 -. S .-> state6
```



----

Back up to: [Maglocunus](../index.md)
