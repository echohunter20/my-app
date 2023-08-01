import Link from 'next/link'
//https://imagedelivery.net/FCXqi8BC3uKlNw5AGYVCpw/b1b13cec-dfa0-4464-7052-8aa9e5296400/public

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
      <img
            src="https://imagedelivery.net/FCXqi8BC3uKlNw5AGYVCpw/b1b13cec-dfa0-4464-7052-8aa9e5296400/public"
            className=" h-[15px] w-auto xl:h-[20px] 2xl:h-[25px] 3xl:h-[30px] "
          />
    </div>
  )
}

export default Home
