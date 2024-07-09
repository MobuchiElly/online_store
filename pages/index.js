const index = () => {
  return (
    <div style={{height:"calc(100vh - 20vh)"}}>
      <Head>
        <title>Lapis Online Shopping Experience</title>
        <meta name="description" content="Trending and Exclusive Mens wears just for you" />
        <meta name="keywords" content="mens wear, trending, exclusive" />
      </Head>
    </div>
  )
}

export default index

export const getServerSideProps = () => {
  return {
    redirect: {
      destination:'/shop',
      permananent: false,
    }
  }
}