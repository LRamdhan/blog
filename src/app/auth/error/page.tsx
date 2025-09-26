type SearchParamValue = {
  callbackUrl: string,
  error: string
};

type SearchParam = Promise<SearchParamValue>;

const AuthErrorPage = async ({searchParams}: {searchParams: SearchParam}) => {
  const params: SearchParamValue = await searchParams;
  const errorType: string = params.error;

  return (
    <main className="w-full pt-14 flex flex-col justify-center items-center space-y-3">
      {errorType === 'OAuthAccountNotLinked' ? (<>
        <h1 className="text-2xl text-center capitalize">Account is already linked to another user</h1>
        <p>Try again using another account you have</p>
      </>) : (<>
        <h1 className="text-2xl text-center capitalize">Error</h1>
      </>)}
    </main>
  )
}

export default AuthErrorPage