function Profile() {
    return(
      <>
        <section className="relative w-full bg-blue-700">
          <div className="overlay"></div>
          <div className="container mx-auto px-6 2xl:px-0 xl:max-w-7xl relative pt-24 pb-40 z-10">
            <section className="breadcrumb mb-6">
              <nav className="hidden md:inline-flex">
                <a href="/" className="breadcrumb__item font-roboto text-sm flex items-center max-w-[35ch] line-clamp-1 md:max-w-full md:line-clamp-none nuxt-link-active text-blue-50">Beranda</a>
                <a href="/profile" className="breadcrumb__item font-roboto text-sm flex items-center max-w-[35ch] line-clamp-1 md:max-w-full md:line-clamp-none nuxt-link-active font-bold text-gray-50" aria-current="page">::before Profil</a>
              </nav>
            </section>
          </div>
        </section>
        

      </>
    )
  }
  
  export default Profile;
  