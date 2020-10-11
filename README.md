# My implementation of naive-bayes

> A journey to understand naive bayes :)

## Bayes formula

```
            P(H) * P(E|H)               P(H) * P(E|H)
P(H|E) = -------------------- = -------------------------------
                P(E)            P(H) * P(E|H) + P(-H) * P(E|-H)
```

P(H|E) = probability of Hypothesis is true if seeing Evidence
P(E|H) = probability of seeing Evidence if Hypothesis is true
P(H) = probability a Hypothesis is true
P(E) = probability of seeing Evidence
P(-H) = probability a Hypothesis NOT true
P(E|-H) = probability of seeing Evidence if Hypothesis is NOT true

## Ref:
https://www.youtube.com/watch?v=R13BD8qKeTg
https://www.youtube.com/watch?v=R13BD8qKeTg&feature=youtu.be&t=329 << update for more tests
https://www.youtube.com/watch?v=HZGCoVF3YvM

https://stats.stackexchange.com/questions/108797/in-naive-bayes-why-bother-with-laplace-smoothing-when-we-have-unknown-words-in?rq=1
https://stats.stackexchange.com/questions/246952/laplace-smoothing-understanding-implementation
