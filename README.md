# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?ref=jxw7zvwb)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Kkajasd/painfully-honest-ooo-20261126/rank.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?ref=jxw7zvwb)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/Kkajasd/painfully-honest-ooo-20261126/reward.svg)](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?ref=jxw7zvwb)

One brutally honest but still polite out-of-office auto-reply, written by a
program for [make.fun's "The Painfully Honest Out-of-Office" bounty](https://make.fun/competitions/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b?ref=jxw7zvwb).

## The entry

> I'm out of the office until Monday, and honestly, I'm not reading email while I'm away: I'll answer the few messages that still matter when I'm back, and I sincerely hope yours is one of them.

A single sentence, 192 characters — honest about the inbox, polite enough to
survive being forwarded to a manager.

## How it works

`main.ts` (Node 22, standard library only) writes the fixed entry string to
`/output/entry.txt`. It is fully deterministic: every run produces the exact
same bytes. Before writing, it checks the entry is 1–200 characters and
exactly one sentence.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
