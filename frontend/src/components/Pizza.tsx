import { useState } from 'react'
import { IPizza } from '../interfaces/PizzaInterface'

interface Props {
  pizza: IPizza
}

export default function Pizza (props: Props): JSX.Element {
  const { pizza } = props
  const [data, setData] = useState(pizza)
  const [dirty, setDirty] = useState(false)

  function updateName (name: string): void {
    setData(data => { return { ...data, name } })
    setDirty(true)
  }

  function updateDescription (description: string): void {
    setData(data => { return { ...data, description } })
    setDirty(true)
  }

  function onSave (): void {
    setDirty(true)
    console.log('REST call')
  }

  return (
    <div className='border-2 border-black text-center m-1 p-1'>
      <h3 className='text-xl m-1 p-1'>
        <input className='text-center' onChange={e => updateName(e.target.value)} value={data.name} />
      </h3>

      <div className='m-1 p-1'>
        <input className='text-center' onChange={(e) => updateDescription(e.target.value)} value={data.description} />
      </div>

      {
        dirty
          ? <div><button className='p-1 m-1 bg-blue-400 rounded border border-blue-400 text-white hover:scale-125' onClick={onSave}>Save</button></div>
          : null
      }
    </div>
  )
}
