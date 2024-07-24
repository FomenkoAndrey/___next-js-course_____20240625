import Navbar from '@/components/Navbar'
import NavbarLanding from '@/components/landing/NavbarLanding'
import HeaderComponent from '@/components/landing/HeaderComponent'
import MainComponent from '@/components/landing/MainComponent'
import FooterComponent from '@/components/landing/FooterComponent'
import ServerComponent from '@/components/landing/ServerComponent'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <h1 className="header">Landing Page</h1>
      <NavbarLanding>
        <ServerComponent />
      </NavbarLanding>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </>
  )
}
