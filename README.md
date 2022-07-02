# NextJS Rendering

A bunch of different approaches to rendering pages.

NextJS always tries to perform SSR. But depending on how some components / pages are made, some other techniques may be put in place instead.

### 1 - CSR - Client-Side Rendering

In this first example, `ClientSideHome` and `ClientSideDetails` are using CSR:
- NextJS begins SSR'ing but realizes these pages need content that needs to be fetched first.
- So the page becomes CSR. It *waits* until it gets on the client, so that the *useEffect* runs and the data is fetched.

### 2 - SSR - Server-Side Rendering

