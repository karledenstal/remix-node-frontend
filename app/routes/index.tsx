import { Input } from "~/components/forms/Input";
import { Password } from "~/components/forms/Password";

const App = () => (
  <div className="w-4/12 container mx-auto bg-white rounded font-body shadow-sm">
    <div className="p-8 border-b">
      <h1 className="m-0 font-display font-extrabold text-6xl text-indigo-500">
        Soothe
      </h1>
    </div>
    <div className="p-8 flex flex-row flex-wrap">
      <div className="w-full">
        <form method="post">
          <Input name="email" className="mb-2" />
          <Password name="password" />
          <button>log in</button>
        </form>
      </div>
    </div>
  </div>
);

export default App;
