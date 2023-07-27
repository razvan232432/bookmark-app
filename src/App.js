import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <nav className='navigation'>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className='leftContent'>
          <form>
            <h2 className='formTitle'>Add a bookmark</h2>
            <div>
              <label for='linkTitle' className='formLabel'>Enter a bookmark here</label>
              <input
                type='text'
                name='linkTitle'
                minLength='1'
                maxLength='25'
                placeholder='25 characters max' />
            </div>
            <div>
              <label for='linkHref' className='formLabel'>Enter a bookmark name</label>
              <input
                type='text'
                name='linkHref'
                minLength='7'
                placeholder='https://exemple.com/' />
            </div>
            <button>Add</button>
          </form>
        </div>
      </main>
    </div>
    <div className='rightContent'>

      </div>
      </div>
  );
}

export default App;
