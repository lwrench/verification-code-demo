
import { StoreContext } from './context'
import { useStore } from './use-store'
import Input from './input'

export type IProp = {
  length?: number;
}

function VerificationCode({ length = 6 }: IProp) {
  const [store] = useStore()

  const handlePrevInput = (now: number) => {
    const to  = Math.max(now -1, 0)
    store.get(to)?.node?.focus()
  }

  const handleNextInput = (now: number) => {
    const to = Math.min(now + 1, length -1)
    store.get(to)?.node?.focus()
  }

  return <StoreContext.Provider value={store}>
    {new Array(4).fill(0).map((_, index) => (
      <Input
        key={_ + index}
        flag={index}
        onPrev={() => {handlePrevInput(index)}}
        onNext={() => {handleNextInput(index)}}
      />))}
  </StoreContext.Provider>
}

export default VerificationCode