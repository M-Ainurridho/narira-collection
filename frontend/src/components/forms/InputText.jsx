import { useEffect, useState } from 'react'
import InputError from './InputError'

const InputText = ({
   type,
   field,
   placeholder,
   icon,
   value,
   onValueChange,
   modifier,
   errors,
   cursor = '',
}) => {
   const [isShow, setIsShow] = useState(false)

   const showPassword = () => {
      const password = document.querySelector(`.${modifier}`)

      isShow
         ? password.setAttribute('type', 'text')
         : password.setAttribute('type', 'password')
   }

   useEffect(() => {
      type === 'password' && showPassword()
   }, [isShow])

   return (
      <div className={`${errors.length > 0 ? 'mb-2' : 'mb-4'}`}>
         <div className="relative">
            <input
               type={type}
               value={value}
               className={`${modifier} bg-neutral-200 text-neutral-500 w-full py-2 ps-4 pe-10 border rounded-full placeholder:text-neutral-400 focus:outline-none focus:border-lilac focus:ring-1 focus:ring-lilac`}
               placeholder={placeholder}
               onChange={(e) => onValueChange(e.target.value)}
            />
            <span
               className={`absolute right-3 top-2.5 flex ${
                  cursor ? cursor : ''
               }`}
               onClick={() => type === 'password' && setIsShow(!isShow)}
            >
               {isShow ? (
                  <box-icon name="hide" color="#a3a3a3"></box-icon>
               ) : (
                  <box-icon name={icon} color="#a3a3a3"></box-icon>
               )}
            </span>
         </div>
         <InputError field={field} errors={errors} />
      </div>
   )
}

export default InputText
