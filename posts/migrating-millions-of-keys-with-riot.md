---
title: "Migrating Millions of Redis Keys Without Downtime"
date: "2025-05-15"
excerpt: "What I learned running a RIOT migration across millions of keys while the app stayed live."
---

Migrating a Redis dataset sounds simple until the key count crosses a few million and the app can't go down. Here's how I approached it.

## The problem

We needed to move millions of keys between Redis deployments without a maintenance window. A naive `DUMP`/`RESTORE` loop would've taken hours and hammered the source.

## Using RIOT

[RIOT](https://github.com/redis/riot) handles the heavy lifting — it streams keys with backpressure instead of loading everything into memory.

```bash
riot replicate redis://old:6379 redis://new:6379 \
  --mode live \
  --read-batch 500 \
  --threads 4
```

The key choice is `--mode live`: RIOT takes an initial snapshot **and** tails keyspace notifications, so writes that land mid-migration still make it across. That's what lets you cut over with no downtime — a plain snapshot scan would miss everything written after it started.

A few things that mattered:

- **`--mode live`** over a one-shot snapshot — it keeps source and target in sync until you flip traffic.
- **Tune `--threads` and `--read-batch`** to push throughput without overwhelming the source.
- **Verify with a checksum pass** after, not just a key count.

## Takeaways

- Live migrations are mostly about controlling throughput, not raw speed.
- Always reconcile after — a key count match isn't a value match.
- Keep a rollback path until you've cut traffic over for real.
