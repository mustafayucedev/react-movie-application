import Header from "components/header/Header" 

const Default = ( {children} ) => {
  return (
    <div className="container">
        <Header />
        <main>
          {children}
        </main>
    </div>
  )
}

export default Default