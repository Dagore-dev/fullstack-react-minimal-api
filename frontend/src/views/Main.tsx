import { IPizza } from '../interfaces/PizzaInterface'
import Pizza from '../components/Pizza'
import { useEffect, useState } from 'react'

export default function Main (): JSX.Element {
  const [pizzas, setPizzas] = useState<IPizza[]>([])

  useEffect(() => {
    fetch('http://localhost:5059/pizza')
      .then(response => {
        response.json()
          .then(data => {
            setPizzas(data)
          })
          .catch(error => console.log(error))
      })
      .catch(error => console.log('FETCH', error))
  }, [])

  return (
    <main>
      {pizzas.map(pizza => <Pizza pizza={pizza} key={crypto.randomUUID()} />)}
    </main>
  )
}
