import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

/**
 * See clerk docs
 * @see https://clerk.com/docs/references/nextjs/custom-signup-signin-pages#make-the-sign-up-and-sign-in-routes-public
 */
const publicRoutes = [
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(
  async (auth, req) => {
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  { debug: false } // process.env.NODE_ENV === "development" }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
