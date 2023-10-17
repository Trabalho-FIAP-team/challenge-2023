
const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="h-full flex justify-center items-center bg-[url('/images/auth.svg')] bg-cover">{children}</div>
  )
}

export default AuthLayout;