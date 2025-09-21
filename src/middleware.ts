import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
      const requireAuthPages: string[] = ['/'];
      const notRequireAuthPages: string[] = ['/login'];
      const isSignedIn: boolean = req.nextauth.token !== null;
      const currentPath: string = req.nextUrl.pathname;      

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
      authorized: ({ token }) => {        
        return true;
      },
    },
  },
)

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] }