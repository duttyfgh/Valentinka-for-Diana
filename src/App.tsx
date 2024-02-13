import cls from './app.module.css'
import Envelope from './Envelope'

const App = () => {
  return (
    <>
      <div className={cls.bgForPC}>
        <span>Этот сайт доступен только для телефонов</span>
      </div>

      <main className='w-screen h-screen'>
        <Envelope/>
      </main>
    </>
  )
}

export default App