const MoviesSection = ( {title,children} ) => {
  
  return (
    <>
      <section>
        <div className='text-white lg:text-lg lg:text-md font-bold mb-5'> {title} </div>
        <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5">
            {children}
        </div>
       </section>
    </>
  );
};

export default MoviesSection;
