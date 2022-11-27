# Node Cluster

> loadtest result comparison

## Purpose

Try to measure how much node performance booster `node cluster` could bring

## Steps

- start server(s)
  - start a simple node server without cluster
  - start simple node servers with cluster
- run loadtest

## Results

- with no cluster

  ![with no cluster](/result/no-cluster.png)

- with cluster

  ![with  cluster](/result/with-cluster.png)

## Conclusion

- 3686 requests vs 3321 requests

  - with 16 cluster threads open on my `mac pro 2019 intel chip`

- no too much performance enhancement

- need more diving-into insight in future
