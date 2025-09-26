import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware"
import apiResponse from "./lib/apiResponse";

export default withAuth(
  function middleware(req) {
      const requireAuthPages: string[] = ['/'];
      const notRequireAuthPages: string[] = ['/login'];
      const isSignedIn: boolean = req.nextauth.token !== null;
      const currentPath: string = req.nextUrl.pathname;        
      
      // cek auth in api
      if(currentPath.startsWith('/api') && !isSignedIn) {
        return apiResponse.unauthorized();
      }

      // cek auth in pages
      if(isSignedIn) {
        const included: string | undefined = notRequireAuthPages.find((page: string) => {
          if(page === '/') {
            return currentPath === '/';
          }
          return currentPath.startsWith(page);
        })        
        if(included) {
          if(currentPath !== '/') {
            return NextResponse.redirect(new URL('/', req.url));          
          }
        }
      } else {
        const included: string | undefined = requireAuthPages.find((page: string) => {   
          if(page === '/') {
            return currentPath === '/';
          }       
          return currentPath.startsWith(page);
        })
        if(included) {
          if(!currentPath.startsWith('/login')) {
            return NextResponse.redirect(new URL('/login', req.url));          
          }
        }
      }
      
      const res = NextResponse.next();
      return res;
  },
  {
    callbacks: {
      authorized: () => {    
        //  intended to be true
        return true;
      },
    },
  },
)

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }