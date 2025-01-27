/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as DashboardImport } from "./routes/_dashboard";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AuthLogoutImport } from "./routes/auth/logout";
import { Route as AuthRegisterImport } from "./routes/_auth/register";
import { Route as AuthLoginImport } from "./routes/_auth/login";
import { Route as DashboardDonationsIndexImport } from "./routes/_dashboard/donations/index";
import { Route as DashboardWatchMediaIdImport } from "./routes/_dashboard/watch/$mediaId";
import { Route as DashboardDonationsDonationIdImport } from "./routes/_dashboard/donations/$donationId";

// Create Virtual Routes

const AboutLazyImport = createFileRoute("/about")();
const DashboardIndexLazyImport = createFileRoute("/_dashboard/")();
const DashboardUploadLazyImport = createFileRoute("/_dashboard/upload")();

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/about.lazy").then((d) => d.Route));

const DashboardRoute = DashboardImport.update({
  id: "/_dashboard",
  getParentRoute: () => rootRoute,
} as any);

const AuthRoute = AuthImport.update({
  id: "/_auth",
  getParentRoute: () => rootRoute,
} as any);

const DashboardIndexLazyRoute = DashboardIndexLazyImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => DashboardRoute,
} as any).lazy(() => import("./routes/_dashboard/index.lazy").then((d) => d.Route));

const DashboardUploadLazyRoute = DashboardUploadLazyImport.update({
  id: "/upload",
  path: "/upload",
  getParentRoute: () => DashboardRoute,
} as any).lazy(() => import("./routes/_dashboard/upload.lazy").then((d) => d.Route));

const AuthLogoutRoute = AuthLogoutImport.update({
  id: "/auth/logout",
  path: "/auth/logout",
  getParentRoute: () => rootRoute,
} as any);

const AuthRegisterRoute = AuthRegisterImport.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => AuthRoute,
} as any);

const AuthLoginRoute = AuthLoginImport.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => AuthRoute,
} as any);

