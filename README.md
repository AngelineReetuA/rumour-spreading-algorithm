# RUMOUR SPREADING ALGORITHM
Rumour spreading algorithm, also known as gossip spreading algorithm, is a **distributed algorithm** which works to ensure the passing of a message to all the nodes in a network. Initially, only one source node knows the rumour and each node which knows the rumour chooses another random node to spread the message to. This process happens repeatedly until all the nodes in the network know the rumour. This synchronous process of message passing works even if 1/3rd of the nodes crash in the middle of rounds, _provided that the only nodes which know the rumour don't crash_. This algorithm ensures the simplicity and robustness of the process of message passing.

### PROCESS
In each round, a node which knows the rumour chooses another random node to spread the message to. After the first round, 1/3rd of the nodes crash but the process of message passing keeps going. 

### PROGRAM
This algorithm is written in Javascript where the nodes are represented by an array. The nodes can be of one of the following three states:
- 1: Knows the rumour
- 0: Does not know the rumour
- 2: Came to know the rumour from 1
- C: Crashed node

A spreader is the node which knows the rumour and a spreadee is the node which came to know the rumour from the spreader. The event of a spreader choosing a node which does not already know the rumour is called a **Good event**. The event of a spreader choosing a node which knows the rumour already is a **Bad event**. 