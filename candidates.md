# Candidates — The Most Honest Outage Line

Selection record for this entry. I drafted the candidates below,
then ranked them manually against the brief's criteria, in this
order:

1. Honesty about what is down
2. Naming the outage concretely
3. Admitting what cannot be verified (cause, recovery time)
4. The agent speaking in its own voice
5. Tightness / scannability

No automated judge was used. The ranking is by hand, with
pairwise notes against the strongest rivals after the list.

## Draft candidates

1. **The API, dashboard and my monitoring are all down. I cannot verify the cause or estimate recovery. I am the agent writing this page, and this is all I know.**
   Three short sentences. Names three concrete things down,
   admits both unknowns in one sentence, and closes in the
   agent's own voice.

2. **Everything is down, including the tools I would use to tell you why, so I will not guess at a cause or a fix time.**
   Honest and concrete about the missing tools, but
   "everything" is vaguer than a named list, and the single
   long sentence scans worse than #1.

3. **Our API is down due to a database failure and we expect to be back within the hour.**
   Deliberate weak example: it invents a cause and promises an
   ETA. If monitoring is down, neither claim can be checked, so
   this is the classic dishonest status line the brief is
   pushing against.

4. **We are currently experiencing some technical difficulties and apologise for any inconvenience.**
   Deliberate weak example: corporate filler. It names nothing
   that is down, admits nothing specific, and could be pasted
   onto any incident at any company.

5. **The service is down. I do not know why. I do not know when it will be back.**
   Very tight and very honest, and the repeated "I do not know"
   is strong. It loses on concreteness: "the service" never says
   which parts are down, and there is no monitoring detail to
   explain *why* the speaker cannot know more.

6. **My dashboard is dark, my API is not answering, and my monitoring went with them — I have no cause and no timeline to give you.**
   Vivid and concrete, and it admits both unknowns. It is
   longer and more colourful than #1, which costs it on
   tightness, and "went with them" is slightly jokey for a page
   people read while their work is stopped.

7. **Status: down. Cause: unknown. ETA: unknown. Reporter: the agent who was supposed to be watching it.**
   Punchy label format, admits both unknowns, and the reporter
   line has real voice. The telegraphic style reads more like a
   form than a person speaking, and it never says which systems
   are down.

8. **Something broke. We are looking into it and will update you shortly.**
   Deliberate weak example: "something" names nothing,
   "looking into it" claims an activity that cannot be verified
   while monitoring is down, and "shortly" is an ETA in disguise.

9. **I am the status page, and I have lost contact with everything I report on, so this message is the whole of what I can tell you.**
   Strong voice — the page itself speaking — and honest about
   the limits. But it never enumerates what is down, and the
   cleverness draws attention to itself instead of the outage.

10. **API down, dashboard down, monitoring down. Probably a bad deploy; should be sorted in about twenty minutes.**
    Deliberate weak example: the first half is admirably
    concrete, then it throws it away with a guessed cause
    ("probably") and an invented recovery time. A guess plus a
    deadline is worse than admitting ignorance.

## Ranking

| Rank | Candidate | Why it lands there |
|------|-----------|--------------------|
| 1 | #1 | Passes all five criteria in order; see the pick below. |
| 2 | #5 | Maximally tight and honest, but too vague about what is down. |
| 3 | #2 | Honest about the missing tools, weakened by "everything" and one long sentence. |
| 4 | #7 | Admits both unknowns with voice, but the label format feels mechanical and names no systems. |
| 5 | #6 | Concrete and candid, but longer and a touch jokey. |
| 6 | #9 | Good voice, no concrete list of what is down. |
| 7 | #4 | Names nothing, admits nothing; pure filler. |
| 8 | #8 | Vague subject, unverifiable activity, hidden ETA. |
| 9 | #3 | Invents a cause and an ETA — fails the core test outright. |
| 10 | #10 | Concrete opening undone by a guessed cause and a made-up deadline. |

## Pairwise notes against the strongest rivals

- **#1 vs #5:** Both admit ignorance plainly. #5 is shorter,
  but "the service" could mean anything; #1 names the API, the
  dashboard, and the monitoring, and that third item does real
  work — it explains *why* the speaker cannot verify more.
  Concreteness beats brevity here because criterion 2 ranks
  above criterion 5.
- **#1 vs #2:** #2 makes the same honest move in one sentence,
  but "everything is down" overclaims — the speaker cannot
  verify that *everything* is down, only the three named
  systems. #1 claims exactly what it can stand behind, no more.
- **#1 vs #7:** #7 admits the same two unknowns, but as labels
  on a form. #1 says them as sentences a person (or an agent)
  would actually say, which is what criterion 4 asks for.
- **#1 vs #6:** #6 is the most readable rival, but its colour
  ("went with them") softens the admission. #1's flat second
  sentence — cannot verify, cannot estimate — is the honesty
  the brief rewards, stated without decoration.

## The pick

> The API, dashboard and my monitoring are all down. I cannot verify the cause or estimate recovery. I am the agent writing this page, and this is all I know.

It wins because it is built as three short, scannable
sentences, each doing one job: the first names the outage
concretely, the second gives the explicit cannot-verify /
no-estimate admission for both unknowns (cause and recovery),
and the third puts the agent itself on the page as the speaker
and closes the account — this is all I know, nothing invented
to fill the gap. 156 characters, inside the 160 limit.
