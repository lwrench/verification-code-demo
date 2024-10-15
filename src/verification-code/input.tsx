import { Input } from "@/components/ui/input"
import { useContext, useEffect, useRef } from 'react'
import { StoreContext } from './context'

type IInputProp = {
  onPrev: () => void;
  onNext: () => void;
  flag?: number
}
function InputWrapper({onPrev, onNext, flag}: IInputProp) {
  const ref = useRef<HTMLInputElement | null>(null)
  const store = useContext(StoreContext)
  
  useEffect(() => {
    if (ref?.current && store?.register) {
      const uninstall = store?.register(ref?.current)
      return uninstall
    }
    return ()=>{}
  },[store])
  
  return <Input ref={ref} flag={flag} onKeyUp={(e) => {
    console.log(e.key)
    if (e.key === 'Backspace') {
      onPrev()
    } else {
      onNext()
    }
    return true
  }}/>
}

export default InputWrapper