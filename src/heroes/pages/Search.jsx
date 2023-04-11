import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../components';
import { getheroesByName } from '../helpers/getHeroesByName';

export const Search = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = "" } = queryString.parse( location.search )

  const heroes = getheroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <div className="row">
      <h1 className="mt-5">Search</h1>
      <hr />
      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSubmit }>
          <input 
            type="text" 
            placeholder='Search a hero' 
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
          />
          <button className="btn btn-info mt-3">
            Search
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        {
          (q === '') ? 
            <div className="alert alert-primary">
              Search a hero
            </div>
          : (heroes.length === 0 ) &&
            <div className="alert alert-danger">
              There is no results whit <b>{q}</b>
            </div>
        }
       
        {
          heroes.map(hero => (
            <HeroeCard key={hero.id} {...hero}/> 
          )) 
        }
      </div>
    </div>
  )
}