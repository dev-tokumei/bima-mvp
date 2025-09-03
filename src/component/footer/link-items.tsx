import instagram from '@/assets/svg/instagram.svg'
import facebook from '@/assets/svg/fb.svg'
import ok from '@/assets/svg/ok.svg'
import youtube from '@/assets/svg/yt.svg'
import linkedin from '@/assets/svg/in.svg'

export const LinkItems = () => {
  return (
    <div className="flex space-x-3 mb-4">
      <a href="https://instagram.com/bima__insurance" target="_blank">
        <img src={instagram} alt="instagram" className="w-6 h-6" />
      </a>
      <a href="https://facebook.com/bima.tj" target="_blank">
        <img src={facebook} alt="facebook" className="w-6 h-6" />
      </a>
      <a href="https://ok.ru/bima.tj" target="_blank">
        <img src={ok} alt="ok" className="w-6 h-6" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCil9_39psuG2MXvDBdKqraQ"
        target="_blank"
      >
        <img src={youtube} alt="youtube" className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/company/10004574" target="_blank">
        <img src={linkedin} alt="linkedin" className="w-6 h-6" />
      </a>
    </div>
  )
}
