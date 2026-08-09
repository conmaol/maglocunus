# Problems

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




### Deterministic

Actions:
- `L` – you move to the left
- `R` – you move to the right
- `S` – you activate the suction, which removes all the dirt from where you are

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

### No sensors

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


### Local dirt sensor – you know if there is dirt where you are




### Next door dirt sensor – you know if there is dirt next door






----

Back up to: [Maglocunus](../index.md)
