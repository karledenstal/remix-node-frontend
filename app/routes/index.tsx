import { json, ActionFunction } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Input, Password } from "~/components/forms";

export const login = async (
  email: FormDataEntryValue | null,
  pwd: FormDataEntryValue | null
) => {
  const res = await fetch(`${process.env.API_URL}/auth/login`, {
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
  return json(res.token);
};

const App = () => {
  const token = useActionData();

  useEffect(() => {
    if (token) {
      localStorage.setItem("remix-token", token);
    }
  }, [token]);

  return (
    <div className="w-4/12 container mx-auto bg-white dark:bg-black dark:text-white rounded font-body shadow-sm">
      <div className="p-8 border-b dark:border-gray-800">
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
          <Form method="post" reloadDocument>
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
