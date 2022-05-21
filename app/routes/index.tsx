import { redirect } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import { Button } from "~/components/forms/Button";
import { Input } from "~/components/forms/Input";
import { Password } from "~/components/forms/Password";

export const login = async (
  email: FormDataEntryValue | null,
  pwd: FormDataEntryValue | null
) => {
  console.log("email", email);
  console.log("pwd", pwd);
  const res = await fetch("http://localhost:9000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password: pwd,
    }),
  });

  return res.json();
};

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");
  const pwd = data.get("password");
  const res = await login(email, pwd);
  console.log("res", res);
  return redirect("/");
};

const App = () => {
  const actionData = useActionData();

  console.log(actionData);

  return (
    <div className="w-4/12 container mx-auto bg-white rounded font-body shadow-sm">
      <div className="p-8 border-b">
        <h1 className="m-0 font-display font-extrabold text-6xl text-indigo-500">
          Soothe
        </h1>
      </div>
      <div className="p-8 flex flex-row flex-wrap">
        <div className="w-full">
          <p className="mb-6">
            Please log in or{" "}
            <Link className="text-blue-700 underline" to="/signup">
              Sign up
            </Link>
          </p>
          <Form method="post">
            <Input name="email" className="mb-2" />
            <Password name="password" className="mb-2" />
            <Button>log in</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default App;
