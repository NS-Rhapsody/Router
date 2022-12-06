import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './SearchForm.css'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/search?q=' + query);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className="pesquisa" type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Pesquise aqui"/>
            <input className="botaoPesquisa" type="submit" value=" " />
        </form>
    </div>
  )
}

export default SearchForm