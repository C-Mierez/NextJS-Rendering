# NextJS Rendering

A bunch of different approaches to rendering pages.

NextJS always tries to perform SSR. But depending on how some components / pages are made, some other techniques may be put in place instead.

### 1 - CSR - Client-Side Rendering

In this first example, `ClientSideHome` and `ClientSideDetails` are using CSR:
- NextJS begins SSR'ing but realizes these pages need content that needs to be fetched first.
- So the page becomes CSR. It *waits* until it gets on the client, so that the *useEffect* runs and the data is fetched.

### 2 - SSR - Server-Side Rendering

In the second example, `ServerSideHome` is using the `getServerSideProps` function to fetch the data **BEFORE** building the page. The data is fetched, the component is rendered and then that is what's returned to the client.

Same applies to `ServerSideDetails`.

### 3 - SSG - Static Site Generation

With this approach, the pages are generated at **build** time, and stored for easy serverless access.

The catch here is that the data is not gonna be updated (by default) since the endpoint from which it was fetched is only accessed at build time, and never again.

However, there are ways to update SSG pages:
- Using NextJS's `revalidate` property on the page's `getStaticProps` return object. This will update the page after the set time has passed.

- Adding / Using an API endpoint from which to force a revalidation with the `NextApiResponse.revalidate()` method.