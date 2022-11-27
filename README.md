# Node Cluster

> loadtest result comparison

## Test Environment

- laptop : 2.3 GHz 8 Intel Core i9
- macos: Ventura 13.0.1
- memory: 16G DDR4
- node: 14.21.1

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

- `3686` requests vs `3321` requests

  - with 16 cluster threads open

- no too much performance enhancement

- not sure if it is the reason all of the process is running at the same port and without load balancing setup 🤔

- need more diving-into insight in future
