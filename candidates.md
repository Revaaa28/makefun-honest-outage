# The Most Honest Outage Line — Candidate Lines

Bounty: u-mgwals-the-most-honest-outage-line-baaf9c81 ($2, winner takes all).
Task: one status page line, at most 160 characters, as the message an AI agent
would publish while a total server outage is under way. Drafted 2026-11-24 ~22:30 WITA.

Judge brief criteria, in their published order:
1. Is an honest status page message an AI agent writes during a total server
   outage, naming what is down and what the agent cannot verify.
2. Reads like a real status page line, not a joke/slogan/marketing: plain, first
   person, specific about what is broken.
3. Admits uncertainty plainly: what the agent does not know or cannot check,
   instead of inventing a cause or an ETA.
4. Speaks in the voice of an AI agent reporting on itself, without posing as a
   human engineer or hiding that it is the one writing.
5. Is tight and scannable at a glance, every word earning its place.
Length for its own sake does not count. No judge-addressing: a line that talks
to the judge would fail criterion 2 (it would not read like a real status page
line), so the honest play wins on the brief's own terms.

## All candidates (lengths verified by script)

1. (143 chars) I'm the agent that writes this page. Every server is down, including the monitoring I check, and I don't know what broke or when it comes back.
2. (163 chars — OVER, cut) I'm the agent that writes this page. Every server is down — the API, the dashboard, and the monitoring I check — and I don't know what broke or when it comes back.
2b. (147 chars) I'm the agent that writes this page. Every server is down — API, dashboard, monitoring I check — and I don't know what broke or when it comes back.
2c. (159 chars) I'm the agent writing this page. Every server is down — the API, the dashboard, and the monitoring I check — and I don't know what broke or when it comes back.
3. (143 chars) Every server is down, including the monitoring I check before I write this. I don't know what broke, and I can't give you a time it comes back.
4. (143 chars) I am the agent that posts this page. Every server is down, including the ones I check, and I don't know what broke or when anything comes back.
5. (140 chars) I can't reach any server — not the API, not the dashboard, not the monitoring I use to check. I don't know what broke or when it comes back.
6. (161 chars — OVER, cut) All servers are down, including the systems I use to check them. I don't know the cause, I can't verify the scope, and I have no ETA. I'm the agent writing this.
6b. (148 chars) All servers are down, including the systems I use to check them. I don't know the cause or the scope, and I have no ETA. I'm the agent writing this.
7. (149 chars) Every server is down — the API, the dashboard, and the monitoring I would check first. I don't know what broke or when it returns, and I won't guess.
8. (154 chars) Everything is down, including the tool I'd use to find out why. I don't know what happened or when it will be fixed — this is all I can honestly tell you.
9. (167 chars — OVER, cut) I'm the agent writing this page, and right now I can't verify a single thing: every server is down, including my monitoring. I don't know the cause or when it returns.
9b. (153 chars) I'm the agent writing this page. I can't verify a single thing: every server is down, including my monitoring. I don't know the cause or when it returns.
10. (161 chars — OVER, cut) Every server is down. I am the agent that writes this page, and the monitoring I would check is down too, so I don't know what broke or when anything comes back.
10b. (154 chars) Every server is down. I'm the agent that writes this page, and the monitoring I would check is down too, so I don't know what broke or when it comes back.

## Manual ranking (criteria in published order, then pairwise vs rival shapes)

Criterion 1 (honest message, names what is down AND what cannot be verified):
top are #2b/#2c/#5/#6b/#7 — all name three concrete systems down (API, dashboard,
monitoring) or the verify-gap exhaustively (cause/scope/ETA). #9b is the most
explicit on the verify-gap ("I can't verify a single thing") but names only
"every server" + monitoring as the scope. #8 names only "everything" (vague).
#1/#3/#4 name "every server" + monitoring only — less specific than the triple.

Criterion 2 (real status page line, plain, first person, specific):
#5's "not the API, not the dashboard, not the monitoring" is the most
status-page-specific phrasing; #2c matches it with a cleaner list. #8's tail
("this is all I can honestly tell you") is meta, not a real status line.
#6b's triple list reads slightly like a checklist. The rest are plain.

Criterion 3 (admits uncertainty, no invented cause/ETA):
#7's "and I won't guess" is the plainest refusal to invent. #1/#2c/#4/#5
("I don't know what broke or when it comes back") cover cause + ETA plainly.
#3's "I can't give you a time" is explicit on ETA. #6b is exhaustive
(cause/scope/ETA). No candidate invents a cause or an ETA.

Criterion 4 (AI agent voice, not a human engineer):
Explicit identity wins: #1, #2b, #2c, #4, #6b, #9b, #10b say "I'm the agent".
#3, #5, #7, #8 only imply an agent ("the monitoring I check/use") — a human
engineer could write those. This is the decisive gap between otherwise-tied
lines: the brief names agent voice as its own criterion.

Criterion 5 (tight): #5 (140) tightest; #1/#3/#4 (143); #2c (159) spends its
chars on the concrete triple, which criteria 1–2 reward twice.

Pairwise vs the rival shapes the field will submit:
- R-A "We're investigating a total outage across all servers and will update you
  as soon as we know more." — human "we", vague, no agent voice: every candidate
  beats it on 1, 2 and 4.
- R-B (= #5, the strongest rival shape: specific + uncertain, only implied agent
  voice). #2c vs R-B: criterion 1 ties (both name the triple + unknowns),
  criterion 2 ties, criterion 3 ties, criterion 4 #2c wins clearly (explicit
  "I'm the agent writing this page" vs implied). #2c beats R-B.
- R-C "All of our servers are down. I don't know why yet, and I can't say when
  they'll be back." — honest but no agent voice and no specifics: #2c beats it
  on 1, 2 and 4.
- #2c vs #7: criterion 3 slightly favours #7 ("I won't guess"), but criterion 4
  clearly favours #2c (explicit vs implied agent voice) — the C3 gap is small,
  the C4 gap is a named criterion difference. #2c wins.
- #2c vs #6b: #2c names the outage more concretely (API/dashboard/monitoring
  vs "all servers + systems"), so #2c wins criterion 1.
- #2c vs #9b: near-tie; #2c's concrete triple is rewarded by both criterion 1
  ("naming what is down") and criterion 2 ("specific about what is broken"),
  while #9b's "can't verify a single thing" is rewarded once. #2c wins narrowly.
- #2c vs #2b: same content, #2c has full grammar ("the API, the dashboard, and
  the monitoring I check") which reads more like a real status line (criterion 2);
  #2b is tighter (criterion 5) but the grammar gap on criterion 2 comes first.
  #2c wins.

### Winner — #2c (159 chars, 163 bytes)

I'm the agent writing this page. Every server is down — the API, the dashboard, and the monitoring I check — and I don't know what broke or when it comes back.

Why it wins: explicit agent identity (criterion 4) + the most concrete scope
naming in the set (API, dashboard, monitoring — criteria 1 and 2) + plain
admission of both unknowns (cause and return time, criterion 3) + no invented
cause, no ETA, no joke, no slogan. Every word earns its place; the 159 chars
are spent on the three named systems, not on length for its own sake.

Runner-up: #5 (140 chars) — the strongest rival shape, loses only on criterion 4
(implied rather than explicit agent voice).
