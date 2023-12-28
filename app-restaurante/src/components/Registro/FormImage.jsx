const FormImage = () => {
  return (
    <>
      <div className="w-full h-full relative flex">
        <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
      <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-sm"/>
    </>
  )
}

export default FormImage