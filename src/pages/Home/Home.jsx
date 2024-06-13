import NotCard from '../../components/Cards/NotCard'
import Navbar from '../../components/Navbar/Navbar'
import { MdAdd } from 'react-icons/md'
import AddEditNotes from './AddEditNotes'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8'>
          <NotCard
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
            isPinned={true}
            tags="#Meeting"
            title="Meeting on 7th April"
            date="3rd Apr 2024"
            content="Meeting on 7th April Meeting on 7th April"
          />
        </div>
      </div>
      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => {}}>
        <MdAdd className="text-[32px] text-white"/>
      </button>

      <AddEditNotes/>
    </>
  )
}

export default Home