const DashboardDonationsIndexRoute = DashboardDonationsIndexImport.update({
  id: "/donations/",
  path: "/donations/",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardWatchMediaIdRoute = DashboardWatchMediaIdImport.update({
  id: "/watch/$mediaId",
  path: "/watch/$mediaId",
  getParentRoute: () => DashboardRoute,
} as any);

const DashboardDonationsDonationIdRoute = DashboardDonationsDonationIdImport.update({
  id: "/donations/$donationId",
  path: "/donations/$donationId",
  getParentRoute: () => DashboardRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/_auth": {
      id: "/_auth";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof AuthImport;
      parentRoute: typeof rootRoute;
    };
    "/_dashboard": {
      id: "/_dashboard";
      path: "";
      fullPath: "";
      preLoaderRoute: typeof DashboardImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/_auth/login": {
      id: "/_auth/login";
      path: "/login";
      fullPath: "/login";
      preLoaderRoute: typeof AuthLoginImport;
      parentRoute: typeof AuthImport;
    };
    "/_auth/register": {
      id: "/_auth/register";
      path: "/register";
      fullPath: "/register";
      preLoaderRoute: typeof AuthRegisterImport;
      parentRoute: typeof AuthImport;
    };
    "/auth/logout": {
      id: "/auth/logout";
      path: "/auth/logout";
      fullPath: "/auth/logout";
      preLoaderRoute: typeof AuthLogoutImport;
      parentRoute: typeof rootRoute;
    };
    "/_dashboard/upload": {
      id: "/_dashboard/upload";
      path: "/upload";
      fullPath: "/upload";
      preLoaderRoute: typeof DashboardUploadLazyImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/": {
      id: "/_dashboard/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof DashboardIndexLazyImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/donations/$donationId": {
      id: "/_dashboard/donations/$donationId";
      path: "/donations/$donationId";
      fullPath: "/donations/$donationId";
      preLoaderRoute: typeof DashboardDonationsDonationIdImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/watch/$mediaId": {
      id: "/_dashboard/watch/$mediaId";
      path: "/watch/$mediaId";
      fullPath: "/watch/$mediaId";
      preLoaderRoute: typeof DashboardWatchMediaIdImport;
      parentRoute: typeof DashboardImport;
    };
    "/_dashboard/donations/": {
      id: "/_dashboard/donations/";
      path: "/donations";
      fullPath: "/donations";
      preLoaderRoute: typeof DashboardDonationsIndexImport;
      parentRoute: typeof DashboardImport;
    };
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthLoginRoute: typeof AuthLoginRoute;
  AuthRegisterRoute: typeof AuthRegisterRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

interface DashboardRouteChildren {
  DashboardUploadLazyRoute: typeof DashboardUploadLazyRoute;
  DashboardIndexLazyRoute: typeof DashboardIndexLazyRoute;
  DashboardDonationsDonationIdRoute: typeof DashboardDonationsDonationIdRoute;
  DashboardWatchMediaIdRoute: typeof DashboardWatchMediaIdRoute;
  DashboardDonationsIndexRoute: typeof DashboardDonationsIndexRoute;
}

const DashboardRouteChildren: DashboardRouteChildren = {
  DashboardUploadLazyRoute: DashboardUploadLazyRoute,
  DashboardIndexLazyRoute: DashboardIndexLazyRoute,
  DashboardDonationsDonationIdRoute: DashboardDonationsDonationIdRoute,
  DashboardWatchMediaIdRoute: DashboardWatchMediaIdRoute,
  DashboardDonationsIndexRoute: DashboardDonationsIndexRoute,
};

const DashboardRouteWithChildren = DashboardRoute._addFileChildren(DashboardRouteChildren);

export interface FileRoutesByFullPath {
  "": typeof DashboardRouteWithChildren;
  "/about": typeof AboutLazyRoute;
  "/login": typeof AuthLoginRoute;
  "/register": typeof AuthRegisterRoute;
  "/auth/logout": typeof AuthLogoutRoute;
  "/upload": typeof DashboardUploadLazyRoute;
  "/": typeof DashboardIndexLazyRoute;
  "/donations/$donationId": typeof DashboardDonationsDonationIdRoute;
  "/watch/$mediaId": typeof DashboardWatchMediaIdRoute;
  "/donations": typeof DashboardDonationsIndexRoute;
}

export interface FileRoutesByTo {
  "": typeof AuthRouteWithChildren;
  "/about": typeof AboutLazyRoute;
  "/login": typeof AuthLoginRoute;
  "/register": typeof AuthRegisterRoute;
  "/auth/logout": typeof AuthLogoutRoute;
  "/upload": typeof DashboardUploadLazyRoute;
  "/": typeof DashboardIndexLazyRoute;
  "/donations/$donationId": typeof DashboardDonationsDonationIdRoute;
  "/watch/$mediaId": typeof DashboardWatchMediaIdRoute;
  "/donations": typeof DashboardDonationsIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/_auth": typeof AuthRouteWithChildren;
  "/_dashboard": typeof DashboardRouteWithChildren;
  "/about": typeof AboutLazyRoute;
  "/_auth/login": typeof AuthLoginRoute;
  "/_auth/register": typeof AuthRegisterRoute;
  "/auth/logout": typeof AuthLogoutRoute;
  "/_dashboard/upload": typeof DashboardUploadLazyRoute;
  "/_dashboard/": typeof DashboardIndexLazyRoute;
  "/_dashboard/donations/$donationId": typeof DashboardDonationsDonationIdRoute;
  "/_dashboard/watch/$mediaId": typeof DashboardWatchMediaIdRoute;
  "/_dashboard/donations/": typeof DashboardDonationsIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | ""
    | "/about"
    | "/login"
    | "/register"
    | "/auth/logout"
    | "/upload"
    | "/"
    | "/donations/$donationId"
    | "/watch/$mediaId"
    | "/donations";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | ""
    | "/about"
    | "/login"
    | "/register"
    | "/auth/logout"
    | "/upload"
    | "/"
    | "/donations/$donationId"
    | "/watch/$mediaId"
    | "/donations";
  id:
    | "__root__"
    | "/_auth"
    | "/_dashboard"
    | "/about"
    | "/_auth/login"
    | "/_auth/register"
    | "/auth/logout"
    | "/_dashboard/upload"
    | "/_dashboard/"
    | "/_dashboard/donations/$donationId"
    | "/_dashboard/watch/$mediaId"
    | "/_dashboard/donations/";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  AuthRoute: typeof AuthRouteWithChildren;
  DashboardRoute: typeof DashboardRouteWithChildren;
  AboutLazyRoute: typeof AboutLazyRoute;
  AuthLogoutRoute: typeof AuthLogoutRoute;
}

const rootRouteChildren: RootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  DashboardRoute: DashboardRouteWithChildren,
  AboutLazyRoute: AboutLazyRoute,
  AuthLogoutRoute: AuthLogoutRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth",
        "/_dashboard",
        "/about",
        "/auth/logout"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/login",
        "/_auth/register"
      ]
    },
    "/_dashboard": {
      "filePath": "_dashboard.tsx",
      "children": [
        "/_dashboard/upload",
        "/_dashboard/",
        "/_dashboard/donations/$donationId",
        "/_dashboard/watch/$mediaId",
        "/_dashboard/donations/"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/_auth/login": {
      "filePath": "_auth/login.tsx",
      "parent": "/_auth"
    },
    "/_auth/register": {
      "filePath": "_auth/register.tsx",
      "parent": "/_auth"
    },
    "/auth/logout": {
      "filePath": "auth/logout.tsx"
    },
    "/_dashboard/upload": {
      "filePath": "_dashboard/upload.lazy.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/": {
      "filePath": "_dashboard/index.lazy.tsx",
      "parent": "/_dashboard"
    },
    "/_dashboard/donations/$donationId": {
      "filePath": "_dashboard/donations/$donationId.ts",
      "parent": "/_dashboard"
    },
    "/_dashboard/watch/$mediaId": {
      "filePath": "_dashboard/watch/$mediaId.ts",
      "parent": "/_dashboard"
    },
    "/_dashboard/donations/": {
      "filePath": "_dashboard/donations/index.ts",
      "parent": "/_dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
