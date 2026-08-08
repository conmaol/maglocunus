# Problems

## The vacuum world

World states:
1. `ĎD` – you are on the left, and both the left and right are dirty
2. `DĎ` – you are on the right, and both the left and right are dirty
3. `ĎC` – you are on the left, the left is dirty but the right is clean
4. `DČ` – you are on the right, the left is dirty but the right is clean
5. `ČD` – you are on the left, the left is clean but the right is dirty
6. `CĎ` – you are on the right, the left is clean but the right is dirty
7. `ČC` – you are on the left, and both the left and right are clean
8. `CČ` – you are on the right, and both the left and right are clean

### Deterministic

Actions:
- `L` – you move to the left
- `R` – you move to the right
- `S` – you activate the suction, which removes all the dirt from where you are

```mermaid
graph LR
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
graph LR
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

No sensors

Local dirt sensor – you know if there is dirt where you are

Next door dirt sensor – you know if there is dirt next door






----

Back up to: [Maglocunus](../index.md)
