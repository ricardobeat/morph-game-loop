A thought exercise implementing a game loop with a redux-like data flow and [morphdom](https://github.com/patrick-steele-idem/morphdom).

#### Questions

- DOM doesn't make sense here
- arbitrary dispatch doesn't make sense here, since we must update the world on every frame - create action queue?
- what's the point?

[Demo](http://ricardo.cc/morph-game-loop)
