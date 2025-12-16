"use client";

type Props = {};

const TestPage = (props: Props) => {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    }
  };
  return (
    <>
      <main className="flex grow m-auto justify-center items-center">
        {/* <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
          }}
        ></div> */}
        {/* <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(45px) grayscale(20%)",
            WebkitBackdropFilter: "blur(45px) grayscale(20%)",
          }}
        ></div> */}
        {/* <Image
          src={`https://picsum.photos/1024/720`}
          alt="bg"
          width={1024}
          height={720}
          className="absolute top-0 left-0 min-w-full -z-50 box-border object-center"
        /> */}
        <div className="bg-dark m-2 p-2 border">
          <div className="bg m-2 p-2 border">
            <div className="bg-light m-2 p-2 border">
              <h1 className="text-4xl font-bold mb-4">Welcome to Test Page</h1>
              <p className="text-base text-mute">
                This is centered text on the screen
              </p>
              <button onClick={toggleTheme} className="button-2">
                Toggle Theme
              </button>
              {/* <ul>
            <li>
              <Link className="mr-2 my-4 button" href={"/change-password"}>
                change password
              </Link>
            </li>
            <li>
              <Link className="mr-2 my-4 button" href={"/forgot-password"}>
                frogotpassword
              </Link>
            </li>
            <li>
              <Link className="mr-2 my-4 button" href={"/reset-password"}>
                reset password
              </Link>
            </li>
          </ul> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TestPage;
