import './styles.scss';

function PageNotFound() {
  return (
    <section className='App__pageError'>
      <div className="container">
        <h1>Page is not fount</h1>
        <h2>Error: 404</h2>
      </div>
    </section>
  )
}

export default PageNotFound