const InputError = ({ field, errors }) => {
   return (
      <div className="ms-2 leading-none">
         {errors.length > 0 &&
            errors.map((error, i) => {
               return (
                  <small key={i} className="text-red-500 text-xs ">
                     {error.path === field ? error.msg + ' - ' : ''}
                  </small>
               )
            })}
      </div>
   )
}

export default InputError
