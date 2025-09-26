import LoginButtonGithub from "@/component/atom/LoginButtonGithub"
import LoginButtonGoogle from "@/component/atom/LoginButtonGoogle"
import PageTitle from "@/component/atom/PageTitle"

const LoginPage = () => {

  return (
    <main>
      <PageTitle>Login</PageTitle>
      <br /><br />
      <LoginButtonGithub />
      <br /><br />
      <LoginButtonGoogle />
    </main>
  )
}

export default LoginPage