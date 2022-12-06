import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useFetch } from './hooks/useFetch'
import './Home.css'

const Home = () => {
  // 3 - carregamento de dados
  const url = 'http://localhost:3000/products'
  const [products, setProducts] = useState([]);


  const {data: items, httpConfig,loading, error} = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }
    
    httpConfig(product, "POST")

    setName("")
    setPrice("")

  }

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item =>(
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$: {item.price}</p>
            {/* 4 - rota dinamica */}
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Preço:
          <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
        </label>
        {loading && <input type="submit" disabled value="Aguarde" />}
        {!loading && <input type="submit" value="Criar" />}
      </form>
    </div>
  )
}

export default Home