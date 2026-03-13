import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid"
import { PencilIcon } from "@heroicons/react/16/solid"
import { WalletIcon } from "@heroicons/react/16/solid"
import { CodeBracketIcon } from "@heroicons/react/16/solid"

export const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm md:max-w-2xl lg:max-w-7xl">

        <header>
          <div className="flex items-center justify-between px-4 pt-4 md:px-6 md:pt-6 lg:px-10 lg:pt-8">
            <div className="flex items-start gap-3">
              <img src="/logo.png" alt="logo" className="h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12" />

              <div className="flex flex-col">
                <h1 className="text-3xl font-bold leading-none text-[#06235b] md:text-4xl lg:text-5xl">
                  Skillory
                </h1>
                <p className="text-lg leading-snug opacity-30 md:text-lg lg:text-xl">
                  Grow your skills
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
              <Bars3BottomLeftIcon className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7" />

              <button className="rounded-full bg-[#ffc224] px-5 py-2 text-sm font-medium text-[#06235b] md:px-6 md:py-2.5 md:text-sm lg:px-7 lg:py-3 lg:text-base">
                Login
              </button>
            </div>
          </div>
        </header>

        <section className="bg-gray-200 px-6 pt-10 md:px-16 md:pt-12 lg:px-18 lg:pt-16">
          <div className="lg:max-w-4xl">
            <h1 className="text-4xl font-semibold leading-tight text-[#06235b] md:text-5xl lg:text-7xl">
              Never Stop{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 rounded-md bg-[#ffc224]"></span>
                <span className="relative px-2 text-white">Learning</span>
              </span>
              <br />
              Life <span className="font-extrabold text-[#06235b]">Never Stop</span> Teaching
            </h1>

            <button className="mt-5 mb-4 w-full rounded-full bg-[#5751e1] px-6 py-4 text-lg font-medium text-white md:w-auto md:px-8 md:py-3 lg:mt-8 lg:px-10 lg:py-4">
              Sign up free
            </button>
          </div>
        </section>

        <div className="px-4 pt-10 pb-10 md:px-6 md:pt-12 md:pb-12 lg:px-10 lg:pt-16 lg:pb-16">
          <section className="px-4 pt-16 text-center md:px-2 lg:px-0">
            <div className="flex justify-center">
              <span className="rounded-full bg-[#E6E8FF] px-4 py-2 text-sm font-medium text-[#4F46E5] md:text-sm lg:px-5 lg:py-2">
                Trending Categories
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold text-[#06235b] md:text-4xl lg:text-5xl">
              Top Category We Have
            </h2>

            <p className="mt-3 text-sm text-gray-500 md:text-base lg:text-base">
              when known printer took a galley of type scrambel edmake
            </p>
          </section>

          <section className="px-4 pt-10 lg:px-0">
            <div className="overflow-x-auto">
              <div className="flex min-w-max gap-6 rounded-full bg-gray-200">
                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <PencilIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Graphic Design
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (22)
                  </span>
                </div>

                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <WalletIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Finance
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (41)
                  </span>
                </div>

                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <CodeBracketIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Development
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (29)
                  </span>
                </div>

                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <CodeBracketIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Development
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (29)
                  </span>
                </div>

                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <CodeBracketIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Development
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (29)
                  </span>
                </div>

                <div className="flex w-64 shrink-0 snap-center flex-col items-center rounded-full bg-gray-200 px-6 py-10 md:w-72 lg:w-80">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-white md:h-24 md:w-24 lg:h-28 lg:w-28">
                    <CodeBracketIcon className="h-8 w-8 text-gray-500 md:h-9 md:w-9 lg:h-10 lg:w-10" />
                  </div>
                  <p className="mt-4 text-base font-medium text-[#1c1c3c] md:text-lg lg:text-xl">
                    Development
                  </p>
                  <span className="text-sm text-gray-400 md:text-sm lg:text-base">
                    (29)
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}