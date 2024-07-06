import LoadingModal from '@/components/modals/LoadingModal';
import SuccessModal from '@/components/modals/SuccessModal';
import {useState} from 'react'

const checkout = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


  return (
    <div className="h-[100vh]" style={{height:"calc(100vh - 20vh)"}}>
        {
            loading && <LoadingModal closeModal={() => setLoading(false)}/>
        }
        {
          success && <SuccessModal />
        }
    </div>
  )
}

export default checkout