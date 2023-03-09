import { IPizza } from '../interfaces/PizzaInterface'
import Pizza from '../components/Pizza'

export default function Main (): JSX.Element {
  const pizzas: IPizza[] = [
    { id: 1, name: 'Cheese pizza', description: 'very cheesy' },
    { id: 2, name: 'Al Tono pizza', description: 'lots of tuna' }
  ]

  return (
    <main>
      {pizzas.map(pizza => <Pizza pizza={pizza} key={crypto.randomUUID()} />)}
    </main>
  )
}
