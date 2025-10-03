import LoginButtonGithub from "@/component/atom/LoginButtonGithub"
import LoginButtonGoogle from "@/component/atom/LoginButtonGoogle"
import PageTitle from "@/component/atom/PageTitle"

const LoginPage = () => {
  return (
    <main className="h-[var(--hscreen-full)] flex justify-center items-center">
      <div className="w-[381px] border-[1px] border-color-blur-bg rounded-lg flex justify-center items-center flex-col py-10">
        <PageTitle>Login</PageTitle>
        <div className="h-10"></div>
        <LoginButtonGithub />
        <div className="h-5"></div>
        <LoginButtonGoogle />
      </div>
    </main>
  )
}

export default LoginPage