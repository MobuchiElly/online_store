const index = () => {
  return (
    <div style={{height:"calc(100vh - 20vh)"}}>
      index
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