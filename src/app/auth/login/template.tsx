import UserLayout from "@/components/layouts/UserLayout";

interface TemplateAuth {
  children: React.ReactNode;
}

const AuthTemplate: React.FC<TemplateAuth> = (props) => {
  return <UserLayout>{props.children}</UserLayout>;
};

export default AuthTemplate;
